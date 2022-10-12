import React  from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = true;

  return  auth ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
