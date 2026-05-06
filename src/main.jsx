import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import page from "./page/404/404.jsx";
import apropos from "./page/apropos/apropos.jsx";
import logement from "./page/logement/logement.jsx";
import home from "./page/home/home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={404} />
        <Route path="/apropos" element={apropos} />
        <Route path="/logement" element={logement} />
        <Route path="/home" element={home} />
        <Route path="*" element={error} />
      </Routes>
    </Router>
  </StrictMode>,
);
