import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import Table from "react-bootstrap/Table";
import { CheckoutForm } from './CheckoutFormx';
import { Card, ListGroup } from "react-bootstrap";


export const Checkout = () => {
    const { items } = useContext(ItemsContext);




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

    const [itemCounts] = useState(
        Object.fromEntries(uniqueItems.map(({ item, count }) => [item[0].id, count]))
    );




    const totalPrice = uniqueItems.reduce((total, { item }) => {

        const itemPrice = ((item[0]?.inOffer) ? (item[0].price / 2).toFixed(2) : item[0].price);  // a modo de ejemplo se puso una oferta de 50% 
        const itemCount = itemCounts[item[0].id];

        return total + itemPrice * itemCount;
    }, 0);


    return (
        <Container>
            <Row className='mt-5 d-flex justify-content-center '>
                <Col md={12} xl={4} >

                    <h1> Checkout</h1>
                    <h1><CheckoutForm /></h1>

                </Col>

                <Col md={12} xl={5} className=" mx-4 " >
                    <span style={{ maxWidth: '100%' }}>
                        <div>
                            <div className="h3 my-4 "  >Order Summary </div>

                            <div style={{ backgroundColor: '#F4F4F4' }}>


                                {uniqueItems.map(({ item, count }) => (

                                    <Card key={item[0].id} className="card-cart px-2 pt-2" style={{ backgroundColor: '#F4F4F4' }}>
                                        <Row>
                                            <Col md={2} className="align-items-center d-flex justify-content-center">
                                                <Card.Img
                                                    variant="top"
                                                    src={item[0].image}
                                                    alt={item[0].category}
                                                    style={{ maxHeight: '100%', maxWidth: '75px', objectFit: 'cover' }}
                                                />
                                            </Col>

                                            <Col md={4}>
                                                <Card.Body>
                                                    <Card.Title className='fs-6'>{item[0].name.split(' ').slice(0, 4).join(' ')}</Card.Title>


                                                    <small className="text-muted">
                                                        <ListGroup.Item> {item[0].description.split(' ').slice(0, 4).join(' ')}</ListGroup.Item>

                                                    </small>

                                                </Card.Body>
                                            </Col>

                                            <Col md={2} className="align-items-center d-flex ">

                                                <span className="px-2 ">
                                                    <small className="text-muted ">x {count}</small>
                                                </span>

                                            </Col>


                                            <Col md={4} className="d-flex flex-column align-items-center justify-content-center ">
                                                <div>$ {((item[0]?.inOffer) ? (item[0].price / 2).toFixed(2) : item[0].price)}</div>
                                                <small className='text-decoration-line-through text-muted'>  {((item[0]?.inOffer) ? '$' + item[0].price : '')}</small>
                                            </Col>

                                        </Row>
                                    </Card>

                                ))}

                                <hr className='m-3 pb-0 ' />

                                <Row className='m-2 pb-3 '>
                                    <Col className='fs-5'>
                                        Total
                                    </Col>
                                    <Col className='fs-5 text-end px-4'>
                                        $ {totalPrice.toFixed(2)}
                                    </Col>
                                </Row>

                            </div>


                        </div>
                    </span>
                </Col>
            </Row>
        </Container>
    );
};
