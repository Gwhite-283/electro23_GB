
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Link } from "react-router-dom";
import { ItemCardDetail } from './ItemCardDetail';
import { useEffect } from 'react';

export const ItemDetailContainer = ({ isLoading, itemsByCategory }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <div className="bg-custom  ">
    <Container className="max-width-container align-items-center d-flex" style={{height:'80vh'}}>
      <Row >
        

    {isLoading ? (
        <div className="Spinner">
          Cargando...
        </div>
      ) : (
        itemsByCategory.map((data) => {
          return <ItemCardDetail key={data.id} itemsByCategory={itemsByCategory} />;
        })
      )}        
         
      </Row>

      
    </Container>
    </div>
  );
};
