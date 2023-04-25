import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from 'sweetalert2'

const ScrollAnimation=()=>{
    var reveals = document.querySelectorAll(".products");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}


export default function Productcard({image, price, title, id, }) {
    
    const navigateProduct = (id) => {
        // 👇️ navigate to /
        navigate('/'+id);
      };
      let a=localStorage.getItem('product_id')
      let b=JSON.parse(a)
      if (b==null){
          b=[]
      }
      const [productid, setProductid] = useState([...b]);
      useEffect(() => {
        window.addEventListener("scroll", ScrollAnimation);
    }, []);
      const navigate = useNavigate();
      return (
        
        <Card sx={{ maxHeight:'700px',':hover': {
                    boxShadow: 20
                  }, }} className='prod'>
        <CardMedia
          component="img"
          width="100%"
          height="500px"
          alt={title}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            $ {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <div className='home_icons'>
        <Button variant="contained" className='icons float-left' onClick={() => navigateProduct(id)}>View More</Button>
        <AddShoppingCartIcon className='icons cart_icon float-right mx-3' onClick={() => {
                    let a_=localStorage.getItem('product_id')
                    let b_=JSON.parse(a_)
                    setProductid([...b_,id])
                    Swal.fire({
                    html: '<span style="color:red;">Added to cart successfully</span>',
                   icon: "success",
                    timer: 3000,
                    showConfirmButton:false})

              }} />
              </div>
        
        
                    {localStorage.setItem('product_id',JSON.stringify(productid))}
        
        </CardActions>
      </Card>
    );
  }