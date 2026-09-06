import styles from "./Informes.module.css";
import BodyPageGen from "../components/BodyPageGen.jsx";

function Informes() {
  const contenido = () => {
    return <p>Informes</p>;
  };

  return <BodyPageGen title="Informes" content={contenido()} />;
}

export default Informes;
