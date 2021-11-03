import React from 'react';
import PropTypes from 'prop-types';
import SearchComponent from './SearchComponent';
import SourceMenu from './SourceMenu';

function Header({ Style }) {
  return (
    <div className={ Style }>
      <SearchComponent />
      <SourceMenu />
    </div>
  );
}

export default Header;

Header.propTypes = {
  Style: PropTypes.string.isRequired,
};
