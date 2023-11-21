import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getPlayerData } from '../helpers/getPlayerData';

export const usePlayerData = () => {

  const [itemsByCategory, setItemsByCategory] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { category = 'phones' } = useParams();

  const { id } = useParams();

 
  useEffect(() => {
    
    const fetchData = async () => {
      const itemsData = await getPlayerData(category, id);
      setItemsByCategory(itemsData);
      setIsLoading(false);
    };


    
    fetchData();
  }, [category, id]);

  return { isLoading, itemsByCategory };

};
