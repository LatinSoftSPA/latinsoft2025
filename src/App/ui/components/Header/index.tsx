import NavMenu from "../../widgets/NavMenu";
import TitleSetion from "../../widgets/TitleSetion";
import Waves from "../../widgets/Waves";

import "./index.css";

const Header = () => {
  return (
    <header>
      <NavMenu />
      <TitleSetion />
      <Waves />
    </header>
  );
};

export default Header;
