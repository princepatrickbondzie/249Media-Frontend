import React, { useState, useContext } from "react";
import { GeneralContext } from "../../../context/userContext";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const BloggerLogin = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useContext(GeneralContext);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, token } = await fetchQuery({
      uri: "",
      method: "POST",
      body: { ...state },
    });
    setUser(user, token);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default BloggerLogin;
