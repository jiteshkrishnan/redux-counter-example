import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";

import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
/**
 * Initialize the config atom which will be read by the atom effect
 */
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
