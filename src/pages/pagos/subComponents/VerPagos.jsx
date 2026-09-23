import Tablas from "../../../components/structuralComponents/Tablas";

function VerPagos() {
  const titles = ["Destino", "Valor", "Descripción", "Tipo", "Estado"];
  return <Tablas titles={titles} nombreTabla={"Listado de Pagos"} />;
}

export default VerPagos;
