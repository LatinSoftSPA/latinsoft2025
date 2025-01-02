import Prestation from "./Prestation";

import { PrestationProps } from "./interfaces";
import { listPrestations } from "./data";

import style from "./index.module.css";

interface Props {
  id: string;
}

const Prestations: React.FC<Props> = ({ id }) => {
  const filtered = listPrestations.filter((obj: PrestationProps) => obj.enabled);

  return (
    <div className={style.container}>
      <section id={id}>
        <h2 className={style.title}>Nuestros servicios</h2>
        <div className={style.prestations}>
          {filtered.map((obj: PrestationProps) => (
            <Prestation key={obj.id} {...obj} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Prestations;
