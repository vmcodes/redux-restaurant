import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import ModalMui from "./components/ModalMui";
import theme from "./theme";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ModalMui />

      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
