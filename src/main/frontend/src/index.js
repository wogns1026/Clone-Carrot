import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "styles/theme";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
