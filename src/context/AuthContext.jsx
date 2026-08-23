import { createContext, useState, useContext } from "react";
import { login as loginFn, signup as signupFn } from "../api/auth";
import { useNavigate } from "react-router";

export const authContext = createContext();

export function AuthContextProvider({ children }) {
	const [token, setToken] = useState(() => localStorage.getItem("token"));
	const [isLoading, setIsloading] = useState();
	const [error, setError] = useState(null)
	const [currEmail, setCurrEmail] = useState(() =>
		localStorage.getItem("email"),
	);

	const navigate = useNavigate()
	const isLoggedIn = token ? true : false;

	// console.log(token);

	function logoutFn() {
		// console.log(`logoutFN fired`);
		localStorage.removeItem("token");
		setToken(null);
		localStorage.removeItem("email");
		setCurrEmail(null);
		navigate("/")
	}

	async function login(email, password) {
		try {
			setIsloading(true);
			const response = await loginFn(email, password);
			localStorage.setItem("token", response.token);
			setToken(response.token);
			localStorage.setItem("email", response.user.email);
			setCurrEmail(response.user.email);
		} catch (err) {
			console.error(`Login Failed.`);
			setError(err.message)
			console.log(`Next line is the error message`);
			console.log(err.message);
			throw err;
		} finally {
			setIsloading(false);
		}
	}

	async function signup(email, password) {
		try {
			setIsloading(true);
			const response = await signupFn(email, password);
			localStorage.setItem("token", response.token);
			setToken(response.token);
			setCurrEmail(response.user.email);
			localStorage.setItem("email", response.user.email);
		} catch (err) {
			console.error(`Signup Failed.`);
			setError(err.message)
			throw err;
		} finally {
			setIsloading(false);
		}
	}

	const valueObj = {
		token,
		isLoggedIn,
		logoutFn,
		login,
		signup,
		isLoading,
		setIsloading,
		currEmail,
		error,
		setError,
	};

	return (
		<authContext.Provider value={valueObj}>{children}</authContext.Provider>
	);
}

export function useAuth() {
	const values = useContext(authContext);

	if (values === undefined) {
		throw new Error("Failed to get values from authContext");
	} else {
		return values;
	}
}
