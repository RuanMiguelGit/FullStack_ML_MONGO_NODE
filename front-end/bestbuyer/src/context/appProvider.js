import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';
import  { getDataFromMercadoLivre, getProductsFromMercadoLivre } from '../Clients/mercadoLivre'

function Provider({ children }) {
  const [query, setQuery] = useState('');
  const [dropDownSource, setDropDownSource] = useState('');
  const [dropDownProduct, setDropDownProduct] = useState('');
  const [mercadoLivre, setMercadoLivre] = useState([])
  const [product, setProduct] = useState([])

  useEffect(() => {
    getDataFromMercadoLivre()
    .then(setMercadoLivre)
  }, []);

  useEffect(() => {
    getProductsFromMercadoLivre(dropDownProduct, mercadoLivre)
    .then(setProduct)
  }, [dropDownProduct]);



  
  const contextValue = {
    query,
    setQuery,
    dropDownSource,
    setDropDownSource,
    dropDownProduct,
    setDropDownProduct,
    mercadoLivre
  };

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
