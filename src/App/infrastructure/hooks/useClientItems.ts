import { useState, useEffect } from "react";
import { getClientItems } from "../../domain/services/clientItems";
import { ClientItems } from "../../domain/interfaces/clientItems";

export const useClientItems = () => {
  const [items, setItems] = useState<ClientItems[]>([]);

  useEffect(() => {
    const fetchedItems = getClientItems();
    setItems(fetchedItems);
  }, []);

  return items;
};
