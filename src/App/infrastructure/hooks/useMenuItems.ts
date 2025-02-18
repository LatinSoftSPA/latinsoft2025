import { useState, useEffect } from "react";
import { getMenuItems } from "../../domain/services/menuItems";
import { MenuItem } from "../../domain/interfaces/menuItems";

export const useMenuItems = () => {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchedItems = getMenuItems();
    setItems(fetchedItems);
  }, []);

  return items;
};
