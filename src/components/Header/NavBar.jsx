import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { Brands } from './Brands';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const categories = ['Celulares', 'Audio', 'Tablet', 'Accessorios', 'Offers']

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        expanded={expanded}
        sticky="top"
        className='bg-white  pt-1 pb-2 shadow-sm'
      >
        <Container  >

          <Navbar.Brand className="brand"><Link to='/' style={{textDecoration:'none'}}><Brands /></Link></Navbar.Brand>
          <Navbar.Brand className="cart " sticky="top"> <Link to='/cart'><CartWidget /></Link></Navbar.Brand >

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
          >
            {expanded ? (
              <span>
                <i className="bi bi-x-lg xboot "></i>
              </span>
            ) : (
              <span>
                <i className="bi bi-list lboot "></i>
              </span>
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" media-flex " style={{ width: '100%' }}>

              {categories.map((category) => (               

                  <NavLink
                    className={({ isActive }) => `hvr-underline-from-left nav-item nav-link NavLink ${isActive ? 'active' : ''}`}
                    onClick={() => {
                   
                      setExpanded(false);
                    }}
                    key={category}
                    to={`/category/${category.toLowerCase()}`}
                  >
                    {category}
                    
                  </NavLink>
               
              ))}

            </Nav>
          </Navbar.Collapse>


        </Container>

      </Navbar>



    </>
  );
};
