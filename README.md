# Cold Email Copy Reviewer

An AI-powered tool that reviews cold email copy and provides actionable feedback based on proven best practices and high-performing email patterns.

## Features

- **AI-Powered Analysis**: Uses Claude (or OpenAI) to analyze your cold email copy
- **Best Practice Comparison**: Compares your copy against proven high-performing patterns
- **Detailed Feedback**: Get specific, actionable recommendations across multiple dimensions:
  - Subject line effectiveness
  - Opening hook strength
  - Value proposition clarity
  - Personalization quality
  - Call-to-action optimization
  - Length and structure
- **Overall Score**: Receive a score out of 100 with color-coded rating
- **Embeddable**: Clean, minimal UI that can be embedded in other pages
- **Demo Mode**: Test the UI without backend setup

## Tech Stack

### Frontend
- Vanilla JavaScript (no frameworks required)
- Modern CSS with CSS variables
- Responsive design

### Backend
- Node.js
- Express.js
- Anthropic Claude API (or OpenAI)

## Quick Start

### 1. Clone and Install

```bash
cd Copy-reviewer
npm install
```

### 2. Configure Environment

Copy the example environment file and add your API keys:

```bash
cp .env.example .env
```

Edit `.env` and add your API key:

```env
ANTHROPIC_API_KEY=your_claude_api_key_here
AI_PROVIDER=claude
PORT=3000
```

### 3. Run the Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

### 4. Open in Browser

Navigate to `http://localhost:3000`

## Project Structure

```
Copy-reviewer/
├── index.html              # Main UI
├── styles.css              # Styling
├── script.js               # Frontend logic
├── server.js               # Express server
├── package.json            # Dependencies
├── .env.example            # Environment template
├── routes/
│   └── review.js           # API routes
├── services/
│   └── aiService.js        # AI integration service
└── data/
    └── bestPerformingCopies.js  # Best performing patterns database
```

## Configuration

### AI Provider

You can switch between Claude and OpenAI by changing the `AI_PROVIDER` in `.env`:

```env
AI_PROVIDER=claude  # or 'openai'
```

Note: OpenAI integration is currently a placeholder. To implement it, update the `reviewWithOpenAI` method in [services/aiService.js](services/aiService.js).

### Demo Mode

The frontend includes a demo mode for testing without a backend. To disable it:

1. Open [script.js](script.js)
2. Find the `useDemoMode()` function
3. Change `return true` to `return false`

### Customizing Best Performing Patterns

Update your best-performing email patterns in [data/bestPerformingCopies.js](data/bestPerformingCopies.js):

```javascript
{
    id: 4,
    category: 'Your Category',
    responseRate: 50,
    characteristics: {
        subjectLength: 40,
        emailLength: 85,
        personalizationPoints: 3,
        hasDataPoint: true,
        hasSocialProof: true,
        ctaType: 'low-commitment',
        tone: 'conversational'
    },
    patterns: [
        'Pattern 1',
        'Pattern 2',
        // ...
    ]
}
```

## API Documentation

### POST /api/review-copy

Reviews cold email copy and returns structured feedback.

**Request Body:**
```json
{
    "copy": "Your cold email text here..."
}
```

**Response:**
```json
{
    "overallScore": 75,
    "sections": [
        {
            "title": "Section Name",
            "content": "Main feedback",
            "items": ["Point 1", "Point 2"],
            "highlight": {
                "title": "Key Improvement",
                "content": "Specific suggestion"
            }
        }
    ]
}
```

**Status Codes:**
- `200`: Success
- `400`: Invalid request (missing or empty copy)
- `500`: Server error

## Embedding

To embed this tool in another page, you can:

1. **iFrame approach:**
```html
<iframe src="http://localhost:3000" width="100%" height="800px"></iframe>
```

2. **Direct integration:**
   - Copy the HTML structure from [index.html](index.html)
   - Include [styles.css](styles.css)
   - Include [script.js](script.js)
   - Ensure the API endpoint is accessible

## Customization

### Styling

All colors and styles use CSS variables defined in [styles.css](styles.css). Customize by modifying the `:root` section:

```css
:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    /* ... */
}
```

### AI Prompt

Customize the AI's review style by editing the prompts in [services/aiService.js](services/aiService.js):

- `buildSystemPrompt()`: Defines the AI's role and output format
- `buildUserPrompt()`: Formats the user's copy for review

## Getting API Keys

### Claude (Anthropic)
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account or sign in
3. Navigate to API Keys
4. Create a new API key
5. Copy the key to your `.env` file

### OpenAI (Optional)
1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an account or sign in
3. Navigate to API Keys
4. Create a new API key
5. Copy the key to your `.env` file

## Troubleshooting

### "Module not found" errors
Run `npm install` to ensure all dependencies are installed.

### API key errors
- Verify your API key is correctly set in `.env`
- Ensure `.env` is in the root directory
- Restart the server after changing `.env`

### CORS errors
If embedding in another domain, update CORS settings in [server.js](server.js):
```javascript
app.use(cors({
    origin: 'https://your-domain.com'
}));
```

## License

MIT

## Support

For issues or questions, please refer to the code comments or create an issue in the repository.
