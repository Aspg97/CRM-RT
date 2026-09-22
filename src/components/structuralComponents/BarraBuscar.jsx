import { useState } from "react";
import styles from "./BarraBuscar.module.css";
import search from "../../assets/buscar.svg";

function BarraBuscar() {
  const [txtInput, setTxtInput] = useState("");

  const handleSearch = (e) => {
    setTxtInput(e.target.value);
  };

  return (
    <div className={styles["cont-search"]}>
      <img src={search} alt="buscar" height={15} />
      <input
        type="text"
        name="search"
        value={txtInput}
        onChange={handleSearch}
        className={styles["inp-search"]}
      />
    </div>
  );
}

export default BarraBuscar;
