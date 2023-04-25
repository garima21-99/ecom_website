import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Swal from 'sweetalert2'



const ProductDetail=()=>{
    let a=localStorage.getItem('product_id')
    let b=JSON.parse(a)
    if (b==null){
        b=[]
    }
    const [productid, setProductid] = useState([...b]);
    const [data, setData] = useState([])
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
    const params = useParams();
    return(
       <>
{data.map((item,idx)=>{
                    if(item.id==params.id){
                        return  <>

    <div className="container my-5">


<div className="row">

    <div className="col-md-6">
        <img className="img-fluid details-img prod_detail_image" src={item.image} alt="" />
    </div>
    <div className="col-md-6">
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>


            <button name="add_to_cart" type="submit" className="btn btn-primary btn-lg" onClick={() => {
                    let a_=localStorage.getItem('product_id')
                    let b_=JSON.parse(a_)
                    setProductid([...b_,item.id])
                    setProductid([...productid,item.id])
                    Swal.fire({
                    html: '<span style="color:red;">Added to cart successfully</span>',
                   icon: "success",
                    timer: 3000,
                    showConfirmButton:false})

              }}>Add to cart</button>
              {localStorage.setItem('product_id',JSON.stringify(productid))}
        
        <div style={{clear:"both"}}></div>



        <p className="par-title mt-4 mb-1">About this product</p>
        <p className="dummy-description mb-4">
{item.description}
        </p>



    </div>
</div>
</div>

</>
                }

         
            })}

       </>
   
    )
}

export default ProductDetail