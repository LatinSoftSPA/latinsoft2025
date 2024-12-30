import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Prestations from "./components/Prestations";
import Products from "./components/Products";
// import Comments from "./components/Comments";

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
