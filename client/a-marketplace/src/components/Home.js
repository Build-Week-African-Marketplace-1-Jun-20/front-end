
import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Card, CardHeader, CardImg, CardTitle, CardText, Button, Navbar, NavbarBrand, NavItem, NavLink, NavbarText} from 'reactstrap';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.png';
import { Route, Link } from 'react-router-dom'
// const [state, setState] = useState('[]');
const ListPage = () => {
    // const [name, price, location, description] = props
    
    return(
        <div style={{backgroundColor:'#e74c3d'}}>
            {/* <Navbar>
                <NavbarBrand><Link to='/'>AFRICAN MARKET PLACE</Link></NavbarBrand>
            <Nav>
                <NavItem>
                    <Link to='/listpage'>List Page</Link>
                </NavItem>
            </Nav>
            </Navbar> */}
            <Jumbotron fluid style={{backgroundColor:'#303030'}}>
                <Container>
                    <h1 className='display-3' style={{color:'#fff'}}><span style={{fontFamily:'Monoton', color:'#e74c3d'}}>African</span> MARKETPLACE</h1>
                </Container>
            </Jumbotron>
            </div>

)
}
export default ListPage;