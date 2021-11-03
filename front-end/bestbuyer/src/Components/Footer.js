import React from 'react';
import PropTypes from 'prop-types';

function Footer( { Style } ) {
  return (
    <div className={Style}>
      
    </div>
  );
}

export default Footer;

Footer.propTypes = {
    Style: PropTypes.string.isRequired,
  };
