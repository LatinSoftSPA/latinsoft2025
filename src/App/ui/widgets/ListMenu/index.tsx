import { useMenuItems } from "../../../infrastructure/hooks/useMenuItems";
import style from "./index.module.css";

interface Props {
  show: boolean;
  handleClick: () => void;
}

const ListMenu: React.FC<Props> = ({ show, handleClick }) => {
  const items = useMenuItems();

  const propsUl = {
    className: `${style.container} ${show ? style.show : ""}`,
  };

  return (
    <ul {...propsUl}>
      {items.map((obj) => {
        const { id, name, url } = obj;
        return (
          <li key={id}>
            <a href={url} onClick={handleClick}>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ListMenu;
