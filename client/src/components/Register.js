import React, { useState } from "react";
import { useAuth } from "../hooks";
import { Link } from "react-router-dom";

export default props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { reg } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();

    reg(username, password)
      .then(resp => {
        props.history.push("/");
      })
      .catch(e => {});
  }

  return (
    <div className="top">
      <p className="regi">If you already have account please Login here:</p>
      <Link to="/login"> Login</Link>

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
