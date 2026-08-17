import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<AuthContextProvider>
		<App />
	</AuthContextProvider>,
);
