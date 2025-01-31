import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import { Grid } from "@mui/material";

function App() {
  return (
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <Grid
            container
            justifyContent="center"
            style={{ maxWidth: 3000, margin: "0 auto" }}
          > 
            <AppRouter />
          </Grid>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

