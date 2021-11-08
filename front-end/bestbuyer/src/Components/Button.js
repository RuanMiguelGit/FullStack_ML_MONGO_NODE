import React from 'react';
import PropTypes from 'prop-types';

function Button({ Title, Style, onClick }) {
  return (
    <div>
      <button className={Style} onClick={onClick}>
        {Title}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  Title: PropTypes.string.isRequired,
  Style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
