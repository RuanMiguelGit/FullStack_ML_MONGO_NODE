import React from 'react';
import PropTypes from 'prop-types';
import SearchComponent from './SearchComponent';

function Header( { Style } ) {
  return (
    <div className={ Style }>
      <SearchComponent />
    </div>
  );
}

export default Header;

Header.propTypes = {
    Style: PropTypes.string.isRequired,
  };
