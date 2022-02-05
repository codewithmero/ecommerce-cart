import React from 'react';
import './style.css';

function Item({ product, onAddToCart }) {

  return (
    <div
      className="item-card">
      <img src={require(`../../../api/img/img-${product.id}.jpg`)} alt="" width="180px" height="180px" />
      <div className="item-details">
        <div 
          className="add-to-cart"
          onClick={() => onAddToCart(product)}>
          <i className={"fa fa-heart-o"}></i>
        </div>

        <h3 className="title">{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>
      </div>
    </div>
  );
}

export default Item;