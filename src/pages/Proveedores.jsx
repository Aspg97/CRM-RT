import { useState } from "react";
import BodyPageGen from "../components/BodyPageGen.jsx";
function Proveedores() {
  const [items, setItems] = useState([
    { item: "Registrar Proveedor", active: false },
    { item: "Ver Proveedores", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <div>
        {itemSelect === "Registrar Proveedor" && <p>Registrar Proveedor</p>}
        {itemSelect === "Ver Proveedores" && <p>Ver Proveedores</p>}
      </div>
    );
  };
  return (
    <BodyPageGen
      title="Proveedores"
      content={contenido()}
      options={items}
      setOptions={setItems}
    />
  );
}

export default Proveedores;
