import { useState } from "react";
import styles from "./CustomInput.module.css";

function CustomInput({ key, label, type, name, placeholder, id }) {
  const [value, setValue] = useState("");

  const handleInputText = (e) => {
    setValue(e.target.value);
  };

  return (
    <fieldset className={styles["container-input"]} key={key}>
      <label className={styles["label-form"]} htmlFor={id}>
        {label}:
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        className={styles["input-form"]}
        onChange={handleInputText}
        value={value}
      />
    </fieldset>
  );
}

export default CustomInput;
