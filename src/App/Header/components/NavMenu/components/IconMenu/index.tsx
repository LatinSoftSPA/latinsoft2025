import style from "./index.module.css";

import navMenuIcon from "/img/navMenu.svg";

const IconMenu = () => {
  return (
    <div className={style.container}>
      <img src={navMenuIcon} alt="Icono Menu" />
    </div>
  );
};

export default IconMenu;
