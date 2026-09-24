import { useState } from "react";
import BodyPageGen from "../../components/BodyPageGen";
import CrearRecibo from "./subComponents/CrearRecibo";
import CrearCotizacion from "./subComponents/CrearCotizacion";
import VerDocumentos from "./subComponents/VerDocumentos";

function Documentos() {
  const [items, setItems] = useState([
    { item: "Crear Recibo", active: false },
    { item: "Crear Cotización", active: false },
    { item: "Ver Documentos", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <>
        {itemSelect === "Crear Recibo" && <CrearRecibo />}
        {itemSelect === "Crear Cotización" && <CrearCotizacion />}
        {itemSelect === "Ver Documentos" && <VerDocumentos />}
      </>
    );
  };

  return (
    <BodyPageGen
      title="Documentos"
      content={contenido()}
      options={items}
      setOptions={setItems}
    />
  );
}

export default Documentos;
