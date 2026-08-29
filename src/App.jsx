import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Oferta from "./pages/Oferta";
import Clientes from "./pages/Clientes";
import Proveedores from "./pages/Proveedores";
import Documentos from "./pages/Documentos";
import Informes from "./pages/Informes";
import Pagos from "./pages/Pagos";
import Ups from "./pages/Ups";
import Login from "./pages/Login";

import "@fontsource/megrim";
import "@fontsource/cal-sans";
import "@fontsource/genos";
import "@fontsource/quicksand";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/informes" element={<Informes />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/ups" element={<Ups />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
