const Anthropic = require('@anthropic-ai/sdk');
const bestPerformingCopies = require('../data/bestPerformingCopies');
const { getBestPracticesContext } = require('../data/bestPractices');

class AIService {
    constructor() {
        this.provider = process.env.AI_PROVIDER || 'claude';

        if (this.provider === 'claude') {
            this.anthropic = new Anthropic({
                apiKey: process.env.ANTHROPIC_API_KEY
            });
        }
    }

    async reviewCopy(subjectLine, emailCopy) {
        if (this.provider === 'claude') {
            return await this.reviewWithClaude(subjectLine, emailCopy);
        } else if (this.provider === 'openai') {
            return await this.reviewWithOpenAI(subjectLine, emailCopy);
        } else {
            throw new Error('Invalid AI provider specified');
        }
    }

    async reviewWithClaude(subjectLine, emailCopy) {
        const systemPrompt = this.buildSystemPrompt();
        const userPrompt = this.buildUserPrompt(subjectLine, emailCopy);

        try {
            const message = await this.anthropic.messages.create({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 2000,
                temperature: 0.7,
                system: systemPrompt,
                messages: [
                    {
                        role: 'user',
                        content: userPrompt
                    }
                ]
            });

            const responseText = message.content[0].text;
            return this.parseAIResponse(responseText);
        } catch (error) {
            console.error('Claude API error:', error);
            throw new Error('Failed to get review from Claude API');
        }
    }

    async reviewWithOpenAI(subjectLine, emailCopy) {
        // Placeholder for OpenAI implementation
        // You can implement this similarly to Claude when needed
        throw new Error('OpenAI integration not yet implemented. Please use Claude.');
    }

    buildSystemPrompt() {
        const bestCopiesContext = bestPerformingCopies.getBestCopiesSummary();
        const bestPracticesContext = getBestPracticesContext();

        return `You are an expert cold email copywriter and analyst. Your role is to review cold email copy and provide actionable, specific feedback to improve response rates.

${bestPracticesContext}

BEST PERFORMING PATTERNS (from our database):
${bestCopiesContext}

Your analysis should:
1. Be specific and actionable
2. Reference concrete examples from the best performing patterns
3. Provide a numerical score out of 100
4. Break down feedback into clear sections
5. Be constructive and encouraging while being honest

Respond ONLY with valid JSON in this exact structure:
{
    "overallScore": <number 0-100>,
    "sections": [
        {
            "title": "<section name>",
            "content": "<main feedback>",
            "items": ["<point 1>", "<point 2>", ...],
            "highlight": {
                "title": "<highlight title>",
                "content": "<key takeaway>"
            }
        }
    ]
}

Sections should include:
- Subject Line Analysis
- Opening Hook
- Value Proposition
- Personalization
- Call to Action
- Length and Structure
- Comparison to Best Performers`;
    }

    buildUserPrompt(subjectLine, emailCopy) {
        return `Please review this cold email and provide detailed feedback:

---SUBJECT LINE---
${subjectLine}
---END SUBJECT LINE---

---EMAIL BODY---
${emailCopy}
---END EMAIL BODY---

Provide your analysis in the JSON format specified.`;
    }

    parseAIResponse(responseText) {
        try {
            // Try to extract JSON from the response
            // Sometimes the AI might add explanatory text before/after the JSON
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0]);
                return this.validateResponse(parsed);
            }
            throw new Error('No valid JSON found in response');
        } catch (error) {
            console.error('Failed to parse AI response:', error);
            // Return a fallback response
            return this.getFallbackResponse(responseText);
        }
    }

    validateResponse(response) {
        // Ensure the response has the required structure
        if (!response.overallScore || !Array.isArray(response.sections)) {
            throw new Error('Invalid response structure');
        }

        // Ensure score is between 0 and 100
        response.overallScore = Math.max(0, Math.min(100, response.overallScore));

        return response;
    }

    getFallbackResponse(rawText) {
        // If parsing fails, return a structured fallback
        return {
            overallScore: 50,
            sections: [
                {
                    title: 'Analysis',
                    content: rawText || 'Unable to generate detailed analysis. Please try again.',
                    items: []
                }
            ]
        };
    }
}

module.exports = new AIService();
