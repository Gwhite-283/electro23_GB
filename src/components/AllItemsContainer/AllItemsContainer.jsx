
import { AllItemCard } from './AllItemCard'
import { Container, Row, Spinner } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import './AllItemCard.css'
import 'animate.css'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export const AllItemsContainer = ({ isLoading, itemsByCategory }) => {


    const { category } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [imgLoad, setImgLoad] = useState(false)

    const loadState = (state) => {
        setImgLoad(state)
    }


    const RenderPlayers = ({ isLoading, itemsByCategory }) => {
        if (!imgLoad && isLoading) {
            return <div className='w-100 vh-100 d-flex justify-content-center mt-5'><Spinner /></div>;
        }

        return (
            <Row>
                {itemsByCategory.map((data) => (
                    <AllItemCard data={data} key={data.id} loadState={loadState} />
                ))}
            </Row>
        );
    };


    const title = 

    (category === 'offers') 
    
    ? 'Offers' 
    
    : 

    (category === 'allItems') 

    ? 'All' 

    :
    
    itemsByCategory[0]?.category.replace(/^\w/, c => c.toUpperCase())

    return (
        <div className='d-flex justify-content-center mt-4 mb-1'>
            <Container>
                <Row >
                <Col sm={2}>
                    <Link
                        to='/category/allItems'
                        style={{ textDecoration: "none", color: "inherit" }}
                        key=""

                    >
                        <div className="d-flex justify-content-center mt-1 mb-0 hover-right">
                            <div className="arrow-container2">
                                <i className="bi bi-chevron-left"></i>
                            </div>
                            <span className="hold">Ver todo</span>

                        </div>
                    </Link>
                    </Col>
                    <Col sm={10}>
                        <h3 className='d-flex justify-content-center '>{title}</h3>
                    </Col>
                    
                </Row>
                <hr className="mb-4 mt-1" style={{ color: '#C4C4C4' }} />
                <Row >
                    <Col xs={12} sm={3} className="d-none d-sm-block d-lg-block">

                        <div > Filtrar</div>
                    </Col>

                    <Col xs={12} sm={12} md={8}>
                        <small className="fs-6"> Rank by Recommended</small>
                        <RenderPlayers isLoading={isLoading} itemsByCategory={itemsByCategory} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
