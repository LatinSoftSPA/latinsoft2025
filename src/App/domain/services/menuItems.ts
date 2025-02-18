import { data } from "../../infrastructure/data/menuItems";
import { MenuItem } from "../interfaces/menuItems";

export const getMenuItems = (): MenuItem[] => {
  return data.filter((obj) => obj.enabled);
};
