
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

const CartTotal=({data})=>{
    let total_price=0

    return(<>
         <div className="col-12 col-sm-4 p-3 proceed form">
        <div className="row m-0">
        {data.map((item,idx)=>{
                let current_item_price=localStorage.getItem('product_id')
                let current_id_=JSON.parse(current_item_price)
                // remove duplicates
                let p_id_=current_id_.filter((item,
                    index) => current_id_.indexOf(item) === index)
                
                // check if value exists in array
                if(~p_id_.indexOf(item.id)){
                    total_price=total_price+parseFloat(item.price)

                }
                
            })}
          <div className="col-sm-8 p-0">
            <h6>Subtotal</h6>
          </div>
          <div className="col-sm-4 p-0">
            <p id="subtotal">$ <small className='price_'>{total_price}</small></p>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-sm-8 p-0 ">
            <h6>Tax</h6>
          </div>
          <div className="col-sm-4 p-0">
            <p id="tax">$0</p>
          </div>
        </div>
        <hr />
        <div className="row mx-0 mb-2">
          <div className="col-sm-8 p-0 d-inline">
            <h5>Total</h5>
          </div>
          <div className="col-sm-4 p-0">
            <p id="total">$ <small className='totalprice'>{total_price}</small></p>
          </div>
        </div>
        <Button variant="contained">Checkout</Button>
      </div>
    </>)
}

export default CartTotal