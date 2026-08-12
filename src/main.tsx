import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";
import { queryClient } from "./lib/queryClient";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
  <App />

  <Toaster
    position="top-right"
    reverseOrder={false}
    toastOptions={{
      duration: 3000,
    }}
  />
</QueryClientProvider>
  </StrictMode>
);