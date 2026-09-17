import styles from "./Informes.module.css";
import BodyPageGen from "../../components/BodyPageGen";
import { useState } from "react";

function Informes() {
  const [items, setItems] = useState([{ item: "Ver Informes", active: false }]);

  const itemSelect = items.find((item) => item.active)?.item;

  const contenido = () => {
    return <>{itemSelect === "Ver Informes" && <p>Ver Informe</p>}</>;
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
