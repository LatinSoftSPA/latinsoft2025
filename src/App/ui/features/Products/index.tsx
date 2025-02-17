import Product from "./Product";

import { ProductProps } from "./interfaces";
import { listProducts } from "./data";

import style from "./index.module.css";

interface Props {
  id: string;
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
