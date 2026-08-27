import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { Link } from "react-router-dom";
import "./HomePage.css";
import logo_RT from "../assets/logo_RT.png";
import clientes from "../assets/clientes.svg";
import informe from "../assets/informe.svg";
import ordenDeTrabajo from "../assets/ordenDeTrabajo.svg";
import pagos from "../assets/pagos.svg";
import proveedores from "../assets/proveedores.svg";
import oferta from "../assets/oferta.svg";

function HomePage() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div className="head-panel">
        <div className="container-logo">
          <img src={logo_RT} alt="logo-rt" width={80} />
          <div className="container-logo-text">
            <h1>ROTULACIÓN TOTAL</h1>
            <p>Arte y Publicidad</p>
          </div>
        </div>
        <div className="greeting">
          <p>
            Hola<span> {user.name}</span>!
          </p>
        </div>
        <div className="profile"></div>
      </div>
      <h2>Panel de Control</h2>
      <div className="container-panel">
        <Link className="container-item" to="/informes">
          <div className="container-img">
            <img src={informe} alt="informes" width={90} />
          </div>
          <p>Ver Informes</p>
        </Link>
        <Link className="container-item" to="/documentos">
          <div className="container-img">
            <img src={ordenDeTrabajo} alt="crear-documento" width={100} />
          </div>
          <p>Crear Documento</p>
        </Link>
        <Link className="container-item" to="/pagos">
          <div className="container-img">
            <img src={pagos} alt="pagos" width={100} />
          </div>
          <p>Pagos</p>
        </Link>
        <Link className="container-item" to="/clientes">
          <div className="container-img">
            <img src={clientes} alt="clientes" width={100} />
          </div>
          <p>Ver Clientes</p>
        </Link>
        <Link className="container-item" to="/proveedores">
          <div className="container-img">
            <img src={proveedores} alt="proveedores" width={100} />
          </div>
          <p>Ver Proveedores</p>
        </Link>
        <Link className="container-item" to="/oferta">
          <div className="container-img">
            <img src={oferta} alt="oferta" width={90} />
          </div>
          <p>Ver Oferta</p>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
