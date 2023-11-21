import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './ItemCard.css'


export const ItemCard = ({ itemsByCategory, idx }) => {

  const dataid = itemsByCategory[idx]?.id

  const offer = (itemsByCategory[idx]?.inOffer) ? (itemsByCategory[idx].price / 2).toFixed(2) : itemsByCategory[idx].price;

  const buynow = (<Row className="align-self-end flex-column my-2">
    <Col className="f-14px text-muted"><small >{itemsByCategory[idx]?.description.split(' ').slice(0, 10).join(' ')}</small></Col>
    <small className="f-14px mt-2" style={{color:'red'}}>{ ((itemsByCategory[idx]?.inOffer) ? 'Up to 50% OFF'  : '')}</small>
    <Col className="h4 mb-2">${offer}<small className='text-decoration-line-through text-muted h6'> { ((itemsByCategory[idx]?.inOffer) ? '$' + itemsByCategory[idx].price : '')}</small></Col>

    <Col>

      <Link
        to={`/item-detail/${dataid}`}
        style={{ textDecoration: "none" }}
        key=""
      >
        <Button variant="dark" className="px-4" >Comprar</Button>

      </Link>

    </Col>

  </Row>)


  const image = <img src={itemsByCategory[idx]?.image || ''} loading="lazy" alt="Imagen de prueba" className="imagen image-zoom-hover" />




  return (
    <>

      <Col xs={12} md={6} className="d-none d-lg-block p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={6} className=" d-flex justify-content-between ">
            <Row >
              <Col xs={12} md={12} className=" h3 mt-2">{itemsByCategory[idx]?.name}</Col>
              <Col xs={12} md={12} className=" d-flex">{buynow}

              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="  d-flex aling-content-center" >
            <Link
              to={`/item-detail/${dataid}`}
              style={{ textDecoration: "none" }}
              key=""
            >
                {image}
            </Link>
          </Col>
        </Row>

      </Col>


      <Col xs={12} sm={6} md={6} className="d-none d-sm-block d-lg-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={12} className=" h3 mt-2">{itemsByCategory[idx]?.name}</Col>
          <Col xs={12} md={12} >
            <Link
              to={`/item-detail/${dataid}`}
              style={{ textDecoration: "none" }}
              key=""
            >
                  {image}
            </Link>
          </Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>


      <Col xs={12} md={6} className="d-block d-sm-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={6} className=" h3 mt-2">{itemsByCategory[idx]?.name}</Col>
          <Col xs={12} md={6}  >

            <Link
              to={`/item-detail/${dataid}`}
              style={{ textDecoration: "none" }}
              key=""
            >
                 {image}
            </Link>

          </Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>


    </>
  );


};

