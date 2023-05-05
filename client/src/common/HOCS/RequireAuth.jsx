import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({ children }) => {
	const location = useLocation();
	console.log(useAuth());
	const { user } = useAuth();

	if (!user) return <Navigate to='../sign-in' state={{ from: location }} />;

	return children;
};


export default RequireAuth;
