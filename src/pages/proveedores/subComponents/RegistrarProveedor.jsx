import Formulario from "../../../components/structuralComponents/Formulario";
import CustomInput from "../../../components/atomicComponents/CustomInput";

function RegistrarProveedor() {
  const inputs = [
    {
      label: "Razón Social",
      type: "text",
      placeholder: "proveedor S.A.",
      name: "razo",
      id: "inp-pr-razo",
    },
    {
      label: "Contacto",
      type: "text",
      placeholder: "0999999999",
      name: "cont",
      id: "inp-pr-cont",
    },
    {
      label: "Dirección",
      type: "text",
      placeholder: "San Juan",
      name: "dir",
      id: "inp-pr-dir",
    },
    {
      label: "E-Mail",
      type: "text",
      placeholder: "asd@gmail.com",
      name: "mail",
      id: "inp-pr-mail",
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

  return <Formulario title={"Registrar Nuevo Proveedor"} content={addInput} />;
}

export default RegistrarProveedor;
