import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';
import '../Styles/ProductCard.css';

function ProductsCard() {
  const { products, filtered, filtering } = useContext(appContext)

  return (
    <div className='products'>
      {filtering ? filtered.map(item =>  {
          return <div className='product-holder' key={item.name}>
          <h3 className='product-name'> {item.description}</h3> 
          <img src={item.image} alt={item.name} className='product-picture' /> 
          <div className='product-category'> Categoria : {item.category}</div>
          <div className='product-price'>$: {item.price}</div>
          <div className={item.style}>Fonte : {item.fonte} {item.currency}</div>
          </div>
        })
      : products.map(item =>  {
        return <div className='product-holder' key={item.name}>
        <h3 className='product-name'> {item.description}</h3> 
        <img src={item.image} alt={item.name} className='product-picture' /> 
        <div className='product-category'> Categoria : {item.category}</div>
        <div className='product-price'>{item.price} {item.currency} </div>
        <div className={item.style}>Fonte : {item.fonte}</div>
        </div>
      }) }
    </div>
  );
}

export default ProductsCard;
