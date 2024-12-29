import NavMenu from "./components/NavMenu";
import TitleSetion from "./components/TitleSetion";
import Wave from "./components/Wave";

import "./index.css";

const Header = () => {
  return (
    <header>
      <NavMenu />
      <TitleSetion />
      <Wave />
    </header>
  );
};

export default Header;
