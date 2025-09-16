import React from "react";


export default function Login() {
  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="auth-form">
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

