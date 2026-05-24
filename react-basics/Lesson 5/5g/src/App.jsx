import { useState, useEffect } from "react";
import "./App.css";

import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: "Goodbye. Have a great day!",
      "give me a unique id": function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  function clearMessageHandle() {
    localStorage.setItem("messages", JSON.stringify([]));
    setChatMessages([]);
  }

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        clearMessageHandle={clearMessageHandle}
      />
    </div>
  );
}

export default App;
