import { useState, createContext } from "react";

export const ItemsContext = createContext();

const itemsInStock = [];

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(itemsInStock);
  const [itemsCount, setItemsCount] = useState(itemsInStock);

  const foo = () => {
    alert(`Cantidad de items en nuestro carrito: ${items.length}`);
  };

  return (
    <ItemsContext.Provider value={{ items, setItems, foo, itemsCount, setItemsCount }}>
      {children}
    </ItemsContext.Provider>
  );
};

