import { CssBaseline, ThemeProvider,  } from "@mui/material";
import {createTheme} from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/Dashboard/Dashboard";
import Layout from "scenes/Layout/Layout";
import Products from "scenes/Products/Products"
import Customers from "scenes/Customers/Customers"
import Transactions from "scenes/Transactions/Transactions";
import Geography from "scenes/Geography/Geography";
import Overview from "scenes/Overview/Overview";

function App() {
const mode = useSelector((state) => state.global.mode)
const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />} >
          <Route path ="/" element={<Navigate to="dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/overview" element={<Overview />} />


          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
