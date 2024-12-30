import style from "./index.module.css";

interface PrestationsProps {
  id: string;
}

const Prestations: React.FC<PrestationsProps> = ({ id }) => {
  return (
    <div className={style.container}>
      <section id={id}>
        <h2 className={style.title}>Nuestros servicios</h2>
        <div className={style.prestations}>
          <div className={style.prestation}>
            <figure>
              <img src="img/ilustracion8.svg" alt="" />
            </figure>
            <h3>GesTRA</h3>
            <p>Sistema de Gestión de Transporte Publico Mayor.</p>
          </div>
          <div className={style.prestation}>
            <figure>
              <img src="img/ilustracion7.svg" alt="" />
            </figure>
            <h3>SACGes</h3>
            <p>Sistema de Acompañamiento para la Gestión Directiva.</p>
          </div>
          <div className={style.prestation}>
            <figure>
              <img src="img/ilustracion4.svg" alt="" />
            </figure>
            <h3>GesFLO</h3>
            <p>Sistema de Gestión de Flotas para los servicios mineros.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prestations;
