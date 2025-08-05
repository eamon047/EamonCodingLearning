import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { worker } from "./mocks/browser.ts";

(() => {
    if (import.meta.env.MODE === "dev-with-mocks") {
        return worker.start();
    }
    return Promise.resolve();
})().then(() => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
});
