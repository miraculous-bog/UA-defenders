import React, { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const [authChecked, setAuthChecked] = useState(false);
	const { user, signout } = useAuth();

	useEffect(() => {
		const checkAuth = async () => {
			if (user) {
				try {
					const response = await fetch('http://localhost:8080/api/users/me', {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${localStorage.getItem('token')}`
						}
					});
					if (!response.ok) {
						console.log('400');
						signout();
						setAuthChecked(true);
						return;
					}
				} catch (error) {
					console.log(error);
				}
			}

			if (!user) {
				setAuthChecked(true);
				return;
			}

			setAuthChecked(true);
		};

		checkAuth();
	}, [user, signout]);

	if (!authChecked) {
		return null;
	}

	if (!user) {
		return <Navigate to="../" state={{ from: location }} />;
	}

	return <>{children}</>;
};

export default RequireAuth;