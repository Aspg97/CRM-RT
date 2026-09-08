import { useState } from "react";
import BodyPageGen from "../components/BodyPageGen.jsx";
function Clientes() {
  const [items, setItems] = useState([
    { item: "Registrar Cliente", active: false },
    { item: "Ver Clientes", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <div>
        {itemSelect === "Registrar Cliente" && <p>Registrar Cliente</p>}
        {itemSelect === "Ver Clientes" && <p>Ver Clientes</p>}
      </div>
    );
  };
  return (
    <BodyPageGen
      title="Clientes"
      content={contenido()}
      options={items}
      setOptions={setItems}
    />
  );
}

export default Clientes;
