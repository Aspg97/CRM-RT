import BodyPageGen from "../components/BodyPageGen.jsx";
function Documentos() {
  const contenido = () => {
    return <p>Documentos</p>;
  };

  return <BodyPageGen title="Documentos" content={contenido()} />;
}

export default Documentos;
