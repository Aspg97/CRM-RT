import { useState } from "react";
import BodyPageGen from "../../components/BodyPageGen";
import RegistrarProveedor from "./subComponents/RegistrarProveedor";
import VerProveedores from "./subComponents/VerProveedores";
function Proveedores() {
  const [items, setItems] = useState([
    { item: "Registrar Proveedor", active: false },
    { item: "Ver Proveedores", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <>
        {itemSelect === "Registrar Proveedor" && <RegistrarProveedor />}
        {itemSelect === "Ver Proveedores" && <VerProveedores />}
      </>
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
