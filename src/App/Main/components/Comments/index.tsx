import style from "./index.module.css";

interface Props {
  id: string;
}

const Comments: React.FC<Props> = ({ id }) => {
  return (
    <div className={style.container}>
      <section className={style.contenedor} id={id}>
        <h2 className={style.title}>Que dicen nuestros clientes</h2>
        <div className={style.cards}>
          <div className={style.card}>
            <figure>
              <img src="img/face1.jpg" alt="" />
            </figure>
            <div className={style.contentCard}>
              <h4>Huguito Vera</h4>
              <p>El mejor papá...!!!</p>
            </div>
          </div>
          <div className={style.card}>
            <figure>
              <img src="img/face2.jpg" alt="" />
            </figure>
            <div className={style.contentCard}>
              <h4>Kiara Vera</h4>
              <p>Te amo papi..!!!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
