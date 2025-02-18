import { useRef } from "react";
import style from "./index.module.css";

import useScrollToTop from "../../../infrastructure/hooks/useScrollToTop";

const Btn2Top = () => {
  const { isVisible } = useScrollToTop();
  const btnTopRef = useRef<HTMLButtonElement>(null);

  const propsButton = {
    className: [style.btnTop, isVisible ? "" : style.hidden].join(" "),
    id: "btnTop",
    ref: btnTopRef,
  };

  return <button {...propsButton}>↑</button>;
};

export default Btn2Top;
