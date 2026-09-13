import Formulario from "../../../components/structuralComponents/Formulario";

function RegistrarProveedor() {
  const inputs = [
    {
      label: "Razón Social",
      type: "text",
      placeholder: "proveedor S.A.",
      name: "razo",
      id: "inp-razo",
    },
    {
      label: "Contacto",
      type: "text",
      placeholder: "0999999999",
      name: "cont",
      id: "inp-cont",
    },
    {
      label: "Dirección",
      type: "text",
      placeholder: "San Juan",
      name: "dir",
      id: "inp-dir",
    },
    {
      label: "E-Mail",
      type: "text",
      placeholder: "asd@gmail.com",
      name: "mail",
      id: "inp-mail",
    },
  ];
  return (
    <Formulario
      title={"Registrar Nuevo Proveedor"}
      inputs={inputs}
      options={[{ item: "hola" }]}
    />
  );
}

export default RegistrarProveedor;
