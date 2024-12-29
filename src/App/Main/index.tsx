import AboutUs from "./AboutUs";
import Clients from "./Clients";
import Prestations from "./Prestations";
import Products from "./Products";
import Comments from "./Comments";

import "./index.css";

const Main = () => {
  return (
    <main>
      <AboutUs id="nosotros" />
      <Prestations id="servicios" />
      <Clients id="clientes" />
      <Products id="productos" />
      <Comments id="comentarios" />
    </main>
  );
};

export default Main;
