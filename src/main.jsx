import { createRoot } from "react-dom/client"; 
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#10375C",
    },
    secondary: {
      main: "#F3C623", 
    },
    background: {
      default: "#EDEFF3", 
      paper: "#10375C", 
    },
    text: {
      primary: "#10375C", 
      secondary: "#EDEFF3", 
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif', 
  },
});


createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
