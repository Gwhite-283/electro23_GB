
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";

import { usePlayerData } from "../hook/usePlayerData";


export const ItemDetailPage = () => {

  const { isLoading, itemsByCategory } = usePlayerData();

  return (
    <>
      
      <ItemDetailContainer isLoading={isLoading} itemsByCategory={itemsByCategory} />
      
    </>
  );
};
