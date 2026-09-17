import { useState } from "react";
import BodyPageGen from "../../components/BodyPageGen";
import RegistrarOfertas from "./subComponents/RegistrarOfertas";
function Ofertas() {
  const [items, setItems] = useState([
    { item: "Registrar Oferta", active: false },
    { item: "Ver Materiales", active: false },
    { item: "Ver Productos", active: false },
    { item: "Ver Servicios", active: false },
    { item: "Ver Personalizados", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <>
        {itemSelect === "Registrar Oferta" && <RegistrarOfertas />}
        {itemSelect === "Ver Materiales" && <p>Ver Materiales</p>}
        {itemSelect === "Ver Productos" && <p>Ver Productos</p>}
        {itemSelect === "Ver Servicios" && <p>Ver Servicios</p>}
        {itemSelect === "Ver Personalizados" && <p>Ver Personalizados</p>}
      </>
    );
  };
  return (
    <BodyPageGen
      title="Ofertas"
      content={contenido()}
      options={items}
      setOptions={setItems}
    />
  );
}

export default Ofertas;
