import React, { useContext, useState } from 'react';
import appContext from '../context/appContext';

function ProductsCard() {
  const { products } = useContext(appContext)
  const [loading, setLoading] = useState(false)
  return (
    <div>
      {loading ? <p> Carregando</p> : 
        products.map(item =>  {
          return <div>
          <li> {item.description}</li> 
          <img src={item.image} /> 
          <li> {item.cateory}</li>
          <li>{item.price}</li>
          <li>{item.fonte}</li>
          </div>
        })
      }


      {console.log(products)}
    </div>
  );
}

export default ProductsCard;
