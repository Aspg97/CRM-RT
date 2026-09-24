import { useState } from "react";
import BodyPageGen from "../../components/BodyPageGen";
import RegistrarOfertas from "./subComponents/RegistrarOfertas";
import VerMateriales from "./subComponents/VerMateriales";
import VerProductos from "./subComponents/VerProductos";
import VerServicios from "./subComponents/VerServicios";
import VerPersonalizados from "./subComponents/VerPersonalizados";
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
        {itemSelect === "Ver Materiales" && <VerMateriales />}
        {itemSelect === "Ver Productos" && <VerProductos />}
        {itemSelect === "Ver Servicios" && <VerServicios />}
        {itemSelect === "Ver Personalizados" && <VerPersonalizados />}
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
