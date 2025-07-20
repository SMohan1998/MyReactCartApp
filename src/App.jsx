import { useEffect, useState } from "react";
import Navbar from './components/Navbar.jsx';
import ProductCard from './components/ProductCard.jsx';
import ModalCart from './components/ModalCart.jsx';
import './App.css';

function App(){
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error =>console.error('Error fetching products:', error));
      
  }, []);

  const addToCart = (product) =>{
    const exists = cartItems.find((item) => item.id === product.id);
    if(exists){
      alert('Item already added to the cart');
    }else{
      setCartItems([...cartItems, product]);
    }
  };
  
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return(
    <div className="App">
      <Navbar cartCount = {cartItems.length} onCartClick={() => setShowModal(true)}/>
        <div className="product-grid">
          {
            products.map(product=>(<ProductCard key={product.id} product={product} addToCart={addToCart}/>))
          }
        </div>
        {showModal && (
          <ModalCart
            cartItems={cartItems}
            onClose={()=>setShowModal(false)}
            removeFromCart={removeFromCart}
          />
        )}
    </div>
  );
}

export default App;