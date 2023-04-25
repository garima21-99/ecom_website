import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { useState ,useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import CartTotal from './CartTotal';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });



const  Cart=()=>{
    const [data, setData] = useState([])
    const [quantity, setQuantity] = useState(0)
    const API = 'https://fakestoreapi.com/products';
    const fetchData = () => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          setData(res)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    let a= localStorage.getItem('product_id')
    let b=JSON.parse(a)
    if (b==null || b.length==0){
        return <h1>No items in the cart</h1>
    }
    else{let p_id=b.filter((item,
        index) => b.indexOf(item) === index)
    return(<>
        
        <main id="cart" >
  <h1>Your Cart</h1>
  <div className="container-fluid">
  <CartTotal data ={data} />

    <div className="row align-items-start mt-3">

    {data.map((item,idx)=>{
            if(~p_id.indexOf(item.id)){
                return  <>
      <div className="col-12 col-sm-8 items" key={idx}>
        <div className="cartItem row align-items-start">
          <div className="col-3 mb-2">
            <img className="w-50 h-50" src={item.image} alt="art image" />
          </div>
          <div className="col-5 mb-2">
          <p className="pl-1 mb-0">{item.title}</p>
          {/* <div class="qty_inc_dec">
          <i class="increment h2 mx-4" onclick={() =>{setQuantity(quantity+1)
        document.querySelector('.quantity').value = quantity}}>+</i>
          <input type='text' className='quantity w-50' value={quantity} />
          <i class="decrement h2" onclick={() =>{setQuantity(quantity-1)
                        document.querySelector('.quantity').value = quantity

        
        }}>-</i>
        </div> */}
         
        

          </div>
          <div className="col-2">
            <p id="cartItem1Price">$ {item.price}</p>
            <Button variant="contained" onClick={()=>{
                let current=localStorage.getItem('product_id')
                let current_id=JSON.parse(current)
                let id = current_id.filter(function(e) { return e !== item.id })
                localStorage.setItem('product_id',JSON.stringify(id))
                let remove_item=document.getElementById(item.id)
                let total_price_val=document.querySelector('.price_').textContent

                let x=parseFloat(total_price_val)
                let y=parseFloat(item.price)
                var subtract=x-y
                subtract=subtract.toFixed(2)
                document.querySelector('.price_').innerHTML = subtract
                
                document.querySelector('.totalprice').innerHTML = subtract
                window.location.reload()


              }}>Remove</Button>
          </div>
         
        </div>
       
      </div>
      </>
            }
           
            
        })}

   
    </div>
  </div>
</main>



  
        
           
            
  
    
    </>)}
}


export default Cart