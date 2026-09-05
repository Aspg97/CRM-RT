import { useState } from "react";
import styles from "./LogIn.module.css";
import logo_RT from "../assets/logo_RT.png";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles["container-login"]}>
        <div className={styles["container-login-logo"]}>
          <img src={logo_RT} alt="logo-rt" width={80} />
          <div className={styles["container-logo-text"]}>
            <h1 className={styles["logo-text"]}>ROTULACIÓN TOTAL</h1>
            <div></div>
            <p className={styles["logo-subtext"]}>Arte y Publicidad</p>
          </div>
        </div>
        <div className={styles["container-login-form"]}>
          <h2 className={styles["title-login-form"]}>Identifíquese</h2>
          <div className={styles["container-login-inputs"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="username" className={styles["form-label-login"]}>
                Nombre de usuario:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles["form-input-login"]}
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="password" className={styles["form-label-login"]}>
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles["form-input-login"]}
              />
            </div>
          </div>
          <button type="submit" className={styles["btn-login"]}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </>
  );
}

export default LogIn;
