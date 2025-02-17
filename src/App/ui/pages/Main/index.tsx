import AboutUs from "../../features/AboutUs";
import Clients from "../../features/Clients";
import Prestations from "../../features/Prestations";
import Products from "../../features/Products";
// import Comments from "../../features/Comments";

import "./index.css";

const Main = () => {
  return (
    <main>
      <AboutUs id="conocenos" />
      <Prestations id="servicios" />
      <Clients id="clientes" />
      <Products id="productos" />
      {/* <Comments id="comentarios" /> */}
    </main>
  );
};

export default Main;
