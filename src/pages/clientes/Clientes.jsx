import { useState } from "react";
import BodyPageGen from "../../components/BodyPageGen";
import RegistrarClientes from "./subComponents/RegistrarClientes";
function Clientes() {
  const [items, setItems] = useState([
    { item: "Registrar Cliente", active: false },
    { item: "Ver Clientes", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <>
        {itemSelect === "Registrar Cliente" && <RegistrarClientes />}
        {itemSelect === "Ver Clientes" && <p>Ver Clientes</p>}
      </>
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
