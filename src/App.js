import Aboutus from './Aboutus';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './ProductDetail';
import Cart from './Cart';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />}> </Route>

        <Route path="/aboutus" element={<Aboutus />}> </Route>
        <Route path="/:id" element={<ProductDetail />}> </Route>
        <Route path="/Cart" element={<Cart />}> </Route>


      </Routes>
    </BrowserRouter>

  );
}

export default App;
