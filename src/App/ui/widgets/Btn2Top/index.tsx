import { useEffect, useRef } from "react";
import style from "./index.module.css";

const resetScroll: ScrollToOptions = { top: 0, behavior: "smooth" };

const Btn2Top = () => {
  const btnTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btnTop = btnTopRef.current;

    const handleClick = () => window.scrollTo(resetScroll);

    const handleScroll = () => {
      if (!btnTop) return;
      const showBtn = window.scrollY < 600 ? true : false;
      btnTop.classList.toggle(style.hidden, showBtn);
    };

    window.addEventListener("scroll", handleScroll);
    btnTop?.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      btnTop?.removeEventListener("click", handleClick);
    };
  }, []);

  const propsButton = {
    className: [style.btnTop, style.hidden].join(" "),
    id: "btnTop",
    ref: btnTopRef,
  };

  return <button {...propsButton}>↑</button>;
};

export default Btn2Top;
