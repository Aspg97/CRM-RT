import Formulario from "../../../components/structuralComponents/Formulario";

function RegistrarClientes() {
  const inputs = [
    {
      label: "Nombre",
      type: "text",
      placeholder: "Jorge",
      name: "nom",
      id: "inp-nom",
    },
  ];
  return <Formulario title={"Registrar Nuevo Cliente"} inputs={inputs} />;
}

export default RegistrarClientes;
