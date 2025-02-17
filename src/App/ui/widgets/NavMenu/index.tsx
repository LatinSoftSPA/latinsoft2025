import { useState } from "react";
import IconMenu from "../IconMenu";
import ListMenu from "../ListMenu";

import style from "./index.module.css";

const NavMenu = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <nav>
      <div className={style.container}>
        <IconMenu handleClick={handleClick} />
        <ListMenu show={show} handleClick={handleClick} />
      </div>
    </nav>
  );
};

export default NavMenu;
