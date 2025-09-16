import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="p-4">
      <h1>Welcome to IUM Login</h1>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}
