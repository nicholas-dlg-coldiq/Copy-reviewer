/**
 * Best Practices and Guidelines for Cold Email Copy
 * Source: ColdIQ Messaging Frameworks + Cold Email Outreach Playbook + Industry Best Practices
 *
 * This content will be included in the AI's context when reviewing emails.
 */

const bestPractices = {
    // Core principles from ColdIQ playbooks (Updated with Outreach Playbook)
    principles: [
        {
            category: 'Personalization',
            rules: [
                'NO generic AI compliments - they sound fake',
                'Use custom prompts for personalization, not templates',
                'Focus on interests/simple facts that prospects consistently care about',
                'Personalize based on time business was founded (Presidents/Owners are proud of longevity)',
                'Reference specific, recent company information (funding, hiring, product launch)',
                'Avoid sounding like what they already have in place',
                'Make it worth the person\'s time',
                'Say it like a human would say it',
                'Say something your competitors can\'t say'
            ]
        },
        {
            category: 'Subject Lines',
            rules: [
                'Keep under 50 characters',
                'Add a space or two before the subject to create pattern interrupt',
                'Avoid spam trigger words (free, guaranteed, urgent)',
                'Use curiosity or relevance, not clickbait',
                'Personalize when possible',
                'Questions work well (but avoid overused "Quick question")'
            ]
        },
        {
            category: 'Opening Hook',
            rules: [
                'First sentence must be 100% about THEM, not you',
                'Lead with insight, observation, or relevant connection',
                'Avoid "I hope this email finds you well" - it\'s fluff',
                'Get to value within first 2 sentences',
                'No fluff sentences like "Hope your are well"',
                'Call out negatives - diffuses negativity',
                'Poke the Bear with Tweet-size illumination question'
            ]
        },
        {
            category: 'Value Proposition',
            rules: [
                'Focus on outcomes, not features',
                'Quantify value when possible (saved X hours, increased Y%)',
                'Make it specific to their situation',
                'Include social proof or credibility signal',
                'One clear value prop per email',
                'Avoid generic words like "optimize," "streamline," "save time," "save money"',
                'Focus on what SUCKS about how people currently get the job done',
                'Solutions have no value without a problem people can relate to',
                'Don\'t make offers too good to be true (even if they are)'
            ]
        },
        {
            category: 'Call to Action',
            rules: [
                'Single, clear CTA - never multiple asks',
                'Low commitment preferred (thoughts, quick chat, "Can I share how?")',
                'Make it easy to say yes',
                'Avoid asking for meetings in first touch',
                'Use "Worth a chat?" or "Worth exploring?"',
                'Give an out: "No worries if you\'re too busy to reply"',
                'Focus on the conversation, not the call',
                'Ask if you can send content rather than pushing it'
            ]
        },
        {
            category: 'Length & Structure',
            rules: [
                'Total length: 70-95 words optimal',
                'Never exceed 125 words',
                'Use short paragraphs (1-2 sentences max)',
                'Make it skimmable in 10 seconds',
                'Super duper short is better',
                'Write with an eraser - cut everything non-essential',
                'It\'s super short',
                'It doesn\'t start with "Hi [First-Name]" like all other emails'
            ]
        },
        {
            category: 'Tone & Style',
            rules: [
                'Conversational, not formal - people don\'t lose their sense of humor at work',
                'Be cheeky - make them smile',
                'Show personality and style',
                'Be you - authenticity matters',
                'Casual writing feels more relatable',
                'Picture makes it human',
                'Sent from a person',
                'Feels human, not robotic',
                'Use humor in sign-offs: "Awaiting your fair but stern reply" or "Awaiting your profanity-filled response"'
            ]
        },
        {
            category: 'Critical DON\'Ts',
            rules: [
                'Don\'t start with "I hope this email finds you well"',
                'No long paragraphs (3+ sentences)',
                'Never use more than one question mark',
                'Don\'t talk about yourself in first paragraph',
                'Avoid generic templates that could apply to anyone',
                'No attachments in first email',
                'Don\'t follow up more than 3 times',
                'Don\'t use exclamation points excessively',
                'Never personalize in a way that sounds like it\'s sent to 10,000+ people',
                'Don\'t lack a LinkedIn URL - let them research you',
                'Avoid sensitive topics that sound fake'
            ]
        },
        {
            category: 'Specificity & Credibility',
            rules: [
                'The more specific or crispy you are, the more credible you are',
                'Follow the structure',
                'Be crispy or specific',
                'Give an out: "Not sure it\'s a fit"',
                'Result someone like me has that I want (social proof)',
                'Use specific numbers and data',
                'Reference exact challenges, not vague problems'
            ]
        },
        {
            category: 'Psychological Triggers',
            rules: [
                'Use loss aversion to motivate response ("You will LOSE X if you don\'t" > "You will GAIN X if you do")',
                'Lower resistance by being curious, not pushy',
                'Create pattern interrupts',
                'Make people feel good - they\'ll want to respond',
                'Ask questions that make them think',
                'Use "Not too different" persona - "I work with ICP similar to you"'
            ]
        }
    ],

    // Proven frameworks from ColdIQ
    frameworks: [
        {
            name: 'Ask Before Pitch - Pattern Interrupt (Will Allred)',
            template: `Hey {{first_name}}, [open-ended question as CTA]

You're [trigger/observation]. [Potential problem deriving from Observation]

[How product solves Problem]

PS- Relevant because_____`,
            example: `Hey Will, think this would help George & Anne?

You're hiring new sellers. Despite the same templates, some reps get results and others don't.

Lavender gives you a clearer picture on why things work. We've even see it identify clear personalization plays for the team to use.

Figured that be relevant w the new focus upmarket.

Let me know.`,
            whenToUse: 'Use when you have a specific observation/trigger and want low-pressure engagement'
        },
        {
            name: 'Not Too Different Persona',
            template: `I work with [ICP similar to target]

They tell me they struggle with [...]`,
            whenToUse: 'Use to build credibility through similar customers'
        },
        {
            name: 'Upfront Value (Jordan Crawford)',
            template: `[here is "value offering] hope it was helpful`,
            example: `here's a list of every founder at every company that just implemented HubSpot... I hope it was helpful.`,
            whenToUse: 'Lead with value, no strings attached - builds reciprocity'
        },
        {
            name: 'Leverage Content in Outbound (Ethan Parker)',
            template: `Hi [first name], [insert name of content][how it helps].

Can I send it over to you?

[first name]

PS - Thought this was relevant because _____`,
            example: `Hey Jason - we've complied a cheat sheet on how folks like [social proof] are getting their AE's self-sourcing more than 30% of their own pipeline.

Can I send it over to you?

Ethan

PS - Thought this was relevant because I saw you recently decreased our SDR headcount and are hiring 3 more AEs right now.`,
            whenToUse: 'When you have valuable content assets to share'
        },
        {
            name: 'Why Are You Paying? (Leif Bisping)',
            structure: [
                'Set the stage by describing a typical life situation',
                'Describe an obvious choice you would make given several options',
                'Compare it to a "choice" a prospect is making relating to your solution'
            ],
            example: `You see Diet Coke. Three options - $0, $1, or $1.50 for a can. What would you choose? Zero, right?

Then why are you paying Stripe 1.5% in international processing fees when you could be paying nothing?`,
            whenToUse: 'When you can create a strong analogy to highlight waste/inefficiency'
        },
        {
            name: 'Do the Math (Thibaut Souyris)',
            structure: [
                'Trigger: The reason for reaching out (better with a number)',
                'Quick pitch: Short explanation of qualified impact',
                'Calculation: Back of napkin calculation',
                'CTA: Ask for interest'
            ],
            example: `Mary, noticed you have over 50 open positions on your job portal.

We help tech scale ups reduce their new employee churn from 30% to 10% or less.

With a typical cost of mis-hire around $30,000 per employee, this would mean going from 15 mis-hires to 5, resulting in $300,000 saved.

Worth a chat?`,
            whenToUse: 'When you can quantify clear ROI with simple math'
        },
        {
            name: 'Short-Trigger Based Outreach (Guillermo Blanco)',
            template: `Relevant trigger (personalization)
Validation + value prop
CTA`,
            example: `G, saw that Reach's latest blog post doesn't include a Meta tag which can affect its online visibility.

{{client}} improved theirs by creating meta tags using ChatGPT.

Can I share how?`,
            whenToUse: 'When you find a specific, actionable trigger'
        },
        {
            name: 'Challenge of Similar Companies (Patrick Trümpi)',
            template: `Personalization (if available)
Challenge of others in the industry
Solution
CTA
PS with something funny or personalized`,
            example: `Hey Patrick,

We are working with a lot of security officers at banks who faced losses of $9K per hour due to ransomware and had phishing victims every 11 seconds.

We have a global team of experts available 24/7 to respond to and contain cyber incidents and can react in hours not days. When is the last time you tested your plan?

Cheers,

P. PS: I would attach a link but we both work in security😅`,
            whenToUse: 'When targeting specific industries with known pain points'
        },
        {
            name: 'Neutral Insight (Chelsea Castle)',
            structure: [
                'Reference a third-party resource - bring trusted publication to discussion',
                'Explain why they should read it',
                'Explain why you\'re sharing it',
                'Optional: Make a soft ask and nod back to original CTA'
            ],
            example: `George, do you read Outreach's blog?

Given you're likely ramping reps, I thought you'd find it interesting.

The VP of Sales Dev at Segment wrote about how she scaled her team to a $3.2B acquisition.

They did it without using canned templates. (and using Lavender!)

Check it out

Will

P.S. Any thoughts on my last note?`,
            whenToUse: 'When you have third-party content that\'s highly relevant'
        },
        {
            name: 'Leader Responsibilities (Vin Matano)',
            template: `{{First Name}} as a {{role}} leader, curious how {{responsibility}}

Either way, {{personalize}}!

{{signature}}`,
            example: `Armand, as a Sales leader, curious how your reps prioritize which accounts to reach out to?

If I can create a list for your team of Accounts researching competitors like Salesforce would it be worth a conversation?

Either way, congrats on recently being named Top Sales Coach!`,
            whenToUse: 'When targeting leaders with specific responsibilities'
        },
        {
            name: 'Write a Good Cold Email (Josh Braun Framework)',
            structure: [
                'Who are you targeting?',
                'What problem are you trying to solve?',
                'What they are currently doing?',
                'What\'s the problem with their current solution?',
                '+ other solutions',
                'Our solution'
            ],
            whenToUse: 'Use this as a thinking framework before writing any email'
        }
    ],

    // Real examples that worked
    realExamples: [
        {
            title: 'Manual Email Style (Josh Braun - Henry\'s Cold Email)',
            email: `Hey, Josh – Subscribed to your email list a few weeks ago. I've been doing digital marketing for eight years – have a few unconventional ideas that might goose sales of your Badass Guide without offering discounts.

I don't get paid unless you make more.

Worth batting around a few ideas? Henry.

P.S. Not sure it's a fit for you, but several course creators I'm working with are seeing a 10-12% MoM boost in sales.`,
            whyItWorked: [
                '"Subscribed" – Personalization that shows real engagement',
                '"Don\'t get paid unless you make more" - Lowers risk, shows alignment',
                '"Not sure it\'s a fit" – Lowers resistance, sounds curious not pushy',
                '"10-12% MoM boost" – Plausible and exciting proof',
                '"a few unconventional ideas" – piques curiosity',
                'Casual writing feels relatable',
                'We\'re in this together, not hit-and-run'
            ],
            responseRate: 'High'
        }
    ],

    // Common mistakes and how to fix them
    mistakes: [
        {
            mistake: 'Too long - over 150 words',
            why: 'Prospects spend <10 seconds on cold emails',
            fix: 'Cut everything that isn\'t essential. Aim for 70-95 words.'
        },
        {
            mistake: 'Leading with your company/product',
            why: 'They don\'t care about you yet',
            fix: 'First sentence must be 100% about them'
        },
        {
            mistake: 'Generic personalization like "I saw you work at X"',
            why: 'It\'s obvious and lazy - everyone does this',
            fix: 'Reference something specific and recent that requires real research'
        },
        {
            mistake: 'Multiple CTAs',
            why: 'Creates decision paralysis',
            fix: 'One clear, low-commitment ask'
        },
        {
            mistake: 'Feature dumping',
            why: 'Features don\'t resonate - outcomes do',
            fix: 'Talk about the result they\'ll get, not how you do it'
        },
        {
            mistake: 'Generic AI compliments',
            why: 'Sounds fake and mass-sent',
            fix: 'Use custom prompts and focus on facts they actually care about'
        },
        {
            mistake: 'Using "optimize," "streamline," "save time," "save money"',
            why: 'Everyone uses these - they don\'t stand out',
            fix: 'Be specific about the actual problem and outcome'
        },
        {
            mistake: 'Making claims like "Lose 50 pounds in 2 weeks" or "10X your signups"',
            why: 'Too good to be true = not credible',
            fix: 'Ask questions instead: "Are you open to a different perspective for X?"'
        }
    ],

    // Copywriting principles from the pros
    copywritingPrinciples: [
        {
            principle: 'Write with an Eraser',
            description: 'Write your full email, then cut everything non-essential. The shorter version almost always performs better.',
            example: 'Long version (bad) vs Short version (good) - see Josh Braun examples'
        },
        {
            principle: 'Porsche Ad Rule',
            description: 'Follow structure. Be crispy or specific. Stay away from generic words. Focus on what sucks about current solution.',
            example: '"Honestly now, did you spend your youth dreaming about someday hard-pasting entire Excel pages into Google Sheets?"'
        },
        {
            principle: 'Make People Feel Good',
            description: 'When you make a prospect smile, their brain says "Hey, that made me feel good; I\'m going to respond."',
            tactics: [
                'Call out negatives - diffuses negativity',
                'Use humor appropriately',
                'Give an out: "No I\'m not too busy to reply"',
                'Include social proof they want',
                'Feel human, not robotic',
                'Show personality - be cheeky'
            ]
        },
        {
            principle: 'Don\'t Say This, Say This Instead',
            badExamples: [
                '❌ "We reduce shipping costs"',
                '❌ "Lose 50 pounds in 2 weeks"',
                '❌ "Increase sign-ups by 10X"'
            ],
            goodExamples: [
                '✅ "Hi John – We\'re seeing that many e-commerce companies in the pet space doing at least 5k/month in revenue are overpaying for shipping by 10-15%. One of the reasons is the weight and dimensions of boxes. Worth exploring?"',
                '✅ "Are you open to a different perspective for losing weight without dieting?"',
                '✅ "Have you considered using \'influencers\' on TikTok to reach young customers?"'
            ]
        },
        {
            principle: 'Be Specific',
            description: 'The more specific or crispy you are, the more credible you are',
            example: 'Not "We help with sales" but "We help e-commerce companies in the pet space doing 5k+/month reduce shipping costs by 10-15%"'
        },
        {
            principle: 'Use Loss Aversion',
            description: 'People are more motivated by avoiding loss than gaining benefits',
            example: '"You will LOSE 5 years of your life if you don\'t quit smoking" > "You will GAIN 5 years if you quit"'
        }
    ],

    // Questions to ask yourself before sending
    selfCheckQuestions: [
        'How can I make this email worth this person\'s time?',
        'How can I say it like a human would say it?',
        'What can I say that my competitors can\'t say?',
        'Does this make the prospect feel good?',
        'Am I being specific enough?',
        'Is every word essential?',
        'Would I respond to this email?'
    ],

    // Advanced personalization tactics from Outreach Playbook
    personalizationTactics: [
        {
            category: 'Social Content & Triggers',
            tactics: [
                'LinkedIn posts (recent posts show current priorities)',
                'Company news (funding, product launches, hiring)',
                'Job changes (new roles = new priorities)',
                'Industry events they attended/spoke at',
                'Content they shared or engaged with',
                'Cultural/regional details (e.g., "being from Chicago, I know...")',
                'Mutual connections or communities'
            ],
            bestPractices: [
                'Ultra-specific beats surface-level every time',
                'Reference content they\'ve created, not just consumed',
                'Tie observation directly to your value prop',
                'Use social proof from their network when possible'
            ]
        },
        {
            category: 'Role & Account-Level Personalization',
            tactics: [
                'Company size & growth stage (scaling pains vary by stage)',
                'Tech stack (visible from job postings, LinkedIn)',
                'Recent hiring patterns (what roles = what priorities)',
                'Competitive landscape position',
                'Geographic expansion signals',
                'Time in business (founder pride in longevity)'
            ],
            example: '"Saw you\'re hiring 3 AEs after reducing SDR headcount - seems like you\'re shifting to AE self-sourcing?"'
        },
        {
            category: 'AI-Powered Personalization',
            promptTemplates: [
                {
                    name: 'LinkedIn Post Analysis',
                    prompt: 'Analyze this LinkedIn post and tell me: 1) What is the person trying to solve/achieve? 2) What emotions are present? 3) How could [your product] tie into this?'
                },
                {
                    name: 'Company News Hook',
                    prompt: 'Based on this company news [paste article], what are 3 potential pain points this change might create that [your solution] addresses?'
                },
                {
                    name: 'Credibility Check',
                    prompt: 'Review this cold email opening line. Does it sound like it could be sent to 10,000 people or is it truly specific to this one person? How can I make it more specific?'
                }
            ]
        }
    ],

    // Psychological levers and value hooks from Outreach Playbook
    psychologicalTriggers: [
        {
            trigger: 'Curiosity & Pattern Interrupts',
            description: 'Break expected patterns to capture attention',
            examples: [
                'Subject line with extra spaces before text',
                'Opening with a question instead of statement',
                'Unconventional analogies (Diet Coke example)',
                'Starting with "No" - pattern interrupt',
                'Humor in unexpected places'
            ],
            usage: 'Use when targeting saturated/fatigued audiences'
        },
        {
            trigger: 'Ego Validation',
            description: 'Make prospects feel smart/successful without sounding fake',
            examples: [
                '"Saw your post about [topic] - couldn\'t agree more about [specific point]"',
                '"Your approach to [X] is exactly what we see working at [similar companies]"',
                'Reference awards, promotions, or public recognition authentically'
            ],
            warning: 'Must be genuine - generic compliments backfire'
        },
        {
            trigger: 'Social Proof',
            description: 'Leverage similar customers or results',
            examples: [
                '"We work with [similar company type] who faced [same challenge]"',
                '"3 of your competitors recently switched from [X] to [our solution]"',
                '"[Recognizable name] in your space saw [specific result]"'
            ],
            bestPractices: [
                'Name-drop only when highly relevant',
                'Use "not too different" framing - builds relatability',
                'Quantify results but keep them believable'
            ]
        },
        {
            trigger: 'Pain/Fear/Urgency',
            description: 'Highlight what they\'re losing/missing',
            examples: [
                '"You\'re likely overpaying by [X]% because..."',
                '"Most companies your size don\'t realize they\'re losing [Y] to [problem]"',
                '"Without [X], you\'ll keep facing [specific pain]"'
            ],
            framework: 'Loss aversion > gain framing (losing $100 hurts more than gaining $100 feels good)',
            warning: 'Don\'t fear-monger - make it factual and fixable'
        },
        {
            trigger: 'Reciprocity',
            description: 'Give value first, ask second',
            examples: [
                'Share a relevant resource/insight upfront',
                'Free audit or analysis of their situation',
                'List of relevant prospects/opportunities',
                'Industry report or data they\'d find valuable'
            ],
            framework: 'Upfront Value (Jordan Crawford) - "Here\'s [value], hope it was helpful"'
        },
        {
            trigger: 'Risk Reversal',
            description: 'Remove barriers and objections preemptively',
            examples: [
                '"Not sure it\'s a fit for you, but..."',
                '"No worries if you\'re too busy to reply"',
                '"I don\'t get paid unless you make more"',
                '"Worth exploring?" vs "Can we schedule a call?"'
            ],
            impact: 'Dramatically lowers resistance and increases reply rates'
        }
    ],

    // CTA frameworks and best practices from Outreach Playbook
    ctaFrameworks: [
        {
            type: 'Low-Commitment Questions',
            examples: [
                'Worth a chat?',
                'Worth exploring?',
                'Can I share how?',
                'Would this be helpful?',
                'Am I off base?',
                'Does this resonate?'
            ],
            whyItWorks: 'Easy to say yes, non-threatening, conversational',
            responseRate: 'Highest for first touch'
        },
        {
            type: 'Permission-Based',
            examples: [
                'Can I send it over to you?',
                'Mind if I share the approach?',
                'Would you be open to seeing how [X] does this?'
            ],
            whyItWorks: 'Asking permission = respect + curiosity without pressure',
            whenToUse: 'When offering content or resources'
        },
        {
            type: 'Yes/No Simplicity',
            examples: [
                'Think this would help [specific person/team]?',
                'Is this a priority right now?',
                'Sound relevant?'
            ],
            whyItWorks: 'Removes decision fatigue - binary choice',
            whenToUse: 'When you have strong personalization/trigger'
        },
        {
            type: 'Thought-Provoking Questions',
            examples: [
                'How are you handling [specific challenge] right now?',
                'What\'s your take on [industry trend]?',
                'Have you considered [alternative approach]?'
            ],
            whyItWorks: 'Engages them intellectually, positions you as peer',
            whenToUse: 'When targeting senior/strategic roles'
        },
        {
            type: 'Give an Out',
            examples: [
                'Either way, congrats on [achievement]!',
                'No worries if timing isn\'t right',
                'If not, no hard feelings - just thought it was relevant'
            ],
            whyItWorks: 'Reduces pressure, increases likability, makes them want to respond',
            critical: 'Always include - dramatically improves tone'
        }
    ],

    // Follow-up frameworks from Outreach Playbook
    followUpFrameworks: [
        {
            name: 'Value-Add Follow-Up',
            structure: 'Don\'t just "bump" - add new value each time',
            examples: [
                'Follow-up 1: Share relevant article/insight',
                'Follow-up 2: Reference new trigger (company news)',
                'Follow-up 3: Offer different perspective/case study'
            ],
            rule: 'Each follow-up should stand alone - never say "just following up"'
        },
        {
            name: 'Breakup Email',
            timing: 'After 2-3 follow-ups with no response',
            template: 'Hey [Name], I\'ll take your silence as a "not right now" - no worries at all. If things change, you know where to find me. [Optional: one-liner about why you reached out]',
            whyItWorks: 'Often triggers response because it\'s the last chance',
            responseRate: 'Surprisingly high - sometimes highest of sequence'
        },
        {
            name: 'Trigger-Based Re-Engagement',
            examples: [
                'New funding announcement',
                'Executive hire/change',
                'Product launch',
                'Competitor news',
                'Industry regulation change'
            ],
            template: 'Saw [trigger] - figured I\'d check back in. [Tie to original value prop]'
        }
    ],

    // Use case plays from Outreach Playbook
    useCasePlays: [
        {
            scenario: 'New Executive Hire',
            timing: 'First 30-90 days in role',
            why: 'New execs want quick wins and are evaluating everything',
            approach: [
                'Reference their previous company/role',
                'Acknowledge the transition/challenges',
                'Offer quick win relevant to their mandate',
                'Keep it super short - they\'re drinking from firehose'
            ],
            example: '"Congrats on the new VP Sales role at [Company]. In your first 90 days at [PreviousCo], did you face [X challenge]? Seeing similar at [Company] based on [observation]."'
        },
        {
            scenario: 'Champion Job Change',
            timing: 'Within weeks of them starting new role',
            why: 'They know you, trust you, and might bring you to new company',
            approach: [
                'Congratulate genuinely',
                'Reference past relationship/results',
                'Ask if similar challenges exist at new company',
                'Offer to help them look good early'
            ],
            example: '"Sarah, congrats on joining [NewCo]! When we worked together at [OldCo], we helped you [result]. Any similar challenges at [NewCo] where we could help you hit the ground running?"'
        },
        {
            scenario: 'Ghosted Prospect Re-Engage',
            timing: '3-6 months after conversation went cold',
            why: 'Circumstances change - timing might be right now',
            approach: [
                'Acknowledge the gap openly',
                'Share new trigger or value',
                'Reference what you discussed before (shows you remember)',
                'Make it easy to re-engage'
            ],
            example: '"Hey [Name], we chatted 6 months ago about [topic] - timing wasn\'t right then. Saw you just [trigger] and figured it might be worth revisiting. Thoughts?"'
        },
        {
            scenario: 'Lost Opportunity Re-Engage',
            timing: '6-12 months after losing deal',
            why: 'Buyer\'s remorse, solution didn\'t work out, or new stakeholders',
            approach: [
                'Don\'t be bitter or pushy',
                'Share new capabilities/results',
                'Ask how chosen solution is working (genuine curiosity)',
                'Offer to be resource even if they don\'t buy'
            ],
            example: '"[Name], hope [ChosenSolution] is working out well. We\'ve added [new capability] since we last spoke - several companies that initially went with [competitor] have found it valuable. Worth keeping on your radar?"'
        },
        {
            scenario: 'Hiring/Scaling Trigger',
            source: 'Job postings, LinkedIn hiring posts',
            why: 'Hiring = growth = new budgets + priorities',
            approach: [
                'Reference specific roles they\'re hiring',
                'Connect to pain point those hires suggest',
                'Offer solution that helps new team succeed',
                'Show you understand their growth stage'
            ],
            example: '"Saw you\'re hiring 3 new SDRs - congrats on the growth! When we work with teams scaling outbound, the biggest challenge is usually ramping reps to productivity quickly. Worth exploring how [solution] could help?"'
        }
    ],

    // Humor and analogies from Outreach Playbook
    humorAndAnalogies: [
        {
            type: 'Relatable Analogies',
            purpose: 'Simplify complex value prop through familiar comparison',
            examples: [
                'Diet Coke pricing analogy (Why pay more when free option exists?)',
                '"Honestly now, did you spend your youth dreaming about someday hard-pasting entire Excel pages into Google Sheets?" (Porsche ad style)',
                'Compare their current process to obviously inefficient alternative'
            ],
            rules: [
                'Analogy must be universally understood',
                'Keep it brief - one sentence',
                'Must directly map to your value prop',
                'Avoid offensive or polarizing comparisons'
            ]
        },
        {
            type: 'Cheeky Sign-Offs',
            purpose: 'Memorable, shows personality, makes them smile',
            examples: [
                '"Awaiting your fair but stern reply"',
                '"Awaiting your profanity-filled response"',
                '"Either way, [genuine compliment]!"',
                '"No hard feelings if not - I\'ll just be over here [humorous self-deprecation]"'
            ],
            warning: 'Know your audience - conservative industries may not appreciate',
            impact: 'Can significantly boost response rates by being memorable'
        },
        {
            type: 'Pattern Interrupt Humor',
            purpose: 'Stand out in crowded inbox',
            examples: [
                'Subject line: "No" (then explain what you\'re NOT trying to sell)',
                'Opening: "I\'ll keep this shorter than a TikTok"',
                'PS with intentional typo followed by acknowledgment'
            ],
            usage: 'Use sparingly - effectiveness decreases if overdone'
        }
    ],

    // AI prompting strategies from Outreach Playbook
    aiPromptingStrategies: [
        {
            useCase: 'Personalization Research',
            prompt: 'I\'m reaching out to [Name], [Title] at [Company]. They recently [posted/did/announced X]. Analyze what pain points or priorities this suggests, and how [our solution] might be relevant. Give me 3 specific opening lines.',
            why: 'AI excels at connecting dots between signals and pain points'
        },
        {
            useCase: 'Credibility Check',
            prompt: 'Review this cold email. Score it 1-10 on: 1) Does it sound mass-sent? 2) Is the personalization authentic? 3) Would you respond to this? Be brutally honest.',
            why: 'Catch generic/fake-sounding language before sending'
        },
        {
            useCase: 'Brevity Optimization',
            prompt: 'Make this email 50% shorter without losing the core message. Cut all fluff.',
            why: 'AI ruthlessly removes unnecessary words'
        },
        {
            useCase: 'Value Prop Clarity',
            prompt: 'After reading this email, can you explain back to me: 1) What problem I solve, 2) Who I solve it for, 3) Why they should care? If you can\'t, tell me what\'s unclear.',
            why: 'Tests if value prop actually lands'
        },
        {
            useCase: 'Tone Analysis',
            prompt: 'What emotion does this email convey? Does it sound pushy, desperate, helpful, or consultative? How can I adjust the tone to be more [desired tone]?',
            why: 'Ensures tone matches intent'
        }
    ]
};

