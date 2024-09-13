'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase.config';

const defaultValue = {
	user: null,
};

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [appData, setAppData] = useState(defaultValue);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// const uid = user.uid;
				console.log('Logged in user:', user);
				setAppData((prev) => ({ ...prev, user: user }));
			} else {
				console.log('Logged out!');
			}
		});
		return () => unsubscribe();
	}, []);

	return (
		<AppContext.Provider value={{ appData, setAppData }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
