import navMenuIcon from "/img/navMenu.svg";

import style from "./index.module.css";

interface Props {
  handleClick: () => void;
}

const IconMenu: React.FC<Props> = ({ handleClick }) => {
  return (
    <div className={style.container} onClick={handleClick}>
      <img src={navMenuIcon} alt="Icono Menu" />
    </div>
  );
};

export default IconMenu;
