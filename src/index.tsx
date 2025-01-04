import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

const palette = {
  primary: {
    default: "#556cd6",
    light: "#757",
    main: "#556cd6",
    dark: "#335",
  },
  secondary: {
    default: "#19857b",
    light: "#757",
    main: "#19857b",
    dark: "#335",
  },
  error: {
    default: "#f44336",
    light: "#757",
    main: "#f44336",
    dark: "#335",
  },
  background: {
    default: "#fff",
    light: "#fff",
    main: "#f0f0f0",
    dark: "#333",
  },
  text: {
    default: "#333",
    light: "#555",
    main: "#333",
    dark: "#333",
    primary: "#333",
    secondary: "#555",
  },
};

// All `Portal`-related components need to have the the main app wrapper element as a container
// so that the are in the subtree under the element used in the `important` option of the Tailwind's config.
const theme = createTheme({
  cssVariables: true,
  palette,
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
