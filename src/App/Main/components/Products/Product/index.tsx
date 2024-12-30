import style from "./index.module.css";

interface Props {
  id: number;
  name: string;
  img: { src: string; alt: string };
  description: string;
  url: string;
}

const Product: React.FC<Props> = (props) => {
  const { img } = props;
  //const { id, name, img, description, url } = props;

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
