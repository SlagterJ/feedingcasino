import { render } from "react-dom";
import { StrictMode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./app/store";
import App from "./App";

render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
  document.getElementById("root")
);
