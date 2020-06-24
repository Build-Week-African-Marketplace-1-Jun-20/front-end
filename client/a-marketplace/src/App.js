import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarText, Nav, Button} from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import Login from './components/Login' ;
import SignUp from './components/SignUp';
import AddItems from './components/AddItems';
import ListPage from './components/ListPage';
import Home from './components/Home'
import ItemList from './components/ItemList'
import data from "./components/data";
import Items from "./components/Items"

const App = () => {
  const [products, setProducts] = useState(data);

  return (
    <>
        <Navbar>
            <NavbarBrand><Link to='/'>AFRICAN MARKET PLACE</Link></NavbarBrand>
            <Nav>
                <NavItem>
                    <Link style = {{padding: '10px'}} to='/'>Home</Link>
                    <Link to = '/login'>Login</Link>
                </NavItem>
            </Nav>
      </Navbar>
    <Route exact path = '/'>
    </Route>
     
     <Route exact path = '/'>
      <Home/>
     </Route>
     
     <Route exact path = '/login'>
       <Login/>
     </Route>

      <Route exact path ='/SignUp'>
        <SignUp/>  
      </Route>  

      <Route exact path = '/AddItems'>
       <AddItems/>
       </Route>

       <Route exact path ='/'>
         <ItemList items={products} />
       </Route>


      {/* the ListPage component will have a Header component within ListPage.js */}
      <Route exact path = '/ListPage'>
      <ListPage />
      </Route>
      
    </>
  );
}

export default App;