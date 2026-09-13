import { useState } from "react";
import styles from "./CustomInput.module.css";

function CustomInput({ key, label, type, name, placeholder, id, options }) {
  const [value, setValue] = useState("");

  const handleInputText = (e) => {
    setValue(e.target.value);
  };

  const option = options.map((option) => {
    return <option value={option.item}>{option.item}</option>;
  });

  return (
    <fieldset className={styles["container-input"]} key={key}>
      <label className={styles["label-form"]} htmlFor={id}>
        {label}:
      </label>
      {type === "text" && (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          className={styles["input-form"]}
          onChange={handleInputText}
          value={value}
        />
      )}
      {type === "textarea" && (
        <textarea
          name={name}
          id={id}
          className={styles["input-form"]}
          value={value}
          onChange={handleInputText}
        ></textarea>
      )}
      {type === "select" && (
        <select name={name} id={id} className={styles["select-form"]}>
          {options ? option : null}
        </select>
      )}
    </fieldset>
  );
}

export default CustomInput;
