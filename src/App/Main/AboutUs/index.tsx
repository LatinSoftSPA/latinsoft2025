import style from "./index.module.css";

interface Props {
  id: string;
}

const AboutUs: React.FC<Props> = ({ id }) => {
  return (
    <div className={style.container}>
      <section id={id}>
        <h2 className={style.title}>Quienes Somos</h2>
        <figure>
          <div className={style.containerImg}>
            <img src="img/ilustracion1.svg" alt="about-us" />
          </div>
          <div className={style.containerText}>
            <h3>Desarrolladores de Software</h3>
            <p>
              Somos una empresa de desarrollo de software a medida, enfocada en brindar soluciones tecnológicas innovadoras y a la medida de las necesidades de nuestros clientes. Nuestro equipo está conformado por profesionales altamente capacitados y con
              amplia experiencia en el sector, lo que nos permite ofrecer un servicio de calidad y garantizar el éxito de cada proyecto.
            </p>
            <h3>Apuntamos al Futuro.</h3>
            <p>
              Estamos comprometidos con la mejora continua y la búsqueda de nuevas tecnologías que nos permitan ofrecer soluciones cada vez más avanzadas y eficientes. Nuestro objetivo es convertirnos en el socio tecnológico preferido de nuestros
              clientes, acompañándolos en su crecimiento y transformación digital.
            </p>
          </div>
        </figure>
      </section>
    </div>
  );
};

export default AboutUs;
