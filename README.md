# DriveAI — Aetheria Motors

**Live URL**: [To be deployed (e.g., Vercel / Netlify)]

DriveAI is a concept web application for a fictional premium EV manufacturer, "Aetheria Motors". The defining feature of this project is the integrated AI assistant that not only chats with the user but physically navigates and modifies the website in real-time based on natural language commands.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <your-repo-link>
   cd driveai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   You need a Google Gemini API key for the AI assistant to work.
   - Create a `.env` file in the root directory.
   - Add your API key:
     ```env
     VITE_GEMINI_API_KEY=your_gemini_api_key_here
     ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173` to see the site.

## Tech Stack Choices

- **Vite + React**: Chosen for fast development server startup, out-of-the-box support for modern JavaScript, and component-based architecture which is perfect for managing complex UI state.
- **Vanilla CSS (with CSS Variables)**: To achieve the highly custom, premium glassmorphism aesthetic without being constrained by utility class frameworks. CSS variables (`:root`) made it easy to maintain the dark mode theme.
- **React Context API + useReducer**: I needed a centralized way to hold the global state (filters, currency, booking details) so the AI Assistant component could dispatch actions that immediately affected the `Models`, `Comparison`, and `Booking` components without complex prop drilling.
- **Google Gemini API**: A powerful, fast LLM with a generous free tier. Using system instructions, I was able to reliably force it to output JSON containing precise commands for the UI.

## Supported Query Types

The AI handles several types of intents. Here are examples you can try:

1. **Filtering & Scrolling**:
   - *"Show me your SUVs under 20 lakhs"*
   - *"Do you have any sports cars?"*
2. **Comparisons**:
   - *"Compare your top two models"*
   - *"How does the Nova compare to the Titan?"*
3. **Trigger Booking Flow**:
   - *"I'd like to book a test drive for your flagship model this Saturday in Kochi"*
   - *"Set up a test drive for the Zenith"*
4. **Contextual Recommendations**:
   - *"Which car is best for a family of five?"* (Scrolls to Titan/Pinnacle, highlights it)
5. **Dynamic Currency Changes**:
   - *"Show me prices in dollars"*
   - *"Switch back to rupees please"*
6. **General Navigation Support**:
   - *"Take me to your safety features"*

## What's Next? (With another week)

If I had another week, I would build:
- **Voice Input**: Integrate the Web Speech API so users could speak their commands directly instead of typing, making it a true hands-free navigation experience.
- **Persistent Memory**: Use local storage or a backend database so if a user comes back the next day, the AI remembers their name, previous questions, and preferred currency.
- **RAG for Spec Sheets**: Hook up LangChain and a vector database to allow the AI to answer extremely specific questions from long, fictional user manuals (e.g., *"How exactly does the fortress safety system brake in rain?"*).
