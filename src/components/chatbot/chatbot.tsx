// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import {
// //   TalkToChatbot,
// //   ConversationSuggestions,
// // } from "@/app/services/rapid_api";

// // export default function Chatbot() {
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [messages, setMessages] = useState<
// //     Array<{ text: string; sender: "user" | "bot" }>
// //   >([]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [suggestions, setSuggestions] = useState<string[]>([]);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const messagesEndRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     setIsMounted(true);
// //   }, []);

// //   // Fetch initial suggestions when component mounts
// //   useEffect(() => {
// //     if (!isMounted) return;

// //     const fetchSuggestions = async () => {
// //       try {
// //         const data = await ConversationSuggestions();
// //         setSuggestions(data || []);
// //       } catch (error) {
// //         console.error("Failed to load suggestions", error);
// //         setSuggestions([]);
// //       }
// //     };
// //     fetchSuggestions();
// //   }, [isMounted]);

// //   // Scroll to bottom of messages
// //   useEffect(() => {
// //     if (!isMounted) return;
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, isMounted]);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!input.trim() || !isMounted) return;

// //     // Add user message
// //     const userMessage = { text: input, sender: "user" as const };
// //     setMessages((prev) => [...prev, userMessage]);
// //     setInput("");
// //     setLoading(true);

// //     try {
// //       // Get bot response
// //       const botResponse = await TalkToChatbot(input);
// //       setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
// //     } catch (error) {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           text: "Sorry, I'm having trouble connecting. Please try again later.",
// //           sender: "bot",
// //         },
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleSuggestionClick = (suggestion: string) => {
// //     setInput(suggestion);
// //   };

// //   if (!isMounted) {
// //     return null;
// //   }

// //   return (
// //     <div className="fixed bottom-4 right-4 z-50">
// //       {isOpen ? (
// //         <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col border border-gray-200">
// //           {/* Chat header */}
// //           <div
// //             className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center cursor-pointer"
// //             onClick={() => setIsOpen(false)}
// //           >
// //             <h3 className="font-semibold">Recipe Assistant</h3>
// //             <button className="text-white focus:outline-none">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="h-5 w-5"
// //                 viewBox="0 0 20 20"
// //                 fill="currentColor"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 12 5.293 8.707a1 1 0 010-1.414z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //             </button>
// //           </div>

// //           {/* Messages container */}
// //           <div className="flex-1 p-3 overflow-y-auto">
// //             {messages.length === 0 ? (
// //               <div className="text-center text-gray-500 mt-10">
// //                 <p>
// //                   Hello! I'm your recipe assistant. Ask me anything about food!
// //                 </p>
// //                 {suggestions.length > 0 && (
// //                   <div className="mt-4">
// //                     <p className="text-sm mb-2">Try asking:</p>
// //                     <div className="flex flex-wrap gap-2 justify-center">
// //                       {suggestions.map((suggestion, index) => (
// //                         <button
// //                           key={index}
// //                           onClick={() => handleSuggestionClick(suggestion)}
// //                           className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded"
// //                         >
// //                           {suggestion}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             ) : (
// //               messages.map((message, index) => (
// //                 <div
// //                   key={index}
// //                   className={`mb-3 ${
// //                     message.sender === "user" ? "text-right" : "text-left"
// //                   }`}
// //                 >
// //                   <div
// //                     className={`inline-block p-2 rounded-lg ${
// //                       message.sender === "user"
// //                         ? "bg-blue-600 text-white"
// //                         : "bg-gray-200 text-gray-800"
// //                     }`}
// //                   >
// //                     {message.text}
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //             {loading && (
// //               <div className="text-left mb-3">
// //                 <div className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">
// //                   <div className="flex space-x-1">
// //                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
// //                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
// //                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //             <div ref={messagesEndRef} />
// //           </div>

// //           {/* Input form */}
// //           <form
// //             onSubmit={handleSubmit}
// //             className="p-3 border-t border-gray-200"
// //           >
// //             <div className="flex">
// //               <input
// //                 type="text"
// //                 value={input}
// //                 onChange={(e) => setInput(e.target.value)}
// //                 placeholder="Ask about recipes..."
// //                 className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
// //                 disabled={loading}
// //               />
// //               <button
// //                 type="submit"
// //                 disabled={loading || !input.trim()}
// //                 className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 disabled:bg-blue-300 focus:outline-none"
// //               >
// //                 Send
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       ) : (
// //         <button
// //           onClick={() => setIsOpen(true)}
// //           className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
// //         >
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-6 w-6"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
// //             />
// //           </svg>
// //         </button>
// //       )}
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import {
//   TalkToChatbot,
//   ConversationSuggestions,
// } from "@/app/services/rapid_api";

// export default function Chatbot() {
//   const [messages, setMessages] = useState<
//     Array<{ text: string; sender: "user" | "bot" }>
//   >([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   // Load suggestions when component mounts and chat opens
//   useEffect(() => {
//     if (!isOpen) return;

//     const loadSuggestions = async () => {
//       try {
//         const data = await ConversationSuggestions("tell", 5);
//         setSuggestions(data);
//       } catch (error) {
//         console.error("Failed to load suggestions", error);
//         setSuggestions([]);
//       }
//     };

//     loadSuggestions();
//   }, [isOpen]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Handle message submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     // Add user message
//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//     setInput("");
//     setLoading(true);

//     try {
//       // Get bot response
//       const botResponse = await TalkToChatbot(input);
//       setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
//     } catch (error) {
//       console.error("Chat error:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Sorry, I'm having trouble connecting. Please try again later.",
//           sender: "bot",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle suggestion click
//   const handleSuggestionClick = (suggestion: string) => {
//     setInput(suggestion);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {isOpen ? (
//         <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col border border-gray-200">
//           {/* Chat header */}
//           <div
//             className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center cursor-pointer"
//             onClick={() => setIsOpen(false)}
//           >
//             <h3 className="font-semibold">Recipe Assistant</h3>
//             <button className="text-white focus:outline-none">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 12 5.293 8.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Messages container */}
//           <div className="flex-1 p-3 overflow-y-auto">
//             {messages.length === 0 ? (
//               <div className="text-center text-gray-500 mt-10">
//                 <p>
//                   Hello! I'm your recipe assistant. Ask me anything about food!
//                 </p>
//                 {suggestions.length > 0 && (
//                   <div className="mt-4">
//                     <p className="text-sm mb-2">Try asking:</p>
//                     <div className="flex flex-wrap gap-2 justify-center">
//                       {suggestions.map((suggestion, index) => (
//                         <button
//                           key={index}
//                           onClick={() => handleSuggestionClick(suggestion)}
//                           className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded"
//                         >
//                           {suggestion}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`mb-3 ${
//                     message.sender === "user" ? "text-right" : "text-left"
//                   }`}
//                 >
//                   <div
//                     className={`inline-block p-2 rounded-lg ${
//                       message.sender === "user"
//                         ? "bg-blue-600 text-white"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {message.text}
//                   </div>
//                 </div>
//               ))
//             )}
//             {loading && (
//               <div className="text-left mb-3">
//                 <div className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
//                     <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input form */}
//           <form
//             onSubmit={handleSubmit}
//             className="p-3 border-t border-gray-200"
//           >
//             <div className="flex">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask about recipes..."
//                 className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 disabled={loading}
//               />
//               <button
//                 type="submit"
//                 disabled={loading || !input.trim()}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 disabled:bg-blue-300 focus:outline-none"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//             />
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import {
  TalkToChatbot,
  ConversationSuggestions,
  SearchRecipes,
} from "@/app/services/rapid_api";

export default function Chatbot() {
  const [messages, setMessages] = useState<
    Array<{ text: string; sender: "user" | "bot" }>
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load suggestions when chat opens
  useEffect(() => {
    if (!isOpen) return;

    const loadSuggestions = async () => {
      try {
        const data = await ConversationSuggestions("food", 5);
        setSuggestions(data);
      } catch (error) {
        console.error("Failed to load suggestions", error);
        setSuggestions([]);
      }
    };

    loadSuggestions();
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      // Get bot response
      const botResponse = await TalkToChatbot(input);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);

      // If response indicates recipes were found
      if (botResponse.includes("I found these recipes")) {
        const recipeResults = await SearchRecipes(input);
        setRecipes(recipeResults);

        if (recipeResults.length > 0) {
          const recipeTitles = recipeResults
            .slice(0, 3)
            .map((r: { title: any }) => r.title);
          setMessages((prev) => [
            ...prev,
            {
              text: `Here are some recipes: ${recipeTitles.join(
                ", "
              )}. Would you like details about any of these?`,
              sender: "bot",
            },
          ]);
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting. Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  const handleRecipeDetailRequest = (recipeTitle: string) => {
    const recipe = recipes.find((r) => r.title === recipeTitle);
    if (recipe) {
      setMessages((prev) => [
        ...prev,
        {
          text: `${recipe.title}: Ready in ${
            recipe.readyInMinutes
          } minutes. ${recipe.summary.replace(/<[^>]*>?/gm, "")}`,
          sender: "bot",
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col border border-gray-200">
          {/* Chat header */}
          <div
            className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <h3 className="font-semibold">Recipe Assistant</h3>
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 12 5.293 8.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                <p>
                  Hello! I'm your recipe assistant. Ask me anything about food!
                </p>
                {suggestions.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm mb-2">Try asking:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                    {message.sender === "bot" &&
                      message.text.includes("Here are some recipes") && (
                        <div className="mt-2">
                          {recipes.slice(0, 3).map((recipe) => (
                            <button
                              key={recipe.id}
                              onClick={() =>
                                handleRecipeDetailRequest(recipe.title)
                              }
                              className="block w-full text-left px-2 py-1 text-xs bg-blue-50 hover:bg-blue-100 text-blue-800 rounded mb-1"
                            >
                              Tell me more about {recipe.title}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className="text-left mb-3">
                <div className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input form */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-gray-200"
          >
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about recipes..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 disabled:bg-blue-300 focus:outline-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
