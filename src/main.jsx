import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { TimeMarkContextProvider } from "./context/TimeMarksContext.jsx";
import { BrowserRouter } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
		<BrowserRouter>
			<AuthContextProvider>
				<TimeMarkContextProvider>
					<App />
				</TimeMarkContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</GoogleOAuthProvider>
);
