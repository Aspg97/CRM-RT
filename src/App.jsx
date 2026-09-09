import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Ofertas from "./pages/ofertas/Ofertas";
import Clientes from "./pages/clientes/Clientes";
import Proveedores from "./pages/proveedores/Proveedores";
import Documentos from "./pages/documentos/Documentos";
import Informes from "./pages/informes/Informes";
import Pagos from "./pages/pagos/Pagos";
import Ups from "./pages/Ups";
import Login from "./pages/LogIn";

import "@fontsource/megrim";
import "@fontsource/cal-sans";
import "@fontsource/genos";
import "@fontsource/quicksand";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ofertas" element={<Ofertas />} />
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
