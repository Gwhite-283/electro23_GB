import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { ItemsContext } from "../../context/ItemsContext";
import { useContext } from "react";
import 'animate.css'

export const ItemCardDetail = ({ itemsByCategory, idx }) => {

  const data = itemsByCategory[0]
  const { items, setItems, itemsCount, setItemsCount } = useContext(ItemsContext);

  const offer = (data?.inOffer) ? (data.price / 2).toFixed(2) : data.price;

  const buynow = (

    <Row className="align-self-end  flex-column my-2 w-100 ">


      <Col><small style={{ color: 'red' }}>{((data?.inOffer) ? 'Up to 50% OFF' : '')}</small></Col>
      <Col className="h4 my-2">$ {offer} <small className='text-decoration-line-through text-muted h6'>  { ((data?.inOffer) ? '$' + data.price : '')}</small></Col>
      <Col>
        <Link
          to={`/item-detail/${data.id}`}
          style={{ textDecoration: "none" }}
          key=""
        >


        </Link>
      </Col>
    </Row>
  )

  const setfun = () => {
    setItems([...items, itemsByCategory]);

    const itemId = itemsByCategory[0].id.toString(); // Convertir el ID a string

    setItemsCount((prevItemCounts) => {
      const updatedCounts = {
        ...prevItemCounts,
        [itemId]: (prevItemCounts[itemId] || 0) + 1,
      };
      return updatedCounts;
    });
  };

  const image = <img src={data?.image || ''} loading="lazy" alt="Imagen de prueba" className="imagen animate__animated animate__fadeIn" />
 

  return (
    <>

      <Col xs={12} md={12} className="d-none d-sm-block d-lg-block p-0 ">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={6} md={6} className="  d-flex aling-content-center" >
            {image}
          </Col>
          <Col xs={6} md={6} className=" ">
            <Row >
              <Col xs={12} md={12} className=" h3 mt-2">{data.name}</Col>
              <Col xs={12} md={12} className="f-14px text-muted mb-4">{data.description}</Col>

              <Col xs={12} md={12} className="f-14px mb-4"><small>Estado: con Stock </small></Col>
              <hr className="f-14px mx-2" />

              <Col xs={12} md={12} className=" d-flex justify-content-center w-100 ">
                {buynow}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col xs={12} md={6} className="d-block d-sm-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">

          <Col xs={12} md={6}  >
            {image}
          </Col>
          <Col xs={12} md={6} className=" h3 mt-2">{data.name}</Col>
          <Col xs={12} md={12} className="f-14px text-muted mb-4">{data.description}</Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>

      <Row className="barra-horizontal align-items-center m-0">
        <Col md={5}>

        </Col>


        <Col md={6} className="d-flex">

          <Button variant="dark" className=" py-4 px-5 " style={{ width: '30vh' }} onClick={() => setfun()}>Agregar</Button>

          <Link to="/cart"><Button variant="danger" className="py-4 px-5  " style={{ width: '30vh' }}>Comprar</Button>  </Link>

        </Col>


        <Col md={1}>
        </Col>
      </Row>

    </>
  );
};

