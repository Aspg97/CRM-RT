import { useState } from "react";
import BodyPageGen from "../../components/BodyPageGen";

function Documentos() {
  const [items, setItems] = useState([
    { item: "Crear Documento", active: false },
    { item: "Ver Documentos", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <>
        {itemSelect === "Crear Documento" && <p>Crear Documento</p>}
        {itemSelect === "Ver Documentos" && <p>Ver Documentos</p>}
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
