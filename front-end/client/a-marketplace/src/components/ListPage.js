
import React, {useState, useEffect} from 'react';
import {CardTitle, Card, Input, Button} from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import market  from "./data";
import ItemList from './ItemList';
import OwnersList from './OwnersList';
import axiosWithAuth from './utils/axiosWithAuth'


const ListPage = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get("market")
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error?", error);
            });
    }, []);
    return(
        <div style={{backgroundColor:'#e74c3d'}}>
            <div className='header' style={{display:'flex'}}>
                 <Card style={{width:'25%', marginLeft:'50px', borderRadius:'50%', backgroundColor:'green'}}>
                    <div
                        style={{
                        height: "100px",
                        width: "25%",
                        border: "1px dashed black",
                        borderRadius:'50%',
                        marginLeft:'100px',
                        marginTop: "50px"}}>
                    </div>
                    <Input type="file" style = {{marginTop:"200px", margin: "15%"}}/>
                </Card>
              
                    <CardTitle style={{marginTop: '230px', marginLeft:'100px'}}><h1>Business Owner: <br/><span style={{ fontFamily:'Monoton'}}>Business<br /> Name<br />  LLC.</span></h1>
                    <OwnersList />
                    </CardTitle>
                    <hr/>
            
            <Link to = '/AddItems'>
             <Button>Add Items</Button>
             </Link>
                <Link to='/DeleteItem'>
                    <Button>Delete Items</Button>
                </Link>
                
            </div>
            <br/>
            <Card>

                <div className="items-list-wrapper">
                    <ItemList items={products} />
                    
                    

                </div>
            </Card>


       
   

            
        </div>

    )
}
export default ListPage;