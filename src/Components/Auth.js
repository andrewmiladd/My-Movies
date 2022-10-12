import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const [auth, setAuth] = useState(true);
  let handler = () => {
    setAuth(true);
  };
  console.log(handler);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
