import { GoogleGenerativeAI } from "@google/generative-ai";
import { Bot, Loader2, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

// The System Prompt Defines How the AI Should Behave and Respond
const systemInstruction = `You are the AI assistant for Aetheria Motors. You manage the website state.
You must always reply in JSON format with exactly this structure:
{
  "reply": "Your natural language response here",
  "actions": [
    { "type": "scroll", "target": "models|booking|comparison|features|hero" },
    { "type": "filter", "category": "All|Sedan|SUV|Luxury SUV|Sports", "maxPrice": 100000000 },
    { "type": "highlight", "target": "model-nova|model-apex|model-titan|model-pinnacle|model-zenith|booking|comparison|features|models|hero" },
    { "type": "compare", "models": ["nova", "titan"] },
    { "type": "book", "model": "nova", "city": "Kochi", "date": "2026-05-01" },
    { "type": "currency", "value": "INR|USD" }
  ]
}

Available Data context:
Cars:
- Nova (id: nova, Type: Sedan, Price: 1.5M INR / 18K USD, Family: No)
- Apex (id: apex, Type: Sedan, Price: 2.5M INR / 30K USD, Family: No)
- Titan (id: titan, Type: SUV, Price: 1.8M INR / 21K USD, Family: Yes)
- Pinnacle (id: pinnacle, Type: Luxury SUV, Price: 4.5M INR / 54K USD, Family: Yes)
- Zenith (id: zenith, Type: Sports, Price: 5.5M INR / 66K USD, Family: No)

Rules:
1. Always include at least one relevant action. Even if they just ask a question, you should find a relevant section to scroll to or highlight.
2. If they ask about families, recommend Titan or Pinnacle.
3. If they ask to book, prefill 'book' action with available data.
4. Your reply should be conversational, professional, and reference the visual changes you're making.
5. NEVER RETURN MARKDOWN CODE BLOCKS around the json, JUST RAW JSON string!`;

export default function AiAssistant() {
  const { state, dispatch } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm your Aetheria AI Assistant. How can I help you navigate our lineup today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const executeAction = (action) => {
    console.log("Executing Action:", action);

    switch (action.type) {
      case "scroll": {
        const el = document.getElementById(action.target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        break;
      }

      case "highlight": {
        dispatch({ type: "SET_HIGHLIGHT", payload: action.target });
        setTimeout(() => dispatch({ type: "CLEAR_HIGHLIGHT" }), 3000);
        break;
      }

      case "filter": {
        dispatch({
          type: "SET_FILTER",
          payload: {
            type: action.category || "All",
            maxPrice: action.maxPrice || Infinity,
          },
        });
        break;
      }

      case "compare": {
        if (action.models && action.models.length >= 2) {
          dispatch({ type: "SET_COMPARISON_MODELS", payload: action.models });
        }
        break;
      }

      case "book": {
        const details = {};
        if (action.model) details.model = action.model;
        if (action.city) details.city = action.city;
        if (action.date) details.date = action.date;

        dispatch({ type: "SET_BOOKING_DETAILS", payload: details });
        break;
      }

      case "currency": {
        if (action.value === "INR" || action.value === "USD") {
          dispatch({ type: "SET_CURRENCY", payload: action.value });
        }
        break;
      }

      default:
        break;
    }
  };
 const parseAndApplyResponse = (text) => {
  try {
    let cleanText = text
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    const parsed = JSON.parse(cleanText);

    if (parsed.actions) {
      parsed.actions.forEach(executeAction);
    }

    return parsed.reply || "Done.";
  } catch (e) {
    console.error("JSON ERROR:", e, text);

    return text; // fallback
  }
};
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    if (!API_KEY) {
      setMessages((prev) => [
        ...prev,
        { role: "user", text: input },
        {
          role: "system",
          text: "Please add VITE_GEMINI_API_KEY to your .env file to enable AI functionality.",
        },
      ]);
      setInput("");
      return;
    }

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});

   const chatHistory = messages
  .slice(1) // 👈 skip first assistant message
  .map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.text }]
  }))
        .filter((m) => m.role === "model" || m.role === "user");

      const chat = model.startChat({ history: chatHistory });

      // Inject current state context subtly
      const contextualPrompt = `
${systemInstruction}

[Current UI State: Currency=${state.currency}, Filter=${state.modelFilter.type}]

User Request: ${userMessage}
`;
      const result = await chat.sendMessage(contextualPrompt);
      const responseText = result.response.text();

      const reply = parseAndApplyResponse(responseText);

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (error) {
      console.error("FULL ERROR:", error); // 👈 add this

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Error: " + error.message },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent-color text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,204,0.4)] hover:scale-110 transition-transform z-50 animate-bounce"
      >
        <Sparkles size={22} className="animate-spin-slow" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-[#111] border border-border-color rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden text-sm">
      <div className="bg-[#1a1a1a] p-4 flex justify-between items-center border-b border-border-color">
        <div className="flex items-center gap-2">
          <Bot className="text-accent-color" size={20} />
          <h3 className="font-semibold text-white">Aetheria AI</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto max-h-96 min-h-[300px] flex flex-col gap-3 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                msg.role === "user"
                  ? "bg-accent-color text-black rounded-tr-sm"
                  : msg.role === "system"
                    ? "bg-red-900/50 text-white border border-red-500/30 w-full"
                    : "bg-white/10 text-white rounded-tl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/10 text-text-muted rounded-2xl rounded-tl-sm px-4 py-2 flex items-center gap-2">
              <Loader2 size={14} className="animate-spin" /> Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSend}
        className="p-3 bg-[#1a1a1a] border-t border-border-color flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me to show cars, compare, etc..."
          className="flex-1 bg-black border border-border-color focus:border-accent-color text-white rounded-xl px-4 py-2 focus:outline-none placeholder:text-gray-600"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="bg-accent-color text-black w-10 h-10 rounded-xl flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1affd1] transition-colors"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
