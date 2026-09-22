import Formulario from "../../../components/structuralComponents/Formulario";
import CustomInput from "../../../components/atomicComponents/CustomInput";

function RegistrarClientes() {
  const inputs = [
    {
      label: "Nombre",
      type: "text",
      placeholder: "Jorge",
      name: "nom",
      id: "inp-c-nom",
    },
    {
      label: "C.I. / RUC:",
      type: "text",
      placeholder: "0000000000",
      name: "ci",
      id: "inp-c-ci",
    },
    {
      label: "Teléfono",
      type: "text",
      placeholder: "0999999999",
      name: "telf",
      id: "inp-c-telf",
    },
    {
      label: "Dirección",
      type: "text",
      placeholder: "San Juan",
      name: "dir",
      id: "inp-c-dir",
    },
    {
      label: "E-Mail",
      type: "text",
      placeholder: "asd@gmail.com",
      name: "mail",
      id: "inp-c-mail",
    },
  ];

  const addInput = inputs.map((input) => {
    return (
      <CustomInput
        key={input.id}
        label={input.label}
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        id={input.id}
      />
    );
  });

  return <Formulario title={"Registrar Nuevo Cliente"} content={addInput} />;
}

export default RegistrarClientes;
