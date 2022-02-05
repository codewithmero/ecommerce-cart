import React from 'react';
import CartItem from './CartItem/CartItem';
import './style.css';

function Cart({ cartItems, onIncrementItem, onDecrementItem, onDeleteItem }) {
  
  if(cartItems.length === 0)
    return (
      <div className="cart-container no-item">
        <p>No items inside the cart!</p>
      </div>
    );

  return (
    <div className="cart-container">
      <div className="cart-listing">
        {cartItems.map(item => 
          <CartItem 
            key={item.id} 
            item={item}
            onIncrementItem={onIncrementItem}
            onDecrementItem={onDecrementItem}
            onDeleteItem={onDeleteItem} 
          />)}
      </div>
    </div>
  );
}

export default Cart;