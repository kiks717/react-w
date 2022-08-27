import {BrowserRouter} from "react-router-dom";
import Explore from "./components/Explore";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Products from "./components/Products";
import { productData } from "./components/Products/data";
import { popularProducts } from "./components/Products/data";
// import Slider from './components/Slider'
import { GlobalStyle } from "./globalStyles";
import SignIn from "./components/SignIn";
import Header from "./pages/Cart/Header";
// import Main from "./pages/Cart/Main";
import Basket from "./pages/Cart/Basket";
import file from './pages/Cart/file'
import { useState } from "react";
// import Modal from "./components/Modal";
function App() {
  const { products } = file;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


   return (
      <BrowserRouter>
      
      <GlobalStyle/>
      <Hero/>
      <Products
      id="products"
       heading="Chose your favourite" 
       data={productData}
       products={products}  
       onAdd={onAdd} 
       onRemove={onRemove}/>
      <Feature/>
      <Explore
        heading="Sweet Treats for YOU"
         id="explore"
        data={popularProducts} 
        products={products} 
        onAdd={onAdd} 
        onRemove={onRemove} />
      {/* <Slider/> */}
      <SignIn/>
      <Footer/>
      {/* <Header 
        countCartItems={cartItems.length}/> */}
         {/* <Main products={products}  onAdd={onAdd}></Main> */}
         {/* main is responsible to render products */}
      <Basket
        cartItems={cartItems}
        onAdd={onAdd} 
        onRemove={onRemove}/>
            {/* <Basket showModal={showModal} setShowModal={setShowModal}/> */}

      </BrowserRouter>
  );
}

export default App;
