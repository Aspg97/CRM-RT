import styles from "./Formulario.module.css";

function Formulario({ title, content }) {
  const sendData = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles["container-form"]}>
      <h3>{title}</h3>
      <form onSubmit={sendData} className={styles["form"]}>
        {content}
        <div className={styles["container-btn-form"]}>
          <button className={styles["btn-form"]}>Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
