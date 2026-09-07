import { useState } from "react";
import BodyPageGen from "../components/BodyPageGen.jsx";
function Documentos() {
  const contenido = () => {
    return <p>Documentos</p>;
  };

  const [item, setItems] = useState([{ item: "Ver Informes", active: false }]);

  return (
    <BodyPageGen
      title="Documentos"
      content={contenido()}
      options={item}
      setOptions={setItems}
    />
  );
}

export default Documentos;
