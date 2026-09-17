import { useState } from "react";
import BodyPageGen from "../../components/BodyPageGen";
import RegistrarPagos from "./subComponents/RegistrarPagos";

function Pagos() {
  const [items, setItems] = useState([
    { item: "Registrar Pago", active: false },
    { item: "Ver Pagos", active: false },
  ]);
  const itemSelect = items.find((item) => item.active)?.item;
  const contenido = () => {
    return (
      <>
        {itemSelect === "Registrar Pago" && <RegistrarPagos />}
        {itemSelect === "Ver Pagos" && <p>Ver Pagos</p>}
      </>
    );
  };

  return (
    <BodyPageGen
      title="Pagos"
      content={contenido()}
      options={items}
      setOptions={setItems}
    />
  );
}

export default Pagos;
