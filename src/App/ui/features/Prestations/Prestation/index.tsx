import { PrestationProps } from "../interfaces";

import style from "./index.module.css";

const Prestation: React.FC<PrestationProps> = (props) => {
  const { name, img, description } = props;

  return (
    <div className={style.prestation}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Prestation;
