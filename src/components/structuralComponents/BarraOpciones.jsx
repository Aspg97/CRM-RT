import styles from "./BarraOpciones.module.css";
import imgSelect from "../../assets/seleccionador.svg";

function BarraOpciones({ options, setOptions }) {
  const handleOnClick = (nombreItem) => {
    setOptions((prevOptions) =>
      prevOptions.map((item) => ({
        ...item,
        active: item.item === nombreItem,
      })),
    );
  };

  const listOptions = options.map((option) => {
    return (
      <li
        className={`${styles["option-list"]}`}
        key={option.item}
        onClick={() => {
          handleOnClick(option.item);
        }}
      >
        {option.active ? <img src={imgSelect} width={9} alt="select" /> : null}
        <span>{option.item}</span>
      </li>
    );
  });

  return (
    <aside className={styles["container-options"]}>
      <h3>Opciones</h3>
      <ul className={styles["container-list-items"]}>{listOptions}</ul>
    </aside>
  );
}

export default BarraOpciones;
