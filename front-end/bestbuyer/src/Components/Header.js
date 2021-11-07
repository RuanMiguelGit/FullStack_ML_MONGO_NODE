import React from 'react';
import PropTypes from 'prop-types';
import SearchComponent from './SearchComponent';
import SourceMenu from './SourceMenu';
import ProductMenu from './ProductsMenu';
import Logout from './Logout';

function Header({ Style }) {
  return (
    <div className={ Style }>
      <SearchComponent />
      <Logout />
      <SourceMenu />
      <ProductMenu />
    </div>
  );
}

export default Header;

Header.propTypes = {
  Style: PropTypes.string.isRequired,
};
