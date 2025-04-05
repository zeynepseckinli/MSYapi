import { createRoot } from "react-dom/client"; 
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#05151B",
    },
    secondary: {
      main: "#EFEBE6", 
    },
    background: {
      default: "#EFEBE6", 
      paper: "#05151B", 
    },
    text: {
      primary: "#05151B", 
      secondary: "#EFEBE6", 
    },
  },
  typography: {
    fontFamily: '"Raleway", sans-serif', // Varsayılan font
    button: {
      fontFamily: '"Raleway", serif',
      fontSize: "0.9rem",
      textTransform: "uppercase",
      color: "#EFEBE6", 
    },
    h1: {
      fontFamily: '"Raleway", sans-serif', 
      fontWeight: 500,
      fontSize: "3.5rem",
      color: "black",
    },
    h2: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 600,
      fontSize: "2.5rem",
      color: "black",
    },
    h3: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 400,
      fontSize: "1.7rem",
      color: "black",
    },
    h4: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 500,
      fontSize: "1.7rem",
      color: "black",
    },
    h5: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 300,
      fontSize: "1.4rem",
      color: "black",
    },
    body1: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: "1rem",
      fontWeight: 300,
      color: "black",
    },
    body2: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: "0.875rem",
      fontWeight: 300,
      color: "black",
    },
  },
});



createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
