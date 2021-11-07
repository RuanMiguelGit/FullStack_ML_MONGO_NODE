import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import appContext from '../context/appContext';

export default function DropDown({
  selectClass,
  value,
  change,
  state,
  selectedClass,
}) {

  const { loading } = useContext(appContext)
  
  return (
    <select
      className={selectClass}
      value={value}
      onChange={(e) => change(e.target.value)}
    >
      <option key={''} value={''} className={selectedClass}>
        {''}
      </option>
      {loading ? (
        <Loading />
      ) : (
        state.map((item) => (
          <option key={item} value={item} className={selectedClass}>
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
  selectedClass:PropTypes.string.isRequired
};
