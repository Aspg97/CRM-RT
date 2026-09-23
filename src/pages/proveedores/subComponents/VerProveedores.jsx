import Tablas from "../../../components/structuralComponents/Tablas";

function VerProveedores() {
  const titles = ["Razón Social", "Teléfono", "Dirección", "E-Mail"];
  return <Tablas titles={titles} nombreTabla={"Listado de Proveedores"} />;
}

export default VerProveedores;
