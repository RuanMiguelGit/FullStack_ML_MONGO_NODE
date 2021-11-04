import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';
import '../Styles/ProductCard.css';

function ProductsCard() {
  const { products } = useContext(appContext)
  const [loading, setLoading] = useState(false)
  return (
    <div className='products'>
      {loading ? <p> Carregando</p> : 
        products.map(item =>  {
          return <div className='product-holder'>
          <h3 className='product-name'> {item.description}</h3> 
          <img src={item.image} alt={item.name} className='product-picture' /> 
          <div className='product-category'> Categoria : {item.category}</div>
          <div className='product-price'>R$ {item.price}</div>
          <div className='product-source'>Fonte : {item.fonte}</div>
          </div>
        })
      }


      {console.log(products)}
    </div>
  );
}

export default ProductsCard;
