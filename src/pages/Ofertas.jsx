import { useState } from "react";
import BodyPageGen from "../components/BodyPageGen.jsx";
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
      <div>
        {itemSelect === "Registrar Oferta" && <p>Registrar Oferta</p>}
        {itemSelect === "Ver Materiales" && <p>Ver Materiales</p>}
        {itemSelect === "Ver Productos" && <p>Ver Productos</p>}
        {itemSelect === "Ver Servicios" && <p>Ver Servicios</p>}
        {itemSelect === "Ver Personalizados" && <p>Ver Personalizados</p>}
      </div>
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
