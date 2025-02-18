import { data } from "../../infrastructure/data/prestationItems"; // Ruta al archivo de datos
import { Prestation } from "../interfaces/prestation";

export const getPrestations = (): Prestation[] => {
  return data.filter((obj) => obj.enabled);
};
