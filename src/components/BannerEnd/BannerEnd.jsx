import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BannerEnd.css'
import 'animate.css'

export const BannerEnd = () => {

  <Row className="align-self-end flex-column my-4">

    <Col className="f-14px ">Discover how EvoPlus empowers you with burdenless technology.</Col>

  </Row >

  return (
    <div className="custom-color-end bg-image-banner-end d-flex justify-content-center">
      <div className="max-width-container ">


        <Col xs={12} md={12} className="d-none d-lg-block pt-5">
          <Row className="bg-custom-dark m-0  ">
            <Col xs={12} md={12} className=" h1">
              <div>Relentless innovation defines who we are.
                EvoPlus inspires through innovation. Never Settle</div>
            </Col>

            <Col xs={12} md={4} className=" d-flex justify-content-between ">
              <Row >
                <Col xs={12} md={12} className=" h3 mt-2 h1 pt-5">Evolve your digital life</Col>
                <Col xs={12} md={12} className=" d-flex">
                  <Row className="align-self-end flex-column my-5">

                    <Col className="f-14px ">Discover how EvoPlus empowers you with burdenless technology.</Col>

                  </Row >

                </Col>
              </Row>
            </Col>
            <Col xs={12} md={8} className="d-flex aling-content-center" ><img src="/assets/EvoPlus.webp" alt="Imagen de prueba" className="image-banner image  animate__animated animate__fadeInUp mt-4" /></Col>
          </Row>

        </Col>


        <Col xs={12} sm={12} md={12} className="d-none d-sm-block d-lg-none p-0 mt-5">
          <Row className="bg-custom-dark m-2 py-3 px-1">
            <Col xs={12} md={12} className=" h1">
              <div>Relentless innovation defines who we are.
                EvoPlus inspires through innovation.Never Settle</div>
            </Col>

            <Col xs={12} md={12} className=" h3 mt-2">OnePlus 10 Pro</Col>
            <Col xs={12} md={12} ><img src="/assets/EvoPlus.webp" alt="Imagen de prueba" className="image-banner image image-banner-margin2 mt-4" /></Col>
            <Col xs={12} md={12} >
              <Row className="align-self-end flex-column my-4">

                <Col className="f-14px ">Discover how EvoPlus empowers you with burdenless technology.</Col>

              </Row >
            </Col>
          </Row>
        </Col>


        <Col xs={12} md={6} className="d-block d-sm-none p-0  mt-5">
          <Row className="bg-custom-dark m-2 py-3 px-1">
            <Col xs={12} md={12} className=" h1">
              <div>Relentless innovation defines who we are.
                EvoPlus inspires through innovation.Never Settle</div>
            </Col>
            <Col xs={12} md={6} className=" h3 mt-2">OnePlus 10 Pro</Col>
            <Col xs={12} md={6}  ><img src="/assets/EvoPlus.webp" alt="Imagen de prueba" className="image-banner image image-banner-margin2 mt-4" /></Col>
            <Col xs={12} md={12} >
              <Row className="align-self-end flex-column my-4">

                <Col className="f-14px ">Discover how EvoPlus empowers you with burdenless technology.</Col>

              </Row >
            </Col>
          </Row>
        </Col>

      </div>
    </div>
  )
}
