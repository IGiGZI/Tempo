import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { TimeMarkContextProvider } from "./context/TimeMarksContext.jsx";
import { LapContextProvider } from "./context/LapContext.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AuthContextProvider>
			<TimeMarkContextProvider>
				<LapContextProvider>
					<App />
				</LapContextProvider>
			</TimeMarkContextProvider>
		</AuthContextProvider>
	</BrowserRouter>,
);
