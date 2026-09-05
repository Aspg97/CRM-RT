import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";
import styles from "./LogIn.module.css";
import logo_RT from "../assets/logo_RT.png";
import userLog from "../assets/user_log.svg";
import passLog from "../assets/pass_log.svg";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      password === user.id
        ? (setUser({ ...user, log: true }), navigate("/"))
        : alert("Contraseña incorrecta. Por favor, inténtelo de nuevo.");
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

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
              <img src={userLog} alt="user" width={19} />
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsername}
                className={styles["form-input-login"]}
              />
            </div>
            <div className={styles["form-group"]}>
              <img src={passLog} alt="pass" width={23} />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className={styles["form-input-login"]}
              />
            </div>
          </div>
          <button
            type="submit"
            className={styles["btn-login"]}
            onClick={handleSubmit}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </>
  );
}

export default LogIn;
