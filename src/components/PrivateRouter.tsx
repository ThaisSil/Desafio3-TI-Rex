import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


interface PrivateRouterProps {
  children: React.ReactNode;
}

const PrivateRouter = ({children}: PrivateRouterProps) => {
  const {isAuthenticated} = useAuth();
  if (!isAuthenticated) {
      <Navigate to="/login" replace />;
      return;
  }
  return <>{children}</>;
};

export default PrivateRouter;
