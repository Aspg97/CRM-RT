import MenuHead from "./structuralComponents/MenuHead.jsx";
import Footer from "./structuralComponents/Footer.jsx";
import BarraOpciones from "./structuralComponents/BarraOpciones.jsx";
import styles from "./BodyPageGen.module.css";
function BodyPageGen({ title, content, options, setOptions }) {
  return (
    <>
      <div className={styles["container-page"]}>
        <MenuHead title={title} />
        <div className={styles["body-item"]}>
          <div className="container-options">
            <BarraOpciones options={options} setOptions={setOptions} />
          </div>
          <main className={styles["container-main"]}>{content}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BodyPageGen;
