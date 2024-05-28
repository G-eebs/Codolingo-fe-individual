import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({
		user_name: "cogger101",
		score: 50,
		password: "password",
		avatar_url:
			"https://images.pexels.com/photos/982047/pexels-photo-982047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		following: ["cogger101"],
		progress: [1, 2, 3, 4, 5, 6, 7],
	});

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
