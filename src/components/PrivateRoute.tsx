import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  element: React.ReactElement;
  path: string;  // Adicione a propriedade path, para que funcione corretamente
}

const PrivateRoute = ({ element, ...rest }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth(); // Assumindo que useAuth retorna isAuthenticated

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
