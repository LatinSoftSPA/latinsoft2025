import { data } from "./data";

import style from "./index.module.css";

interface Props {
  show: boolean;
  handleClick: () => void;
}

const ListMenu: React.FC<Props> = ({ show, handleClick }) => {
  const getLi = () => {
    return data.map((obj) => {
      const { id, name, url, enabled } = obj;
      if (!enabled) return null;

      return (
        <li key={id}>
          <a href={url} onClick={handleClick}>
            {name}
          </a>
        </li>
      );
    });
  };

  const propsUl = {
    className: `${style.container} ${show ? style.show : ""}`,
  };

  return <ul {...propsUl}>{getLi()}</ul>;
};

export default ListMenu;
