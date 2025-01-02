import { ProductProps } from "../interfaces";

import style from "./index.module.css";

const Product: React.FC<ProductProps> = (props) => {
  const { img } = props;

  return (
    <div className={style.container}>
      <figure>
        <img src={img.src} alt={img.alt} />
      </figure>
      <figure className={style.seeMore}>
        <img src="img/icono1.png" alt="icon see more" />
        <p>Ver Más</p>
      </figure>
    </div>
  );
};

export default Product;
