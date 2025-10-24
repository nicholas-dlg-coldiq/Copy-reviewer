// API Configuration
const API_CONFIG = {
    endpoint: '/api/review-copy', // This will be your backend endpoint
    timeout: 30000 // 30 seconds
};

// DOM Elements
const subjectLineInput = document.getElementById('subjectLine');
const emailCopyTextarea = document.getElementById('emailCopy');
const subjectCounter = document.getElementById('subjectCounter');
const bodyCounter = document.getElementById('bodyCounter');
const reviewBtn = document.getElementById('reviewBtn');
const clearBtn = document.getElementById('clearBtn');
const improveBtn = document.getElementById('improveBtn');
const resultsSection = document.getElementById('resultsSection');
const reviewContent = document.getElementById('reviewContent');
const improvedSection = document.getElementById('improvedSection');
const improvedContent = document.getElementById('improvedContent');
const errorSection = document.getElementById('errorSection');
const errorMessage = document.getElementById('errorMessage');
const overallScore = document.getElementById('overallScore');
const demoModeToggle = document.getElementById('demoModeToggle');

// State to store current review
let currentReview = null;

// Event Listeners
reviewBtn.addEventListener('click', handleReviewClick);
clearBtn.addEventListener('click', handleClearClick);
improveBtn.addEventListener('click', handleImproveClick);
subjectLineInput.addEventListener('input', updateSubjectCounter);
emailCopyTextarea.addEventListener('input', updateBodyCounter);

// Initialize counters on page load
updateSubjectCounter();
updateBodyCounter();

// Word Counter Functions
function countWords(text) {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).length;
}

function updateSubjectCounter() {
    const wordCount = countWords(subjectLineInput.value);
    subjectCounter.textContent = `${wordCount} word${wordCount !== 1 ? 's' : ''}`;
}

function updateBodyCounter() {
    const wordCount = countWords(emailCopyTextarea.value);
    bodyCounter.textContent = `${wordCount} word${wordCount !== 1 ? 's' : ''}`;
}

// Handle Review Button Click
async function handleReviewClick() {
    const subjectLine = subjectLineInput.value.trim();
    const copyText = emailCopyTextarea.value.trim();

    // Validation - both fields required
    if (!subjectLine && !copyText) {
        showError('Please enter both a subject line and email body.');
        return;
    }
    if (!subjectLine) {
        showError('Please enter a subject line.');
        return;
    }
    if (!copyText) {
        showError('Please enter your email body.');
        return;
    }

    // Hide previous results/errors
    hideError();
    hideResults();

    // Show loading state
    setLoadingState(true);

    try {
        const result = await reviewCopy(subjectLine, copyText);
        displayResults(result);
    } catch (error) {
        showError(error.message || 'An error occurred while reviewing your copy. Please try again.');
    } finally {
        setLoadingState(false);
    }
}

// Handle Clear Button Click
function handleClearClick() {
    subjectLineInput.value = '';
    emailCopyTextarea.value = '';
    updateSubjectCounter();
    updateBodyCounter();
    hideResults();
    hideImproved();
    hideError();
    currentReview = null;
    subjectLineInput.focus();
}

// Handle Improve Button Click
async function handleImproveClick() {
    if (!currentReview) {
        showError('Please review your copy first before generating improvements.');
        return;
    }

    const subjectLine = subjectLineInput.value.trim();
    const copyText = emailCopyTextarea.value.trim();

    // Hide previous errors
    hideError();
    hideImproved();

    // Show loading state for improve button
    setImproveLoadingState(true);

    try {
        const result = await improveCopy(subjectLine, copyText, currentReview);
        displayImprovedCopy(result);
    } catch (error) {
        showError(error.message || 'An error occurred while generating improved copy. Please try again.');
    } finally {
        setImproveLoadingState(false);
    }
}

// Toggle collapsible sections
function toggleReviewContent() {
    reviewContent.classList.toggle('collapsed');
}

// Review Copy - API Call
async function reviewCopy(subjectLine, copyText) {
    // Check if demo mode is enabled
    if (demoModeToggle.checked) {
        return getDemoResponse(subjectLine, copyText);
    }

    // For production, call your backend API
    const response = await fetch(API_CONFIG.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            subjectLine: subjectLine,
            copy: copyText
        }),
        signal: AbortSignal.timeout(API_CONFIG.timeout)
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

