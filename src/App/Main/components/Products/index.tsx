import { listProducts } from "./data";
import Product from "./Product";

import style from "./index.module.css";

interface Props {
  id: string;
}

interface ProductProps {
  id: number;
  name: string;
  img: { src: string; alt: string };
  description: string;
  url: string;
}

const Products: React.FC<Props> = ({ id }) => {
  return (
    <div className={style.container}>
      <section id={id}>
        <h2 className={style.title}>Productos</h2>
        <div className={style.products}>
          {listProducts.map((obj: ProductProps) => (
            <Product key={obj.id} {...obj} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
