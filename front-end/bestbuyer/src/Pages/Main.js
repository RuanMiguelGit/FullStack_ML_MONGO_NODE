import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductsCard from '../Components/ProductsCard';
import '../Styles/Main.css';

function Main({ Style }) {
  return (
    <div className="overlay">
      <Header Style="header" />
      <ProductsCard />
      <Footer Style="footer" />
    </div>
  );
}

export default Main;

Main.propTypes = {
  Style: PropTypes.string.isRequired,
};
