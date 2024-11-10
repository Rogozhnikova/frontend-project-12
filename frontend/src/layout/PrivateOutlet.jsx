import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';
import ROUTES from '../app/routes/routes.data';
import React from 'react';

const PrivateOutlet = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
};

export default PrivateOutlet;