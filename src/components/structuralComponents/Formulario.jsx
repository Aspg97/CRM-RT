import styles from "./Formulario.module.css";
import CustomInput from "../atomicComponents/CustomInput";

function Formulario({ title, inputs }) {
  const sendData = (e) => {
    e.preventDefault();
  };

  const addInput = inputs.map((input) => {
    return (
      <CustomInput
        key={input.index}
        label={input.label}
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        id={input.id}
      />
    );
  });
  return (
    <div className={styles["container-form"]}>
      <h3>{title}</h3>
      <form onSubmit={sendData} className={styles["form"]}>
        {addInput}
        <div className={styles["container-btn-form"]}>
          <button className={styles["btn-form"]}>Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
