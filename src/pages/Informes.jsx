import styles from "./Informes.module.css";
import BodyPageGen from "../components/BodyPageGen.jsx";
import { useState } from "react";

function Informes() {
  const [items, setItems] = useState([
    { item: "Ver Informes", active: false },
    { item: "Crear Informes", active: false },
  ]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return (
      <main>
        {itemSelect === "Ver Informes" && <p>Ver Informe</p>}
        {itemSelect === "Crear Informes" && <p>Crear Informe</p>}
      </main>
    );
  };

  return (
    <BodyPageGen
      title="Informes"
      content={contenido()}
      options={items}
      setOptions={setItems}
    />
  );
}

export default Informes;
