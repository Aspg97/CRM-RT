import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { Link, Navigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import Footer from "../components/Footer";
import logo_RT from "../assets/logo_RT.png";
import clientes from "../assets/clientes.svg";
import informe from "../assets/informe.svg";
import ordenDeTrabajo from "../assets/ordenDeTrabajo.svg";
import pagos from "../assets/pagos.svg";
import proveedores from "../assets/proveedores.svg";
import oferta from "../assets/oferta.svg";
import BtnLogout from "../components/BtnLogout";

function HomePage() {
  const { user } = useContext(UserContext);

  //if (!user.log) return <Navigate to={"/login"} />;
  return (
    <>
      <div className={styles["container-all"]}>
        <div className={styles["head-panel"]}>
          <div className={styles["container-logo"]}>
            <img src={logo_RT} alt="logo-rt" width={80} />
            <div className={styles["container-logo-text"]}>
              <h1 className={styles["logo-text"]}>ROTULACIÓN TOTAL</h1>
              <div></div>
              <p>Arte y Publicidad</p>
            </div>
          </div>
          <div className={styles["greeting"]}>
            <p>Hola {user && <span>{user.name}</span>}!</p>
          </div>
          <div className={styles["profile"]}>
            <BtnLogout />
          </div>
        </div>
        <div className={styles["container-gen-panel"]}>
          <h2 className={styles["panel-title"]}>Panel de Control</h2>
          <div className={styles["container-panel"]}>
            <Link className={styles["container-item"]} to="/informes">
              <div className={styles["container-img"]}>
                <img src={informe} alt="informes" width={90} />
              </div>
              <p className={styles["text-item"]}>Ver Informes</p>
            </Link>
            <Link className={styles["container-item"]} to="/documentos">
              <div className={styles["container-img"]}>
                <img src={ordenDeTrabajo} alt="crear-documento" width={100} />
              </div>
              <p className={styles["text-item"]}>Crear Documento</p>
            </Link>
            <Link className={styles["container-item"]} to="/pagos">
              <div className={styles["container-img"]}>
                <img src={pagos} alt="pagos" width={100} />
              </div>
              <p className={styles["text-item"]}>Pagos</p>
            </Link>
            <Link className={styles["container-item"]} to="/clientes">
              <div className={styles["container-img"]}>
                <img src={clientes} alt="clientes" width={100} />
              </div>
              <p className={styles["text-item"]}>Ver Clientes</p>
            </Link>
            <Link className={styles["container-item"]} to="/proveedores">
              <div className={styles["container-img"]}>
                <img src={proveedores} alt="proveedores" width={100} />
              </div>
              <p className={styles["text-item"]}>Ver Proveedores</p>
            </Link>
            <Link className={styles["container-item"]} to="/oferta">
              <div className={styles["container-img"]}>
                <img src={oferta} alt="oferta" width={90} />
              </div>
              <p className={styles["text-item"]}>Ver Oferta</p>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
