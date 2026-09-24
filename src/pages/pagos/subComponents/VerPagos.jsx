import Tablas from "../../../components/structuralComponents/Tablas";

function VerPagos() {
  // dip 78%
  const titles = [
    { title: "Destino", width: "22%" },
    { title: "Valor", width: "10%" },
    { title: "Descripción", width: "24%" },
    { title: "Tipo", width: "10%" },
    { title: "Estado", width: "12%" },
  ];
  return <Tablas titles={titles} nombreTabla={"Listado de Pagos"} />;
}

export default VerPagos;
