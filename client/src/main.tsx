import ReactDOM from "react-dom/client";
import "@/assets/styles/global.scss";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/toast";
const { ToastContainer } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <App />
    <ToastContainer />
  </ChakraProvider>
);
