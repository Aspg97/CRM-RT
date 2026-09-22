import { useState } from "react";
import BodyPageGen from "../../components/BodyPageGen";
import RegistrarClientes from "./subComponents/RegistrarClientes";
import VerClientes from "./subComponents/VerClientes";
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
        {itemSelect === "Ver Clientes" && <VerClientes />}
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
