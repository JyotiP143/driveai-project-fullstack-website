# AI Prompts Used During Development

Here is a log of the prompts I used with my AI coding assistant (Gemini/Claude) while building the DriveAI challenge, along with notes on their effectiveness.

1. **Prompt**: "Create a premium, dark-mode styling in Vanilla CSS without using Tailwind. Use CSS variables for colors and include some subtle glassmorphism effects for panels."
   - **Result**: Worked mostly on the first try. I had to manually adjust the `backdrop-filter` blur amount and border opacities to make it look less cloudy and more 'glass-like'.

2. **Prompt**: "Write a React Context and useReducer setup to manage the global state for a car dealership website. It needs to hold: currency, modelFilter (type and maxPrice), comparisonModels (array of 2 IDs), and bookingDetails."
   - **Result**: Worked flawlessly the first time. The boilerplate for Context + Reducer is something LLMs do exceptionally well.

3. **Prompt**: "I need a system instruction prompt for Gemini 1.5 Flash. The AI is managing a website. It needs to return ONLY a JSON object with a 'reply' string and an 'actions' array. The actions can be things like scrolling, filtering, highlighting, booking, or currency switching. Provide the exact string to use."
   - **Result**: Required modification. Initially, the LLM returned a prompt that allowed the AI to sometimes wrap the JSON in Markdown ticks (\`\`\`json). I had to update my frontend parser to strip those out before calling `JSON.parse()`.

4. **Prompt**: "Create a React component that shows a grid of cars. Use the global state to filter them by maxPrice and category. If the global state 'highlightedElement' matches the car's ID, add a glowing border class."
   - **Result**: Worked well, but I had to manually add `scrollIntoView` functionality later because the glowing border wasn't visible if the user was reading the hero section.

5. **Prompt**: "How do I securely pass an environment variable in Vite for an API key?"
   - **Result**: Worked perfectly. Reminded me to use `import.meta.env.VITE_...` instead of `process.env`.

6. **Prompt**: "Write a 5-6 item array of fictional car models with IDs, names, types (Sedan, SUV), prices in INR and USD, range, acceleration, and image placeholders."
   - **Result**: Worked well. I ended up swapping the placeholder URLs with actual Unsplash IDs to give the UI a much more polished look.

7. **Prompt**: "Based on the Gemini API docs, how do I pass chat history back into `startChat` so the AI remembers previous context?"
   - **Result**: Required some trial and error. The documentation for the `@google/generative-ai` SDK is strict about role naming ('user' and 'model' instead of 'assistant'). I had to map my local `messages` state to fit the expected `{role, parts: [{text}]}` schema.
