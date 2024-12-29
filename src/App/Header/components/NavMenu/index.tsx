import IconMenu from "./components/IconMenu";
import ListMenu from "./components/ListMenu";
import style from "./index.module.css";

const NavMenu = () => {
  return (
    <nav>
      <div className={style.container}>
        <IconMenu />
        <ListMenu />
      </div>
    </nav>
  );
};

export default NavMenu;
