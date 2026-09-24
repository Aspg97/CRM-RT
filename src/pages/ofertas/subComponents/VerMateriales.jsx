import Tablas from "../../../components/structuralComponents/Tablas";

function VerMateriales() {
  //disp 80%
  const titles = [
    { title: "Detalle", width: "28%" },
    { title: "Cant.", width: "10%" },
    { title: "Precio Uni.", width: "10%" },
    { title: "Precio May.", width: "10%" },
    { title: "Precio Roll.", width: "10%" },
    { title: "U. De Medida", width: "10%" },
  ];
  return <Tablas titles={titles} nombreTabla={"Listado de Materiales"} />;
}

export default VerMateriales;
