import React from 'react';
import UseAuth from '../hook/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { loading, user, isAuthenticated } = UseAuth();

  // ✅ Show loading until auth state is resolved
  if (loading) {
    return <div><p>Loading...</p></div>;
  }

  // ✅ If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If user role is not allowed, redirect to forbidden page
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/forbidden" replace />;
  }

  // ✅ If everything is fine, render child component
  return children;
};

export default PrivateRoute;
