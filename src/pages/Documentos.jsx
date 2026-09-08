import { useState } from "react";
import BodyPageGen from "../components/BodyPageGen.jsx";

function Documentos() {
  const [items, setItems] = useState([
    { item: "Crear Documento", active: false },
    { item: "Ver Documentos", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <div>
        {itemSelect === "Crear Documento" && <p>Crear Documento</p>}
        {itemSelect === "Ver Documentos" && <p>Ver Documentos</p>}
      </div>
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
