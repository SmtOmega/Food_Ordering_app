
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Meals from './components/meals/Meals';
import CartProvider from './store/cart-context';

function App() {

  const [showIsCart, setShowIsCart] = useState(false)

  const showCartHandler = () => {
    setShowIsCart(true)
  }
  const closeCartHandler = () => {
    setShowIsCart(false)
  }
  return (
    <CartProvider>
      {showIsCart && <Cart onClose={closeCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
