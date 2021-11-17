import { render } from "react-dom";
import { StrictMode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./app/store";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

render(
  <StrictMode>
    <ReduxProvider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ReduxProvider>
  </StrictMode>,
  document.getElementById("root")
);
