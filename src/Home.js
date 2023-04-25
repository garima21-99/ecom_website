import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import Homepage from './Homepage';
import Productcard from './card'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import img from './img/abstract-background-with-waves-glow-vector-illustration-light-background_1182-2531.avif'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home=()=>{
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
    const navigate = useNavigate();
    const [cart, setCart] = useState(false);
    const navigateProduct = (id) => {
        // 👇️ navigate to /
        navigate('/'+id);
      };



    return(
        
        <>
        <Homepage />
        <h1 className='text-center p-2'>Shop ALL</h1>
        <Grid
            container
            spacing={{ xs: 2, sm:4 ,md: 4 }} columns={{ xs: 8, sm: 12, md: 20 }}
            bac
            id='products_container'
            alignItems="center"
            justify="center"
            style={{ backgroundImage:`url(${img})`,backgroundRepeat: "no-repeat",backgroundSize:'100% 100%'}}>
   

    {data.map((item, index) => (
    <Grid item xs={2} sm={4} md={4} key={index} className='products'>
    <Item>
    <Productcard image={item.image} price={item.price}  title={item.title}  id={item.id}   />
    </Item>
    </Grid>
    ))}
        
        </Grid>
        </>
    )
}

export default Home