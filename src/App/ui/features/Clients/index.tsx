import { useClientItems } from "../../../infrastructure/hooks/useClientItems";
import style from "./index.module.css";

interface Props {
  id: string;
}

const Clients: React.FC<Props> = ({ id }) => {
  const items = useClientItems();

  return (
    <div className={style.container}>
      <section id={id}>
        <h2 className={style.title}>Estamos Presente</h2>
        <figure className={style.containerFigure}>
          <div className={style.imagenAboutUs}>
            <img src="img/ilustracion2.svg" alt="" />
          </div>
          <div className={style.containerText}>
            {items.map((obj) => {
              const { id, name, content } = obj;
              return (
                <>
                  <h3>
                    <span>{id}</span>
                    {name}
                  </h3>
                  <p>{content}</p>
                </>
              );
            })}
          </div>
        </figure>
      </section>
    </div>
  );
};

export default Clients;
