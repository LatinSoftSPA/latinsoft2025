import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import Login from "./Login";
import App from "./App/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <Login /> */}
  </StrictMode>
);
