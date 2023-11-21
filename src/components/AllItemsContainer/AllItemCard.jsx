import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BuyButton } from './ui/BuyButton';
import { Link } from 'react-router-dom';
import './ui/revealimage.css';
import { useInView } from 'react-intersection-observer';

export const AllItemCard = ({ data, loadState }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const ChildImgLoaded = () => {
    loadState(true)
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderImage = () => (
    <div className='box1'>
      <div className={` ${inView ? 'content1' : ''}`}>
        <img
          loading='lazy'
          src={data.image}
          alt='Imagen de prueba'
          className={`imagen `}
          onLoad={ChildImgLoaded}         
          ref={ref}
        />
      </div>
    </div>
  );



  return (
    
    <Col xs={6} sm={6} md={6} xl={4} className='p-0' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Row className='m-2 py-3 px-1'>
        <Link to={`/item-detail/${data.id}`} style={{ textDecoration: 'none' }} key=''>
          <Col xs={12} md={12}>
            {renderImage()}
          </Col>
          <Col xs={12} md={12}>
            <BuyButton isHovered={isHovered}  data={data}/>
          </Col>
        </Link>
      </Row>
    </Col>



  );
};
