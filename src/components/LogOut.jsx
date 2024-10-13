import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const Logout = () => {
  const navigate = useNavigate();

  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  // navigate("/login");
  // return <Navigate to="/login" />;
};
//
