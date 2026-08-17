import { createContext, useState, useContext } from "react";
import { login as loginFn, signup as signupFn } from "../api/auth";

export const authContext = createContext();

export function AuthContextProvider({ children }) {
	const [token, setToken] = useState(() => localStorage.getItem("token"));
	const [isLoading, setIsloading] = useState();

	const isLoggedIn = token ? true : false;

	function logoutFn() {
		localStorage.removeItem("token");
		setToken(null);
	}

	async function login(email, password) {
		try {
      setIsloading(true)
			const response = await loginFn(email, password);
			localStorage.setItem("token", response.token);
			setToken(response.token);
		} catch (err) {
			console.error(`Login Failed.`);
			throw err;
		} finally {
      setIsloading(false)
    }
	}

	async function signup(email, password) {
		try {
      setIsloading(true)
			const response = await signupFn(email, password);
			localStorage.setItem("token", response.token);
			setToken(response.token);
		} catch (err) {
			console.error(`Signup Failed.`);
			throw err;
		} finally {
      setIsloading(false)
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
	};

	return (
		<authContext.Provider value={valueObj}>{children}</authContext.Provider>
	);
}

export function useAuth() {
  const values = useContext(authContext)

  if (values === undefined){
    throw new Error("Failed to get values from authContext")
  } else {
    return values
  }
}