// Display Results
function displayResults(result) {
    // Store current review for improve functionality
    currentReview = result;

    // Clear previous content
    reviewContent.innerHTML = '';

    // Set overall score
    const score = result.overallScore || 0;
    overallScore.innerHTML = `Score: ${score}/100`;
    overallScore.className = 'overall-score ' + getScoreClass(score);

    // Create sections based on the result structure
    if (result.sections && Array.isArray(result.sections)) {
        result.sections.forEach(section => {
            const sectionEl = createReviewSection(section);
            reviewContent.appendChild(sectionEl);
        });
    }

    // Add click handler to results title
    const resultsTitle = document.querySelector('.results-title');
    if (resultsTitle) {
        resultsTitle.onclick = toggleReviewContent;
    }

    // Show improve button and results
    improveBtn.style.display = 'inline-flex';
    reviewContent.classList.add('collapsed'); // Start collapsed
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Create Review Section Element
function createReviewSection(section) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'review-section';

    const title = document.createElement('h3');
    title.textContent = section.title;
    sectionDiv.appendChild(title);

    if (section.content) {
        const content = document.createElement('p');
        content.textContent = section.content;
        sectionDiv.appendChild(content);
    }

    if (section.items && Array.isArray(section.items)) {
        const list = document.createElement('ul');
        section.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        sectionDiv.appendChild(list);
    }

    if (section.highlight) {
        const highlightBox = document.createElement('div');
        highlightBox.className = 'highlight-box';
        const strong = document.createElement('strong');
        strong.textContent = section.highlight.title || 'Important:';
        highlightBox.appendChild(strong);
        const text = document.createTextNode(section.highlight.content);
        highlightBox.appendChild(text);
        sectionDiv.appendChild(highlightBox);
    }

    return sectionDiv;
}

// Get Score Class for Styling
function getScoreClass(score) {
    if (score >= 80) return 'score-excellent';
    if (score >= 60) return 'score-good';
    if (score >= 40) return 'score-fair';
    return 'score-poor';
}

// Set Loading State
function setLoadingState(isLoading) {
    const btnText = reviewBtn.querySelector('.btn-text');
    const btnLoader = reviewBtn.querySelector('.btn-loader');

    if (isLoading) {
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-flex';
        reviewBtn.disabled = true;
        clearBtn.disabled = true;
        subjectLineInput.disabled = true;
        emailCopyTextarea.disabled = true;
    } else {
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        reviewBtn.disabled = false;
        clearBtn.disabled = false;
        subjectLineInput.disabled = false;
        emailCopyTextarea.disabled = false;
    }
}

