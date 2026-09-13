function RegistrarPagos() {
  const inputs = [
    {
      label: "Destino",
      type: "text",
      placeholder: "Nombre Tienda",
      name: "dest",
      id: "inp-dest",
    },
    {
      label: "Valor",
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
  ];
  return (
    <Formulario
      title={"Registrar Nuevo Pago"}
      inputs={inputs}
      options={[{ item: "hola" }]}
    />
  );
}

export default RegistrarPagos;
