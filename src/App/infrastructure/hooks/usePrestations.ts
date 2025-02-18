import { useEffect, useState } from "react";
import { getPrestations } from "../../domain/services/prestationService";
import { Prestation } from "../../domain/interfaces/prestation";

export const usePrestations = (): Prestation[] => {
  const [items, setItems] = useState<Prestation[]>([]);

  useEffect(() => {
    const fetchedItems = getPrestations();
    setItems(fetchedItems);
  }, []);

  return items;
};
