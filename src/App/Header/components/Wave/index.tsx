import style from "./index.module.css";

const Wave = () => {
  return (
    <div className={style.container}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
      </svg>
    </div>
  );
};

export default Wave;
