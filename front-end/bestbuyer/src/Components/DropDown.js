/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DropDown({
  selectClass,
  value,
  change,
  state,
  selectedClass
}) {
  const [loading] = useState(false);

  return (
    <select
      className={ selectClass }
      value={value}
      onChange={(e) => change(e.target.value)}
    >
     <option key={''} value={''} className={selectedClass} >
       {''}
     </option>
      {loading ? (
        <p>Carregando</p>
      ) : (
        state
          .map((item) => (
            <option key={item} value={item} className={selectedClass} >
              {' '}
              {item}{' '}
            </option>
          ))
      )}
    </select>
  );
}

DropDown.propTypes = {
  selectClass: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  state: PropTypes.array.isRequired,
};
