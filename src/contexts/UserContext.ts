import { createContext } from 'react';

export const UserContext = createContext({
	signedIn: '',
	setSignedIn(userID) {
		this.signedIn = userID;
	}
});
