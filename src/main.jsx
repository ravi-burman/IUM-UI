import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import ResendVerification from "./pages/ResendVerification";
import VerifiedPendingApproval from "./pages/VerifiedPendingApproval";
import ForgotPassword from "./pages/ForgotPassword";
import EnterCode from "./pages/EnterCode";
import ConfirmNewPassword from "./pages/ConfirmNewPassword";
import Home from "./pages/Home";
import UIProvider from "./ui/UIProvider";

import "./style.css";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <UIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/resend" element={<ResendVerification />} />
          <Route path="/verified-pending" element={<VerifiedPendingApproval />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/enter-code" element={<EnterCode />} />
          <Route path="/confirm-new-password" element={<ConfirmNewPassword />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  </React.StrictMode>
);
