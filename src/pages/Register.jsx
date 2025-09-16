import React from "react";

export default function Register() {
  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form className="auth-form">
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

