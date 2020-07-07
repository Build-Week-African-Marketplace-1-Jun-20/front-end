import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Navbar, NavbarBrand, NavItem, NavLink, NavbarText, Nav, Button, CardImg, Card} from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login' ;
import SignUp from './components/SignUp';
import AddItems from './components/actions/AddItems';
import ListPage from './components/ListPage';
import ItemList from './components/ItemList';
import PrivateRoute from "./components/utils/PrivateRoute";
import { MarketProvider } from './components/context/MarketContext';
import UpdateItem from './components/actions/UpdateItem'

import axios from 'axios'
import ItemCard from './components/itemCard';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://amp-node-api.herokuapp.com/api/market/')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log("Error!", error))
  }, []);
  return (
    <MarketProvider>
    <Router>
        <Navbar>
            <NavbarBrand><Link to='/'>AFRICAN MARKET PLACE 2</Link></NavbarBrand>
            <Nav>
                <NavItem>
                    <Link style = {{padding: '10px'}} to='/'>Home</Link>
                    <Link style = {{padding: '10px'}} to='/signup'> SignUp</Link>
                    <Link style = {{padding: '10px'}} to='/login'> Login </Link>
                    <Link style = {{padding: '10px'}} to='/ListPage'> My Profile </Link>
                </NavItem>
            </Nav>
      </Navbar>
      <div style={{backgroundColor:'#e74c3d'}}>
            <Jumbotron fluid style={{backgroundColor:'#303030'}}>
                <Container>
                    <h1 className='display-3' style={{color:'#fff'}}><span style={{fontFamily:'Monoton', color:'#e74c3d'}}>African</span> MARKETPLACE</h1>
                </Container>
            </Jumbotron>

       <Route exact path = '/'>  
       <Card>
        <CardImg style = {{width:'100%', margin:'0 auto', height:'800px'}} src={require ('./assets/img3.jpg')}/> 
        </Card>
        </Route>   
            </div>

    <Route exact path = '/'>
    </Route>
     
      <Route exact path ='/SignUp'>
        <SignUp/>  
      </Route>  

      <Route exact path = '/AddItems'>
       <AddItems/>
       </Route>

       <Route exact path ='/'>
          <ItemList />
       </Route>
    
    <Route
      path="/item-list/:id" render={(props) => <ItemCard {...props} products={products} setProducts={setProducts} />} />
  
        <Route 
        path="/update-form/:id" 
        render={(props) => <UpdateItem {...props} 
        setProducts={setProducts}/>}
         />
      <Switch>
        <PrivateRoute exact path="/ListPage" component={ListPage} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
      </Switch>
    </Router>
    </MarketProvider>
  );
}

export default App;
