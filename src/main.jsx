import { createRoot } from "react-dom/client"; // createRoot'u react-dom'dan alın
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#10375C",//"#EB8317", 
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
    fontFamily: '"Poppins", sans-serif', // Font ailesini buraya ekleyebilirsiniz
  },
});


createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
