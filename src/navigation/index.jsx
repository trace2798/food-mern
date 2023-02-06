import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../pages/Cart/index";
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Menu from "../pages/Menu/index";
import PaymentSuccess from "../pages/PaymentSuccess/index";
import Register from "../pages/Register/index";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from "../components/Footer";
const Navigation = () => {
  const productsInCart = useSelector(cartProducts);
   return (
     <BrowserRouter>
            <Header cartCount={productsInCart ? productsInCart.length : 0 }/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
            <Footer/>
     </BrowserRouter>
   )
 }
 
 export default Navigation