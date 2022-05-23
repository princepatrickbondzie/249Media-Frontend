import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const AdminRegister = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    country: "",
    city: "",
    password: "",
    isAdmin: true,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      country: user.country,
      city: user.city,
      password: user.password,
      isAdmin: user.isAdmin,
    };

    const data = await fetchQuery({
      uri: "",
      method: "POST",
      body: newUser,
    });
    localStorage.setItem("token", data.token);
    if (newUser) {
      console.log(newUser);
      navigate("/admin/login");
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          value={user.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={user.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Register Admin</button>
      </form>
    </div>
  );
};

export default AdminRegister;
