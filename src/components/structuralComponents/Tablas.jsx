import BarraBuscar from "./BarraBuscar";
import styles from "./Tablas.module.css";

function Tablas({ titles, content, nombreTabla }) {
  return (
    <div className={styles["cont-inf-table"]}>
      <BarraBuscar />
      <div className={styles["cont-data-gen"]}>
        <h3>{nombreTabla}</h3>
        <table className={styles["table"]}>
          <thead className={styles["head-table"]}>
            <tr>
              <th>#</th>
              <th>ID</th>
              {titles.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody className={styles["body-table"]}></tbody>
        </table>
      </div>
    </div>
  );
}

export default Tablas;
