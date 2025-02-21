import { useState } from "react";

import Chat from "./components/Chat";
import Title from "./components/Title";

import "./App.css";

let id = 6;

const initialMessages = [
  { id: 1, text: "Hello!", user: "Nicolas" },
  { id: 2, text: "Hey!", user: "Sergio" },
  { id: 3, text: "How are you feeling today?", user: "Nicolas" },
  { id: 4, text: "Hot hot, you?", user: "Sergio" },
  { id: 5, text: "Cool cool!", user: "Nicolas" },
];

export default function App() {
  const [messages, setMessages] = useState(initialMessages);

  const addMessage = (text) => {
    setMessages([...messages, { id: id++, text, user: "Nicolas" }]);
  };

  return (
    <div className="app">
      <Title />
      <Chat messages={messages} addMessage={addMessage} />
    </div>
  );
}
