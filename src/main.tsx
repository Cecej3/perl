import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryProvider } from "utils/provider/Queryprovider.tsx";
// import { CloudinaryContext } from "cloudinary-react";
import { theme } from "utils/theme/muitheme.ts";

// const cloudName = "maesan-product";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactQueryProvider>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ChakraProvider>
              <App />
          </ChakraProvider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ReactQueryProvider>
);
