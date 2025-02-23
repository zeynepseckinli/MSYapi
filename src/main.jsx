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
    fontFamily: '"Nunito Sans", sans-serif', // Varsayılan font
    button: {
      fontFamily: '"Nunito Sans", serif',
      fontSize: "0.9rem",
      textTransform: "uppercase",
    },
    h1: {
      fontFamily: '"Cormorant Garamond", serif', 
      fontWeight: 700,
      fontSize: "8rem",
      color: "#10375C",
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      fontSize: "2.5rem",
      color: "#10375C",
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      fontSize: "2rem",
      color: "#10375C",
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      fontSize: "1.7rem",
      color: "#10375C",
    },
    h5: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 300,
      fontSize: "1.4rem",
      color: "#E2AD7E",
    },
    body1: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "1rem",
      fontWeight: 300,
      color: "#05151B",
    },
    body2: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: "0.875rem",
      fontWeight: 300,
      color: "#05151B",
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