/**
 * Get formatted best practices content for AI prompt
 */
function getBestPracticesContext() {
    let context = '# COLD EMAIL BEST PRACTICES (ColdIQ Framework)\n\n';

    // Add principles
    context += '## Core Principles\n\n';
    bestPractices.principles.forEach(principle => {
        context += `### ${principle.category}\n`;
        principle.rules.forEach(rule => {
            context += `- ${rule}\n`;
        });
        context += '\n';
    });

    // Add frameworks
    context += '## Proven Frameworks\n\n';
    bestPractices.frameworks.forEach(framework => {
        context += `**${framework.name}**\n`;
        if (framework.template) {
            context += `Template:\n${framework.template}\n\n`;
        }
        if (framework.structure) {
            context += `Structure:\n${framework.structure.map(s => `- ${s}`).join('\n')}\n\n`;
        }
        if (framework.example) {
            context += `Example:\n${framework.example}\n\n`;
        }
        if (framework.whenToUse) {
            context += `When to use: ${framework.whenToUse}\n\n`;
        }
        context += '---\n\n';
    });

    // Add personalization tactics
    context += '## Advanced Personalization Tactics\n\n';
    bestPractices.personalizationTactics.forEach(tactic => {
        context += `**${tactic.category}**\n`;
        if (tactic.tactics) {
            tactic.tactics.forEach(t => context += `- ${t}\n`);
        }
        if (tactic.bestPractices) {
            context += 'Best Practices:\n';
            tactic.bestPractices.forEach(bp => context += `- ${bp}\n`);
        }
        if (tactic.example) {
            context += `Example: ${tactic.example}\n`;
        }
        context += '\n';
    });

    // Add psychological triggers
    context += '## Psychological Triggers & Value Hooks\n\n';
    bestPractices.psychologicalTriggers.forEach(trigger => {
        context += `**${trigger.trigger}**\n`;
        context += `${trigger.description}\n`;
        if (trigger.examples) {
            context += 'Examples:\n';
            trigger.examples.forEach(ex => context += `- ${ex}\n`);
        }
        if (trigger.framework) context += `Framework: ${trigger.framework}\n`;
        if (trigger.warning) context += `⚠️ ${trigger.warning}\n`;
        if (trigger.impact) context += `Impact: ${trigger.impact}\n`;
        context += '\n';
    });

    // Add CTA frameworks
    context += '## Call-to-Action Frameworks\n\n';
    bestPractices.ctaFrameworks.forEach(cta => {
        context += `**${cta.type}**\n`;
        if (cta.examples) {
            context += 'Examples:\n';
            cta.examples.forEach(ex => context += `- ${ex}\n`);
        }
        context += `Why it works: ${cta.whyItWorks}\n`;
        if (cta.whenToUse) context += `When to use: ${cta.whenToUse}\n`;
        if (cta.critical) context += `⚠️ CRITICAL: ${cta.critical}\n`;
        context += '\n';
    });

    // Add follow-up frameworks
    context += '## Follow-Up Frameworks\n\n';
    bestPractices.followUpFrameworks.forEach(followUp => {
        context += `**${followUp.name}**\n`;
        if (followUp.structure) context += `${followUp.structure}\n`;
        if (followUp.timing) context += `Timing: ${followUp.timing}\n`;
        if (followUp.template) context += `Template: ${followUp.template}\n`;
        if (followUp.examples) {
            followUp.examples.forEach(ex => context += `- ${ex}\n`);
        }
        if (followUp.rule) context += `Rule: ${followUp.rule}\n`;
        if (followUp.whyItWorks) context += `Why it works: ${followUp.whyItWorks}\n`;
        context += '\n';
    });

    // Add use case plays
    context += '## Situational Use Case Plays\n\n';
    bestPractices.useCasePlays.forEach(play => {
        context += `**${play.scenario}**\n`;
        if (play.timing) context += `Timing: ${play.timing}\n`;
        if (play.why) context += `Why: ${play.why}\n`;
        if (play.approach) {
            context += 'Approach:\n';
            play.approach.forEach(a => context += `- ${a}\n`);
        }
        if (play.example) context += `Example: ${play.example}\n`;
        context += '\n';
    });

    // Add copywriting principles
    context += '## Copywriting Principles\n\n';
    bestPractices.copywritingPrinciples.forEach(cp => {
        context += `**${cp.principle}**: ${cp.description}\n`;
        if (cp.example) context += `Example: ${cp.example}\n`;
        if (cp.tactics) context += `Tactics:\n${cp.tactics.map(t => `- ${t}`).join('\n')}\n`;
        context += '\n';
    });

    // Add common mistakes
    context += '## Common Mistakes to Flag\n\n';
    bestPractices.mistakes.forEach(mistake => {
        context += `❌ ${mistake.mistake}\n`;
        context += `Why: ${mistake.why}\n`;
        context += `Fix: ${mistake.fix}\n\n`;
    });

    // Add self-check questions
    context += '## Self-Check Questions\n\n';
    bestPractices.selfCheckQuestions.forEach(q => {
        context += `- ${q}\n`;
    });

    return context;
}

module.exports = {
    bestPractices,
    getBestPracticesContext
};
