import React from 'react';
import Item from './Item/Item';
import './style.css';

function ShowcaseItems({ products, onAddToCart }) {
  return (
    <div className="showcase-container">
      {products.map(product => 
        <Item 
          key={product.id} 
          product={product}
          onAddToCart={onAddToCart} />
      )}
    </div>
  );
}

export default ShowcaseItems;