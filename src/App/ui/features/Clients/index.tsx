import style from "./index.module.css";

interface ClientsProps {
  id: string;
}

const Clients: React.FC<ClientsProps> = ({ id }) => {
  return (
    <div className={style.container}>
      <section id={id}>
        <h2 className={style.title}>Estamos Presente</h2>
        <figure className={style.containerFigure}>
          <div className={style.imagenAboutUs}>
            <img src="img/ilustracion2.svg" alt="" />
          </div>
          <div className={style.containerText}>
            <h3>
              <span>1</span>Ministerio de Transporte
            </h3>
            <p>
              Implementamos sistemas de gestión de transporte público los cuales ayudan a optimizar las frecuencias, planificaciones y fiscalizaciones de los servicios, sin olvidar la mejora en los servicios destinados al publico en general. Estas
              plataformas han mejorado significativamente la movilidad urbana y reducido los tiempos de desplazamiento de los ciudadanos.
            </p>
            <h3>
              <span>2</span>Ministerio de Educación
            </h3>
            <p>
              Desarrollamos plataformas de gestión académica que integra los procesos de inscripción, calificaciones, asistencia y comunicación entre docentes, estudiantes y padres de familia. Esta herramienta ha contribuido a la digitalización y
              modernización del sistema educativo.
            </p>
            <h3>
              <span>3</span>Servicios a la Minería
            </h3>
            <p>
              Diseñamos y desarrollamos soluciones de software especializadas para empresas del sector minero, abarcando áreas como la gestión de la cadena de suministro, el control de procesos y la seguridad industrial. Estas soluciones han ayudado a
              nuestros clientes a mejorar su eficiencia operativa y cumplir con los estándares del sector.
            </p>
            <h3>
              <span>4</span>Servicios Públicos
            </h3>
            <p>
              Hemos trabajado con proveedores de servicios públicos, como empresas de agua, electricidad y gas, para implementar sistemas de facturación, atención al cliente y gestión de redes. Estas soluciones han permitido a nuestros clientes optimizar
              sus procesos, mejorar la experiencia de los usuarios y aumentar la eficiencia de sus operaciones.
            </p>
          </div>
        </figure>
      </section>
    </div>
  );
};

export default Clients;
