import React, { useState } from "react";
import { useAuth } from "../hooks";
export default props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();

    signin(username, password)
      .then(resp => {
        props.history.push("/");
      })
      .catch(e => {});
  }

  return (
    <div className="log">
      <form onSubmit={handleSubmit}>
        <input
          className="inp"
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          className="inp"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="but" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
