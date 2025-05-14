"use client";

import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/chatbot/chatbot"), {
  ssr: false,
  loading: () => <p>Loading chat...</p>,
});

export default function ChatbotWrapper() {
  return <Chatbot />;
}
