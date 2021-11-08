import React from 'react';
import logo from '../Images/loading.gif'
import '../Styles/Loading.css'

function Loading() {
  return (
    <div>
      <img className='loading' src={logo} alt='loading' />
    </div>
  );
}

export default Loading;

