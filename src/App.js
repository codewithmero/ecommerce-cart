import React, { useState, useEffect } from 'react';
import Items from './api/Items';
import { Navbar, ShowcaseItems, Cart } from './components';
import './App.css';

function App(props) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(Items);
  }, []);

  const handleAddToCart = (item) => {
    const isItemAlreadyPresent = cartItems.filter(i => i.id === item.id);

    if(isItemAlreadyPresent.length === 1)
      return;    
  
    let newItem = {...item, count: 1};
    let arrayOfItems = [...cartItems, newItem];
    setCartItems(arrayOfItems);
  }

  const handleIncrement = id => {
    const newCartItems = cartItems.map(item => {
      if(item.id === id) {
        item.count += 1;
      }
      return item;
    })

    setCartItems(newCartItems);
  };

  const handleDecrement = id => {
    const newCartItems = cartItems.map(item => {
      if(item.id === id && item.count > 1) {
        item.count -= 1;
      }
      return item;
    })

    setCartItems(newCartItems);
  }

  const handleDelete = id => {
    const newCartItems = cartItems.filter(i => i.id !== id);
    setCartItems(newCartItems);
  }

  return (
    <div className="container">
      <Navbar itemsInCart={cartItems.filter(i => i.count > 0).length} />
      
      <main className="main-body"> 
        <ShowcaseItems 
          products={products}
          onAddToCart={handleAddToCart} />

        <Cart 
          cartItems={cartItems}
          onIncrementItem={handleIncrement}
          onDecrementItem={handleDecrement}
          onDeleteItem={handleDelete} />
      </main>
    </div>
  );
}

export default App;