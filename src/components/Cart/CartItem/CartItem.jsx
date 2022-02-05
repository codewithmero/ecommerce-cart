import React from 'react';
import './style.css';

function CartItem({ item, onIncrementItem, onDecrementItem, onDeleteItem }) {
  return (
    <div className="cart-item">
      <div className="item-quantity">
        <p>{item.count}</p>
      </div>
      <div className="item-settings">
        <i className="fa fa-plus" onClick={() => onIncrementItem(item.id)}></i>
        <h1 className="item-title">{ item.description }</h1>
        <i className="fa fa-minus" onClick={() => onDecrementItem(item.id)}></i>
      </div>
      <div className="item-delete">
        <i className="fa fa-trash" onClick={() => onDeleteItem(item.id)}></i>
      </div>
    </div>
  );
}

export default CartItem;