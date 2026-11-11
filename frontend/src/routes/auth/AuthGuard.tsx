import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {
  const token = false;

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
