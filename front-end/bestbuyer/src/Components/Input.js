import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, name, value, change, inputclass }) {
  return (
    <div>
      <input
        type={type}
        placeholder={name}
        value={value}
        onChange={(e) => change(e.target.value)}
        className={inputclass}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputclass: PropTypes.string.isRequired,
};
