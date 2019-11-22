import React, { useState } from "react";
import { useAuth, useChat } from "../hooks";

export default props => {
  const { username, signout } = useAuth();
  const [message, setMessage] = useState("");
  const { messages, add } = useChat();

  function handleSumbit(e) {
    e.preventDefault();
    add(message);
    setMessage("");
  }

  return (
    <div>
      <h1>Hello {username}!</h1>

      <button onClick={e => signout()}>Sign out</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {messages.map((msg, i) => (
        <p key={"message" + i}>{msg}</p>
      ))}
    </div>
  );
};
