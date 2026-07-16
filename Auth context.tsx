import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

import Loader from "./Loader";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: string[];
}

export default function ProtectedRoute({
  children,
  roles = [],
}: ProtectedRouteProps) {
  const {
    user,
    loading,
    isAuthenticated,
    refreshUser,
  } = useAuth();

  const location = useLocation();

  useEffect(() => {
    if (!user && isAuthenticated) {
      refreshUser();
    }
  }, []);

  // Loading User
  if (loading) {
    return (
      <Loader
        fullScreen
        text="Authenticating..."
      />
    );
  }

  // Not Logged In
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
        }}
      />
    );
  }

  // Role Based Access
  if (
    roles.length > 0 &&
    user &&
    !roles.includes(user.role)
  ) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return <>{children}</>;
}