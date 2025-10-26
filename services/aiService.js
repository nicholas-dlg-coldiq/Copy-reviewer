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

    async improveCopy(subjectLine, emailCopy, review) {
        if (this.provider === 'claude') {
            return await this.improveWithClaude(subjectLine, emailCopy, review);
        } else if (this.provider === 'openai') {
            return await this.improveWithOpenAI(subjectLine, emailCopy, review);
        } else {
            throw new Error('Invalid AI provider specified');
        }
    }

    async improveWithClaude(subjectLine, emailCopy, review) {
        const systemPrompt = this.buildImproveSystemPrompt();
        const userPrompt = this.buildImproveUserPrompt(subjectLine, emailCopy, review);

        try {
            const message = await this.anthropic.messages.create({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 2000,
                temperature: 0.8,
                system: systemPrompt,
                messages: [
                    {
                        role: 'user',
                        content: userPrompt
                    }
                ]
            });

            const responseText = message.content[0].text;
            return this.parseImproveResponse(responseText);
        } catch (error) {
            console.error('Claude API error:', error);
            throw new Error('Failed to generate improved copy from Claude API');
        }
    }

    async improveWithOpenAI(subjectLine, emailCopy, review) {
        throw new Error('OpenAI integration not yet implemented. Please use Claude.');
    }

    buildImproveSystemPrompt() {
        const bestCopiesContext = bestPerformingCopies.getBestCopiesSummary();
        const bestPracticesContext = getBestPracticesContext();

        return `You are an expert cold email copywriter. Your role is to rewrite cold emails to maximize response rates based on proven best practices and patterns.

${bestPracticesContext}

BEST PERFORMING PATTERNS (from our database):
${bestCopiesContext}

Your rewrite should:
1. Apply the feedback from the review
2. Follow the patterns from our best performing emails
3. Maintain the core value proposition but improve delivery
4. Be specific, personalized, and action-oriented
5. Optimize for clarity and brevity (70-95 words for body)
6. Use conversational, authentic tone
7. Ensure proper paragraph spacing with double line breaks between paragraphs

Respond ONLY with valid JSON in this exact structure:
{
    "improvedSubject": "<improved subject line>",
    "improvedBody": "<improved email body with \\n\\n between paragraphs>",
    "changes": [
        {
            "category": "<category name, e.g., Subject Line, Opening Hook, etc.>",
            "issue": "<what was wrong with the original - be specific and brief>",
            "reason": "<what you changed/fixed - describe the improvement>",
            "why": "<why this works - include data/stats when possible, e.g., '4-7 word subjects get 2x higher opens'>",
            "summary": "<1 short sentence (under 12 words) explaining the key change>",
            "detail": "<2-3 sentences with deeper explanation of the change, the reasoning, and any relevant signals used (hiring, expansion, funding, etc.). Mention specific signals if applicable.>",
            "signal": "<if a signal was used (expansion, hiring, funding, executive change, etc.), mention it here. Otherwise leave empty string>"
        }
    ],
    "furtherTips": [
        "<most impactful tip for personalization - be specific>",
        "<second most impactful tip about research or tactics>",
        "<third most impactful tip from best practices>"
    ],
    "expectedImpact": "<brief summary of how this should perform better>"
}

IMPORTANT for changes array:
- Keep "issue" and "reason" SHORT and punchy (under 10 words each when possible)
- Make "why" data-driven but concise - 1-2 short sentences max
- "summary" is what shows when collapsed - make it ultra-concise (under 12 words)
- "detail" is what shows when expanded - 2-3 sentences with deeper reasoning
- "signal" should mention if you used Company Growth, Hiring, Funding, Executive Change, Product Launch, Content/Social, Awards, etc.
- Each change shows: Issue (problem) → Reason (fix) → Why (data-backed reasoning)
- Examples:
  - issue: "12 words, no personalization"
  - reason: "7 words with [Company] placeholder"
  - why: "4-7 word subjects get 2x higher opens. Personalization adds +26%."
  - summary: "Shortened subject and added personalization placeholder"
  - detail: "The original subject was too long at 12 words. Research shows 4-7 word subjects get 2x higher open rates, and personalization increases opens by 26%. We shortened it to 7 words and added a [Company] placeholder for easy personalization."
  - signal: ""

  - issue: "Generic greeting, no research"
  - reason: "Specific milestone: midwest expansion"
  - why: "Specific observations boost replies by 32% - proves you did homework."
  - summary: "Used company expansion signal for authentic personalization"
  - detail: "Generic greetings sound mass-sent. We leveraged a real signal - their recent midwest expansion - to show genuine research. Specific observations like this boost reply rates by 32% because they prove you're not sending the same email to thousands of people."
  - signal: "Company Growth & Expansion"

IMPORTANT for furtherTips:
- ONLY provide exactly 3 tips (no more, no less)
- Make each tip specific and actionable (not generic advice)
- Focus on: ultra-specific personalization tactics, using real research/data, advanced tactics from best practices
- Examples: LinkedIn posts, company news, specific case studies, triggers like job changes/funding, "give an out" lines`;
    }

    buildImproveUserPrompt(subjectLine, emailCopy, review) {
        return `Based on the review feedback below, please rewrite this cold email to maximize response rate.

---ORIGINAL SUBJECT LINE---
${subjectLine}
---END SUBJECT LINE---

---ORIGINAL EMAIL BODY---
${emailCopy}
---END EMAIL BODY---

---REVIEW FEEDBACK---
Score: ${review.overallScore}/100
${JSON.stringify(review.sections, null, 2)}
---END REVIEW FEEDBACK---

Generate an improved version that addresses the feedback and follows best performing patterns. Provide your response in the JSON format specified.`;
    }

    parseImproveResponse(responseText) {
        try {
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                // Clean the JSON string by removing control characters within string values
                let jsonString = jsonMatch[0];

                // First try to parse directly
                try {
                    const parsed = JSON.parse(jsonString);
                    return this.validateImproveResponse(parsed);
                } catch (parseError) {
                    // If that fails, try a more aggressive cleaning approach
                    console.log('Initial parse failed, attempting to clean JSON...');

                    // Remove control characters but preserve intentional newlines in content
                    jsonString = jsonString.replace(/[\u0000-\u001F]+/g, ' ');

                    const parsed = JSON.parse(jsonString);
                    return this.validateImproveResponse(parsed);
                }
            }
            throw new Error('No valid JSON found in response');
        } catch (error) {
            console.error('Failed to parse improve response:', error);
            throw new Error('Failed to parse improved copy response');
        }
    }

    validateImproveResponse(response) {
        if (!response.improvedSubject || !response.improvedBody) {
            throw new Error('Invalid improve response structure');
        }

        // Ensure furtherTips exists
        if (!response.furtherTips || !Array.isArray(response.furtherTips)) {
            response.furtherTips = [];
        }

        return response;
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
