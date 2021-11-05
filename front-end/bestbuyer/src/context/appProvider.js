import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';
import  { getDataFromMercadoLivre, getProductsFromMercadoLivre, FormatMercadoLivreProducts } from '../Clients/mercadoLivre'

function Provider({ children }) {
  const [query, setQuery] = useState('');
  const [dropDownSource, setDropDownSource] = useState('');
  const [dropDownProduct, setDropDownProduct] = useState('');
  const [mercadoLivre, setMercadoLivre] = useState([])
  const [mercadoLivreProduct, setMercadoLivreProduct] = useState([])
  const [products, setProducts] = useState([])
  const [filtering , setFiltering] = useState(false)
  const [filtered, setFiltered] = useState([])


  useEffect(() => {
    getDataFromMercadoLivre(dropDownSource)
    .then(setMercadoLivre)
  }, [dropDownSource]);

  useEffect(() => {
    getProductsFromMercadoLivre(dropDownProduct, mercadoLivre, dropDownSource)
    .then(res => setMercadoLivreProduct(res.results))
  }, [dropDownProduct]);

  useEffect(() => {
    FormatMercadoLivreProducts(mercadoLivreProduct, dropDownProduct, dropDownSource)
    .then(res => setProducts(res))
  }, [mercadoLivreProduct]);

  
  
  const contextValue = {
    query,
    setQuery,
    dropDownSource,
    setDropDownSource,
    dropDownProduct,
    setDropDownProduct,
    mercadoLivre,
    products,
    setProducts,
    filtering,
    setFiltering,
    filtered,
    setFiltered
  };

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
