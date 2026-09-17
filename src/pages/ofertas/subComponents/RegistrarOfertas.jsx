import Formulario from "../../../components/structuralComponents/Formulario";
import CustomInput from "../../../components/atomicComponents/CustomInput";
import styles from "../../../components/atomicComponents/CustomInput.module.css";
import { useState } from "react";

function RegistrarOfertas() {
  const inputs = [
    {
      label: "Precio unitario:",
      type: "text",
      placeholder: "00.00",
      name: "val-uni",
      id: "inp-o-uni",
    },
    {
      label: "Precio al por mayor:",
      type: "text",
      placeholder: "00.00",
      name: "val-may",
      id: "inp-o-may",
    },
    {
      label: "Precio por rollos o paquetes:",
      type: "text",
      placeholder: "00.00",
      name: "val-roll",
      id: "inp-o-roll",
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

  const [option, setOption] = useState("");
  const handleOption = (e) => {
    setOption(e.target.value);
    console.log(e.target.value);
  };

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
          <select
            name="select-tip"
            id="slt-o-tip"
            onChange={handleOption}
            className={styles["select-form"]}
          >
            <option value="-">-</option>
            <option value="Producto">Producto</option>
            <option value="Material">Material</option>
            <option value="Servicio">Servicio</option>
            <option value="Personalizado">Personalizado</option>
          </select>
        </fieldset>
        {option === "Servicio" && (
          <fieldset className={styles["container-input"]}>
            <label className={styles["label-form"]} htmlFor={"slt-o-maq"}>
              Máquina:
            </label>
            <select
              name="select-maq"
              id="slt-o-maq"
              className={styles["select-form"]}
            >
              <option value="-">-</option>
              <option value="Trucolor_3.2mt">Trucolor 3.2mt</option>
              <option value="Cama_Plana_UV">Cama Plana UV</option>
              <option value="Laser_1.3x0.9mt">Láser 1.3x0.9mt</option>
              <option value="Plotter_de_Corte">Plotter de Corte</option>
              <option value="Roland_1.6mt">Roland 1.6mt</option>
              <option value="Laminadora">Laminadora</option>
              <option value="Plotter_de_Sublimación">
                Plotter de Sublimación
              </option>
            </select>
          </fieldset>
        )}
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
        <fieldset className={styles["container-input"]}>
          <label className={styles["label-form"]} htmlFor={"slt-o-med"}>
            Unidad de medida:
          </label>
          <select
            name="select-med"
            id="slt-o-med"
            className={styles["select-form"]}
          >
            <option value="-">-</option>
            <option value="m2">m2</option>
            <option value="M._Lineal">M. Lineal</option>
            <option value="Minuto">Minuto</option>
            <option value="Unidad">Unidad</option>
          </select>
        </fieldset>
      </>
    );
  };

  return <Formulario title={"Registrar Nueva Oferta"} content={content()} />;
}

export default RegistrarOfertas;
