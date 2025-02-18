import { usePrestations } from "../../../infrastructure/hooks/usePrestations";
import style from "./index.module.css";

interface Props {
  id: string;
}

const Prestations: React.FC<Props> = ({ id }) => {
  const prestations = usePrestations();

  return (
    <div className={style.container}>
      <section id={id}>
        <h2 className={style.title}>Nuestros servicios</h2>
        <div className={style.prestations}>
          {prestations.map((obj) => {
            const { id, img, name, description } = obj;
            const propsImg = {
              className: style.prestationImage,
              src: img,
              alt: name,
            };

            return (
              <div key={id} className={style.prestation}>
                <img {...propsImg} />
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Prestations;
