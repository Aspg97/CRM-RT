import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./MenuHead.module.css";
import logo_RT from "../assets/logo_RT.png";
import BtnLogout from "../components/BtnLogout";

function MenuHead(props) {
  const { title } = props;
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      item: "Informes",
      active: false,
    },
    {
      item: "Documentos",
      active: false,
    },
    {
      item: "Pagos",
      active: false,
    },
    {
      item: "Clientes",
      active: false,
    },
    {
      item: "Proveedores",
      active: false,
    },
    {
      item: "Ofertas",
      active: false,
    },
  ]);

  useEffect(() => {
    setItems((prevItems) =>
      prevItems.map((items) =>
        items.item === title ? { ...items, active: true } : items,
      ),
    );
  }, []);

  const listItems = items.map((item) => {
    return (
      <Link
        className={`${styles["item"]} ${styles[item.active ? "active" : "inactive"]}`}
        to={`/${item.item}`}
        key={item.item}
      >
        <li>{item.item}</li>
      </Link>
    );
  });
  return (
    <div className={styles["container-head-menu"]}>
      <div className={styles["container-title"]}>
        <img
          src={logo_RT}
          alt="logo-rt"
          width={55}
          onClick={() => navigate("/")}
        />
        <h1 className={styles["title"]}>{title}</h1>
        <BtnLogout />
      </div>
      <div className={styles["container-nav"]}>
        <nav className={styles["navegation"]}>
          <ul className={styles["container-items"]}>{listItems}</ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuHead;
