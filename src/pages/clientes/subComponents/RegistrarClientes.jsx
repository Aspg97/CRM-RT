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
    {
      label: "Teléfono",
      type: "text",
      placeholder: "0999999999",
      name: "nom",
      id: "inp-nom",
    },
    {
      label: "Dirección",
      type: "text",
      placeholder: "San Juan",
      name: "nom",
      id: "inp-nom",
    },
    {
      label: "E-Mail",
      type: "text",
      placeholder: "asd@gmail.com",
      name: "nom",
      id: "inp-nom",
    },
    {
      label: "E-Mail",
      type: "text",
      placeholder: "asd@gmail.com",
      name: "nom",
      id: "inp-nom",
    },
    {
      label: "E-Mail",
      type: "text",
      placeholder: "asd@gmail.com",
      name: "nom",
      id: "inp-nom",
    },
    {
      label: "E-Mail",
      type: "text",
      placeholder: "asd@gmail.com",
      name: "nom",
      id: "inp-nom",
    },
  ];
  return <Formulario title={"Registrar Nuevo Cliente"} inputs={inputs} />;
}

export default RegistrarClientes;
