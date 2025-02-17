import style from "./index.module.css";

const Waves = () => {
  return (
    <div className={style.container}>
      <svg className={style.wave1} viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 V100 H0 Z"></path>
      </svg>

      <svg className={style.wave2} viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 V100 H0 Z"></path>
      </svg>

      <svg className={style.wave3} viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 V100 H0 Z"></path>
      </svg>
    </div>
  );
};

export default Waves;
