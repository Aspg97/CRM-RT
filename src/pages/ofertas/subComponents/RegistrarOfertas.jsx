import Formulario from "../../../components/structuralComponents/Formulario";
import CustomInput from "../../../components/atomicComponents/CustomInput";
import styles from "../../../components/atomicComponents/CustomInput.module.css";
import { useState } from "react";

function RegistrarOfertas() {
  const inputs = [
    {
      label: "Precio Unitario:",
      type: "text",
      placeholder: "00.00",
      name: "val-uni",
      id: "inp-o-uni",
    },
    {
      label: "Precio Al Por Mayor",
      type: "text",
      placeholder: "00.00",
      name: "val-ma",
      id: "inp-o-may",
    },
    {
      label: "Precio Al Por Mayor",
      type: "text",
      placeholder: "00.00",
      name: "val-ma",
      id: "inp-o-may",
    },
    {
      label: "Precio Al Por Mayor",
      type: "text",
      placeholder: "00.00",
      name: "val-ma",
      id: "inp-o-may",
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

  const content = () => {
    return (
      <>
        <fieldset className={styles["container-input"]}>
          <label className={styles["label-form"]} htmlFor={"slt-o-tip"}>
            Tipo:
          </label>
          <select name="select-tip" id="slt-o-tip">
            <option value="Producto">Producto</option>
            <option value="Material">Material</option>
            <option value="Servicio">Servicio</option>
            <option value="Personalizado">Personalizado</option>
          </select>
        </fieldset>
        <fieldset className={styles["container-input"]}>
          <label className={styles["label-form"]} htmlFor={"txto-det"}>
            Detalle:
          </label>
          <textarea
            className={`${styles["input-form"]}`}
            name=""
            id="txt-o-det"
            onChange={handelTextArea}
            value={text}
          />
        </fieldset>
        {addInput}
      </>
    );
  };

  return <Formulario title={"Registrar Nueva Oferta"} content={content()} />;
}

export default RegistrarOfertas;
