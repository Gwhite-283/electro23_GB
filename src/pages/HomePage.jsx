import { BannerStart } from "../components/BannerStart/BannerStart";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { BannerEnd } from "../components/BannerEnd/BannerEnd";
import { usePlayerData } from "../hook/usePlayerData";


export const HomePage = () => {

  const { isLoading, itemsByCategory } = usePlayerData();

  return (
    <>
      <BannerStart />
      <ItemListContainer isLoading={isLoading} itemsByCategory={itemsByCategory} />
      <BannerEnd />
    </>
  );
};
