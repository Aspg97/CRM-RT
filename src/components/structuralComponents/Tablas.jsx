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
              <th width={"12%"}>ID</th>
              {titles.map((title, index) => (
                <th key={index} width={title.width}>
                  {title.title}
                </th>
              ))}
              <th width={"10%"}>Opciones</th>
            </tr>
          </thead>
          <tbody className={styles["body-table"]}></tbody>
        </table>
      </div>
    </div>
  );
}

export default Tablas;
