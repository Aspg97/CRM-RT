import { useContext } from "react";
import { UserContext } from "../context/user.context";
import "./BtnLogout.css";
import cerrar_sesion from "../assets/cerrar_sesion.svg";

function BtnLogout() {
  const { logout } = useContext(UserContext);

  return (
    <button className="btn-logout" onClick={logout}>
      <img src={cerrar_sesion} alt="Cerrar Sesión" width={20} />
    </button>
  );
}

export default BtnLogout;
