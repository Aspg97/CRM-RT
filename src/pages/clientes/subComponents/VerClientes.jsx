import Tablas from "../../../components/structuralComponents/Tablas";

function VerClientes() {
  const titles = [
    { title: "Razón Social", width: "23%" },
    { title: "Teléfono", width: "13%" },
    { title: "Dirección", width: "19%" },
    { title: "E-Mail", width: "23%" },
  ];

  return <Tablas titles={titles} nombreTabla={"Listado de Clientes"} />;
}

export default VerClientes;
