# Learnings & Reflections

This challenge was an incredible exercise in blending standard web development with Agentic AI. While I am comfortable with React and CSS, integrating a live LLM that actively *controls* the DOM was a new and fascinating paradigm for me.

### What was New to Me?

1. **Deterministic AI Outputs**: 
   The biggest paradigm shift was changing the AI from a "text generator" to a "command executor". I essentially had to write an API contract (my JSON schema) and force a non-deterministic LLM to adhere to it. What I learned is that giving the AI exact literal strings to choose from (e.g., `target: "models|booking|comparison"`) in the system prompt dramatically reduces hallucinations.

2. **Parsing Raw LLM Outputs in Production**:
   I learned the hard way that you cannot blindly `JSON.parse()` an LLM response. Even with strict instructions, Gemini would occasionally wrap the JSON in Markdown code formatting (` ```json ... ``` `). I had to build a small regex scrubber before trying to parse the actions.

### How I Figured It Out

When the AI assistant wasn't selecting the right CSS IDs to highlight, I added a debug `console.log("Executing Action:", action)` in my action parser. This allowed me to see that the AI occasionally invented IDs that didn't exist. To fix this, I injected the *exact available IDs* into the system prompt's context window.

### Documentation & Tools Used

- **Vite Docs**: To quickly check environment variable syntax (`import.meta.env`).
- **Google AI Studio / SDK Docs**: I spent time reading the `@google/generative-ai` documentation to understand how to correctly pass `systemInstruction` and parse `history` arrays for the `chat` object.
- **Lucide Icons**: Used their standard documentation to quickly drop in SVG icons.
- **MDN Web Docs**: Refreshed my memory on `Intl.NumberFormat` to elegantly switch between formatting INR (`₹`) and USD (`$`) without writing bulky regex functions.

### Honest Takeaway

I realized that building "AI wrappers" is easy, but building "AI UI controllers" is challenging because UI state is unforgiving. If the LLM generates a string instead of an array, the React app crashes. This challenge taught me the immense value of defensive programming when the data source is an LLM.
