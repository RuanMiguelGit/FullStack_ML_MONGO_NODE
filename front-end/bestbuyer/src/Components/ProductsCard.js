import React, { useContext } from 'react';
import ProductsTemplate from './ProductsTemplate';
import appContext from '../context/appContext';
import '../Styles/ProductCard.css';

function ProductsCard() {
  const { products, filtered, filtering } = useContext(appContext);

  return (
    <div className="products">
      {filtering ? (
        <ProductsTemplate state={filtered} />
      ) : (
        <ProductsTemplate state={products} />
      )}
    </div>
  );
}

export default ProductsCard;
