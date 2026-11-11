import { createRoot } from "react-dom/client";
import Login from "@/routes/login/Login";
import Register from "@/routes/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./App.css";
import Dashboard from "./routes/dashboard/Dashboard";
import AuthGuard from "./routes/auth/AuthGuard";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
