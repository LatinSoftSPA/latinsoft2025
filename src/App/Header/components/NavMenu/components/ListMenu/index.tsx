import style from "./index.module.css";

const ListMenu = () => {
  return (
    <ul className={style.container}>
      <li>
        <a href="#">Inicio</a>
      </li>
      <li>
        <a href="#nosotros">Conócenos</a>
      </li>
      <li>
        <a href="#servicios">Servicios</a>
      </li>
      <li className={style.liClientes}>
        <a href="#clientes">Clientes</a>
      </li>
      <li>
        <a href="#productos">Productos</a>
      </li>
      <li>
        <a href="#footer">Contáctenos</a>
      </li>
    </ul>
  );
};

export default ListMenu;