// Show Error
function showError(message) {
    errorMessage.textContent = message;
    errorSection.style.display = 'block';
    errorSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Hide Error
function hideError() {
    errorSection.style.display = 'none';
}

// Hide Results
function hideResults() {
    resultsSection.style.display = 'none';
    improveBtn.style.display = 'none';
}

// Hide Improved Section
function hideImproved() {
    improvedSection.style.display = 'none';
}

// Improve Copy - API Call
async function improveCopy(subjectLine, copyText, review) {
    // For production, call your backend API
    const response = await fetch('/api/improve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            subjectLine: subjectLine,
            copy: copyText,
            review: review
        }),
        signal: AbortSignal.timeout(API_CONFIG.timeout)
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

// Display Improved Copy
function displayImprovedCopy(result) {
    improvedContent.innerHTML = '';

    // Create improved copy display
    const improvedDiv = document.createElement('div');
    improvedDiv.className = 'improved-wrapper';

    // Improved Subject
    const subjectSection = document.createElement('div');
    subjectSection.className = 'improved-section-block';
    subjectSection.innerHTML = `
        <h3 class="improved-section-title">Subject Line</h3>
        <div class="improved-text-box">
            <p class="improved-text">${escapeHtml(result.improvedSubject)}</p>
        </div>
    `;
    improvedDiv.appendChild(subjectSection);

    // Improved Body
    const bodySection = document.createElement('div');
    bodySection.className = 'improved-section-block';
    bodySection.innerHTML = `
        <h3 class="improved-section-title">Email Body</h3>
        <div class="improved-text-box">
            <p class="improved-text" style="white-space: pre-wrap;">${escapeHtml(result.improvedBody)}</p>
        </div>
    `;
    improvedDiv.appendChild(bodySection);

    // Changes Made
    if (result.changes && Array.isArray(result.changes) && result.changes.length > 0) {
        const changesSection = document.createElement('div');
        changesSection.className = 'improved-section-block';
        const changesTitle = document.createElement('h3');
        changesTitle.className = 'improved-section-title';
        changesTitle.textContent = 'Key Changes';
        changesSection.appendChild(changesTitle);

        const changesList = document.createElement('ul');
        changesList.className = 'changes-list';
        result.changes.forEach(change => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${escapeHtml(change.category)}:</strong> ${escapeHtml(change.reason)}`;
            changesList.appendChild(li);
        });
        changesSection.appendChild(changesList);
        improvedDiv.appendChild(changesSection);
    }

    // Expected Impact
    if (result.expectedImpact) {
        const impactSection = document.createElement('div');
        impactSection.className = 'improved-section-block impact-box';
        impactSection.innerHTML = `
            <strong>Expected Impact:</strong> ${escapeHtml(result.expectedImpact)}
        `;
        improvedDiv.appendChild(impactSection);
    }

    improvedContent.appendChild(improvedDiv);
    improvedSection.style.display = 'block';
    improvedSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Set Improve Button Loading State
function setImproveLoadingState(isLoading) {
    const btnText = improveBtn.querySelector('.btn-text');
    const btnLoader = improveBtn.querySelector('.btn-loader');

    if (isLoading) {
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-flex';
        improveBtn.disabled = true;
    } else {
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        improveBtn.disabled = false;
    }
}

// Demo Mode Response - For testing without backend
async function getDemoResponse(subjectLine, copyText) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const subjectWordCount = countWords(subjectLine);
    const bodyWordCount = countWords(copyText);
    const subjectLength = subjectLine.length;

    return {
        overallScore: 72,
        sections: [
            {
                title: 'Subject Line Analysis',
                content: `Subject: "${subjectLine}" - ${subjectWordCount} words, ${subjectLength} characters`,
                items: [
                    subjectLength <= 50 ? '✓ Length is appropriate (under 50 characters)' : '✗ Too long - subject lines should be under 50 characters',
                    'Could benefit from more personalization',
                    'Consider adding curiosity or urgency element'
                ]
            },
            {
                title: 'Opening Hook',
                content: 'The opening could be stronger to capture immediate attention.',
                items: [
                    'Personalization is present but generic',
                    'Missing a clear connection to recipient\'s pain point',
                    'Consider leading with a relevant insight or observation'
                ]
            },
            {
                title: 'Value Proposition',
                content: 'Your value proposition needs to be clearer and more specific.',
                highlight: {
                    title: 'Key Improvement:',
                    content: 'Focus on specific outcomes rather than features. Quantify the value when possible.'
                }
            },
            {
                title: 'Call to Action',
                content: 'The CTA is clear but could be lower friction.',
                items: [
                    'Good: Single, clear ask',
                    'Improve: Reduce commitment level',
                    'Consider: Offer multiple response options'
                ]
            },
            {
                title: 'Length & Structure',
                content: `Email body: ${bodyWordCount} words`,
                items: [
                    bodyWordCount >= 70 && bodyWordCount <= 95 ? '✓ Length is in the optimal range (70-95 words)' : bodyWordCount < 70 ? '⚠ Email is a bit short - aim for 70-95 words' : '⚠ Email is too long - aim for 70-95 words',
                    'Use short paragraphs (1-2 sentences max)',
                    'Make it skimmable in 10 seconds'
                ]
            },
            {
                title: 'Comparison to Best Performers',
                content: 'Based on analysis of top-performing cold emails in our database:',
                items: [
                    'Top performers personalize using specific, recent information',
                    'Best emails focus on one clear value prop',
                    'High converters use low-friction CTAs like "Worth exploring?"',
                    'Most successful emails are conversational, not formal'
                ]
            }
        ]
    };
}
