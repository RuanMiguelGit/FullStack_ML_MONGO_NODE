import React from 'react';
import PropTypes from 'prop-types';

function Header( { Style } ) {
  return (
    <div className={ Style }>
    </div>
  );
}

export default Header;

Header.propTypes = {
    Style: PropTypes.string.isRequired,
  };
