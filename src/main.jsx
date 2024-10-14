import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/inter";
import { CssVarsProvider } from "@mui/joy/styles";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <CssVarsProvider>
        <App />
      </CssVarsProvider>
    </StrictMode>
  </AuthProvider>
);
