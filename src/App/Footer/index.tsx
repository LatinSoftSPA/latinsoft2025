import Sites from "./components/Sites";
import Mails from "./components/Mails";

import { data } from "./data";
import style from "./index.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <footer>
        <section id="footer">
          <div className={style.menuFooter}>
            <Sites sites={data.sites} />
          </div>
          <div className={style.menuFooter}>
            <h4>Teléfono</h4>
            <p>+56-9-82431722</p>
          </div>
          <div className={style.menuFooter}>
            <Mails emails={data.emails} />
          </div>
          <div className={style.menuFooter}>
            <h4>Ubicación</h4>
            <p>Salvador Allende #448 - IQQ CHL</p>
          </div>
        </section>
        <h2 className={style.titleFooter}>Latinsoft SpA &copy; 2025 | SACGes</h2>
      </footer>
    </div>
  );
};

export default Footer;
