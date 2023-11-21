import { ItemsContext } from "../../context/ItemsContext";
import { useContext, useState, useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cart.css'
import { Link } from "react-router-dom";

export const Cart = () => {

  const { items, setItems, itemsCount, setItemsCount } = useContext(ItemsContext); 


  const itemCountMap = new Map();
  items.forEach((item) => {
    const itemId = item[0].id;
    const itemCount = itemCountMap.get(itemId) || 0;
    itemCountMap.set(itemId, itemCount + 1);
  });

  const uniqueItems = Array.from(itemCountMap.entries()).map(([itemId, itemCount]) => {
    const item = items.find((item) => item[0].id === itemId);
    return { item, count: itemCount };
  }).filter(({ count }) => count > 0);

  const [itemCounts, setItemCounts] = useState(
    Object.fromEntries(uniqueItems.map(({ item, count }) => [item[0].id, count]))
  );

  useEffect(() => {
    const updatedItems = uniqueItems.flatMap(({ item, count }) =>
      Array.from({ length: count }, () => [item[0], item[1]])
    );
    setItems(updatedItems);
  }, [itemCounts]);

  const incrementItem = (itemId) => {
    setItemCounts((prevItemCounts) => {
      const updatedCounts = {
        ...prevItemCounts,
        [itemId]: prevItemCounts[itemId] + 1,
      };
      return updatedCounts;
    });
  };

  const decrementItem = (itemId) => {
    if (itemCounts[itemId] <= 1) {
      return;
    }

    setItemCounts((prevItemCounts) => {
      const updatedCounts = {
        ...prevItemCounts,
        [itemId]: prevItemCounts[itemId] - 1,
      };
      return updatedCounts;
    });
  };

  const deleteItems = (itemId) => {
    setItemCounts((prevItemCounts) => {
      const updatedCounts = {
        ...prevItemCounts,
        [itemId]: 0,
      };
      return updatedCounts;
    });
  
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item[0].id !== itemId);
      return updatedItems;
    });
  };
  

  const totalPrice = uniqueItems.reduce((total, { item }) => {
  
    const itemPrice = ((item[0]?.inOffer) ? (item[0].price / 2).toFixed(2) : item[0].price);  // a modo de ejemplo se puso una oferta de 50% 
    const itemCount = itemCounts[item[0].id];
   
    return total + itemPrice * itemCount;
  }, 0);

  const totalItemCount = Object.values(itemCounts).reduce((total, count) => total + count, 0);
  const isCheckoutDisabled = totalItemCount === 0;
  useEffect(() => {
    setItemsCount(itemCounts);
  }, [itemCounts]);


  return (
    <div className="bg-greycustom">
      <div className="d-flex justify-content-center pt-4 mb-5 hover-right ">
        <div className="hold h3 mt-5">Cart ({totalItemCount})</div>
      </div>

      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-md-8">
            {uniqueItems.map(({ item, count }) => (
            
                <Card key={item[0].id} className="card-cart ">
                  <Row>
                    <Col md={3} className="align-items-center d-flex justify-content-center">
                      <Card.Img
                        variant="top"
                        src={item[0].image}
                        alt={item[0].category}
                        style={{ maxHeight: '100%', maxWidth: '100px', objectFit: 'cover' }}
                      />
                    </Col>

                    <Col md={4}>
                      <Card.Body>
                        <Card.Title>{item[0].name.split(' ').slice(0, 4).join(' ')}</Card.Title>
                     
                        
                          <small className="text-muted">
                          <ListGroup.Item>Description: {item[0].description.split(' ').slice(0, 9).join(' ')}</ListGroup.Item>
                          
                          </small>
                       
                      </Card.Body>
                    </Col>

                    <Col md={2} className="d-flex flex-column align-items-center justify-content-center">
                      <div>$ {((item[0]?.inOffer) ? (item[0].price / 2).toFixed(2) : item[0].price)}</div>
                      <small className='text-decoration-line-through text-muted'>  { ((item[0]?.inOffer) ? '$' + item[0].price : '')}</small>
                    
                    
                    </Col>

                    <Col md={2} className="align-items-center d-flex ">
                      <div className="count-style ">
                        <span className="count-style-but px-2" onClick={() => decrementItem(item[0].id)}>
                          -
                        </span>
                        <span className="count-style-center px-2 ">
                          <small>{itemCounts[item[0].id]}</small>
                        </span>
                        <span className="count-style-but px-2" onClick={() => incrementItem(item[0].id)}>
                          +
                        </span>
                      </div>
                    </Col>

                    <Col md={1} className="align-items-center d-flex ">
                      <span className="x px-2" onClick={() => deleteItems(item[0].id)}>
                      <i className="bi bi-trash" ></i>
                      </span>
                    </Col>
                  </Row>
                </Card>
              
            ))}
          </div>
        </div>
      </div>

      <Row className="barra-horizontal align-items-center m-0">
        <Col className="text-left h4 mt-3 d-flex justify-content-center">
          Total: ${totalPrice.toFixed(2)}
        </Col>
        <Col md={3} className="d-flex align-items-stretch justify-content-center d-flex  m-0 ">
          <Link to="/checkout">
            <Button variant="danger" className="py-4 px-5 but"  disabled={isCheckoutDisabled}>
              Checkout ({totalItemCount})
            </Button>
          </Link>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
