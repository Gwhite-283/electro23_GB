import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Form, Button, Row, Col } from "react-bootstrap";
import { ItemsContext } from "../../context/ItemsContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  email: "",
  celular: "",
  firstName: "",
  apellido: "",
  direccion: "",
};

export const CheckoutForm = () => {
  const [purchaseID, setPurchaseID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (purchaseID) {
      setShowModal(true);
    }
  }, [purchaseID]);

  const handleCloseModal = () => {
    setItems([]);
    setItemsCount([]);
    setShowModal(false);
    navigateTo('/'); // Redirect to the home page ("/")
  };

  const [errors, setErrors] = useState({
    email: false,
    celular: false,
    nombre: false,
    apellido: false,
    direccion: false,
  });

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });

    // Verificación de campos
    if (name === 'email') {
      const isValid = /^\S+@\S+\.\S+$/.test(value); // Verifica si es un correo electrónico válido
      setErrors((prevErrors) => ({ ...prevErrors, email: !isValid }));
    }

    if (name === 'celular') {
      const isValid = /^[0-9]+$/.test(value); // Verifica si solo contiene dígitos
      setErrors((prevErrors) => ({ ...prevErrors, celular: !isValid }));
    }

    if (name === 'nombre') {
      const isValid = value.trim() !== ''; // Verifica si no está vacío
      setErrors((prevErrors) => ({ ...prevErrors, nombre: !isValid }));
    }

    if (name === 'apellido') {
      const isValid = value.trim() !== ''; // Verifica si no está vacío
      setErrors((prevErrors) => ({ ...prevErrors, apellido: !isValid }));
    }

    if (name === 'direccion') {
      const isValid = value.trim() !== ''; // Verifica si no está vacío
      setErrors((prevErrors) => ({ ...prevErrors, direccion: !isValid }));
    }
  };

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

  const onSubmit = async (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).some((value) => value.trim() === '');
    if (isEmpty) {
      return; // Detener el envío del formulario
    }


    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) {
      return; 
    }

    const products = uniqueItems.reduce((obj, { item, count }) => {
      const { id, name, price } = item[0];
      obj[id] = { name, price, count };
      return obj;
    }, {});

    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      ...values,
      products,
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
  };


  return (
    
    <div style={styles.containerShop} >

      <Form className="FormContainer mt-3" onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <div className="fs-3 text-start mx-2 mb-4">Informacion del contacto</div>
          <Form.Control
            type="text"
            placeholder="Email *"
            style={{ margin: 10, maxWidth: 400, borderRadius: 0 }}
            name="email"
            value={values.email}
            onChange={handleOnChange}
            className={errors.email ? 'is-invalid' : ''}
            required
          />
          {errors.email && (
            <div className="invalid-feedback fs-6 m-2">
              por favor ingrese email valido.
            </div>
          )}

          <Form.Control
            type="text"
            placeholder="celular *"
            style={{ margin: 10, maxWidth: 400, borderRadius: 0 }}
            name="celular"
            value={values.celular}
            onChange={handleOnChange}
            className={errors.celular ? 'is-invalid' : ''}
            required
          />
          {errors.celular && (
            <div className="invalid-feedback fs-6 m-2">
              por favor ingrese un celular valido.
            </div>
          )}
          <hr className="my-4" />
          <div className="fs-3 text-start mx-2 mb-4">Informacion de envio</div>
        </Form.Group>

        <Form.Group className="mb-3" >
          <div style={{ maxWidth: 400 }}>
            <Row className="text-start ">

              <Col >
                <Form.Control
                  type="text"
                  placeholder="Nombre completo *"
                  style={{ margin: 10, borderRadius: 0 }}
                  name="firstName"
                  value={values.firstName}
                  onChange={handleOnChange}
                  className={errors.firstName ? 'is-invalid' : ''}
                  required
                />
                {errors.firstName && (
                  <div className="invalid-feedback fs-6 m-2">
                    Ingrese su nombre.
                  </div>
                )}
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Apellido *"
                  style={{ margin: 10, borderRadius: 0 }}
                  name="apellido"
                  value={values.apellido}
                  onChange={handleOnChange}
                  className={errors.apellido ? 'is-invalid' : ''}
                  required
                />
                {errors.apellido && (
                  <div className="invalid-feedback fs-6 m-2">
                    Ingrese su apellido.
                  </div>
                )}
              </Col>
            </Row>

            <Form.Control
              type="text"
              placeholder="Calle y altura *"
              style={{ marginRight: 10, marginLeft: 10, borderRadius: 0 }}
              name="direccion"
              value={values.direccion}
              onChange={handleOnChange}
              className={errors.direccion ? 'is-invalid' : ''}
              required
            />
            {errors.direccion && (
              <div className="invalid-feedback fs-6 m-2">
                Ingrese su direccion.
              </div>
            )}

          </div>

        </Form.Group>
        <Button className="btnASendAction d-flex px-5 my-4 mx-2" variant="dark" type="submit">
          Enviar order
        </Button>
      </Form>
      {purchaseID && (

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Gracias por su compra! </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "green", color: "whitesmoke" }}>
            <span>Su ID de la compra es:</span>
            <h4>{purchaseID}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal} >
              <Link to='/' style={{ textDecoration: 'none' }}> Home</Link>
            </Button>
          </Modal.Footer>
        </Modal>



      )}

    </div >
  );
};

