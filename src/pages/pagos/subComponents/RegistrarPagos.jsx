import Formulario from "../../../components/structuralComponents/Formulario";
import CustomInput from "../../../components/atomicComponents/CustomInput";
import styles from "../../../components/atomicComponents/CustomInput.module.css";
import { useState } from "react";

function RegistrarPagos() {
  const inputs = [
    {
      label: "Destino",
      type: "text",
      placeholder: "Nombre Tienda",
      name: "dest",
      id: "inp-pa-dest",
    },
    {
      label: "Valor",
      type: "text",
      placeholder: "0999999999",
      name: "nom",
      id: "inp-pa-val",
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

  const [text, setText] = useState("");
  const handelTextArea = (e) => {
    setText(e.target.value);
  };

  const contenido = () => {
    return (
      <>
        {addInput}
        <fieldset className={styles["container-input"]}>
          <label className={styles["label-form"]} htmlFor={"txt-p-mot"}>
            Descripción:
          </label>
          <textarea
            className={`${styles["input-form"]}`}
            name=""
            id="txt-p-mot"
            onChange={handelTextArea}
            value={text}
          />
        </fieldset>
        <fieldset className={styles["container-input"]}>
          <label className={styles["label-form"]} htmlFor="lt-o-tip">
            Tipo:
          </label>
          <select
            name="select-tip"
            id="slt-o-tip"
            className={styles["select-form"]}
          >
            <option value="-">-</option>
            <option value="proveedor">Proveedor</option>
            <option value="servBasic">Servicios Básicos</option>
            <option value="tc">Tarjeta de Crédito</option>
            <option value="varios">Varios</option>
          </select>
        </fieldset>
      </>
    );
  };

  return <Formulario title={"Registrar Nuevo Pago"} content={contenido()} />;
}

export default RegistrarPagos;
