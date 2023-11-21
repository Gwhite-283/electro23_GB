import { AllItemsContainer } from '../components/AllItemsContainer/AllItemsContainer';
import { usePlayerData } from "../hook/usePlayerData";

export const ByCategoryItemContainerPage = () => {

  const { isLoading, itemsByCategory } = usePlayerData();



  return (
    <>
      <br />
      
      <AllItemsContainer isLoading={isLoading} itemsByCategory={itemsByCategory} />
    </>
  );
};
