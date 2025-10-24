/**
 * Best Performing Cold Email Patterns
 *
 * This file contains patterns and characteristics from top-performing cold emails.
 * Update this with your own successful cold email examples and patterns.
 */

const bestPerformingCopies = [
    {
        id: 1,
        category: 'B2B SaaS',
        responseRate: 45,
        characteristics: {
            subjectLength: 38,
            emailLength: 89, // words
            personalizationPoints: 3,
            hasDataPoint: true,
            hasSocialProof: true,
            ctaType: 'low-commitment',
            tone: 'conversational'
        },
        patterns: [
            'Opens with specific observation about prospect\'s company',
            'Mentions mutual connection or relevant context',
            'Uses one concrete data point or statistic',
            'CTA is simply asking for thoughts/feedback',
            'No more than 90 words total'
        ]
    },
    {
        id: 2,
        category: 'Agency Services',
        responseRate: 38,
        characteristics: {
            subjectLength: 42,
            emailLength: 95,
            personalizationPoints: 2,
            hasDataPoint: true,
            hasSocialProof: false,
            ctaType: 'question',
            tone: 'direct'
        },
        patterns: [
            'Subject line poses a question about pain point',
            'First line references specific aspect of their business',
            'Shares brief, relevant case study or result',
            'Ends with simple yes/no question',
            'Total length under 100 words'
        ]
    },
    {
        id: 3,
        category: 'Consulting',
        responseRate: 42,
        characteristics: {
            subjectLength: 35,
            emailLength: 72,
            personalizationPoints: 4,
            hasDataPoint: false,
            hasSocialProof: true,
            ctaType: 'low-commitment',
            tone: 'consultative'
        },
        patterns: [
            'References recent company news or change',
            'Mentions specific industry challenge',
            'Offers insight without asking for anything',
            'PS line with low-commitment CTA',
            'Very short - under 75 words'
        ]
    }
];

/**
 * Aggregate statistics from best performing emails
 */
const aggregateStats = {
    averageResponseRate: 41.7,
    optimalSubjectLength: '35-42 characters',
    optimalEmailLength: '70-95 words',
    averagePersonalizationPoints: 3,
    topCTAType: 'low-commitment or question',
    preferredTone: 'conversational or consultative'
};

/**
 * Key patterns that appear in high-performing emails
 */
const commonPatterns = [
    {
        pattern: 'Specific personalization',
        description: 'Reference something specific about the prospect\'s company, recent news, or role',
        frequency: '100%'
    },
    {
        pattern: 'Brief and scannable',
        description: 'Keep total length under 100 words, ideally 70-90',
        frequency: '100%'
    },
    {
        pattern: 'Social proof or credibility',
        description: 'Mention similar clients, results, or mutual connections',
        frequency: '67%'
    },
    {
        pattern: 'Data-driven hook',
        description: 'Use a specific number, stat, or data point',
        frequency: '67%'
    },
    {
        pattern: 'Low-commitment CTA',
        description: 'Ask for thoughts, quick chat, or simple yes/no rather than meeting',
        frequency: '67%'
    },
    {
        pattern: 'Subject line under 50 chars',
        description: 'Keep subject lines short and specific',
        frequency: '100%'
    }
];

/**
 * Get a summary of best performing patterns for the AI
 */
function getBestCopiesSummary() {
    return `
TOP PERFORMING PATTERNS:

Average Response Rate: ${aggregateStats.averageResponseRate}%
Optimal Subject Length: ${aggregateStats.optimalSubjectLength}
Optimal Email Length: ${aggregateStats.optimalEmailLength}
Average Personalization Points: ${aggregateStats.averagePersonalizationPoints}

KEY PATTERNS (with frequency):
${commonPatterns.map(p => `- ${p.pattern} (${p.frequency}): ${p.description}`).join('\n')}

EXAMPLES BY CATEGORY:
${bestPerformingCopies.map(copy => `
${copy.category} (${copy.responseRate}% response rate):
${copy.patterns.map(p => `  - ${p}`).join('\n')}
`).join('\n')}
`;
}

/**
 * Add a new best performing copy to the database
 */
function addBestPerformingCopy(copy) {
    bestPerformingCopies.push({
        id: bestPerformingCopies.length + 1,
        ...copy,
        addedAt: new Date().toISOString()
    });
}

module.exports = {
    bestPerformingCopies,
    aggregateStats,
    commonPatterns,
    getBestCopiesSummary,
    addBestPerformingCopy
};
