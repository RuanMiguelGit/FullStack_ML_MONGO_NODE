import React, { useContext } from 'react';
import ProductsTemplate from './ProductsTemplate';
import appContext from '../context/appContext';
import Loading from './Loading';
import '../Styles/ProductCard.css';

function ProductsCard() {
  const { products, filtered, filtering, loading } = useContext(appContext);
  console.log(loading)
  if(loading) return <Loading />
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
