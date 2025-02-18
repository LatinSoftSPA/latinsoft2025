import { data } from "../../infrastructure/data/clientItems";
import { ClientItems } from "../interfaces/clientItems";

export const getClientItems = (): ClientItems[] => {
  return data.filter((obj) => obj.enabled);
};
