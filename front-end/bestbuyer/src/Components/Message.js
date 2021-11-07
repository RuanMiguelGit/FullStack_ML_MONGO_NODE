import React from 'react';
import PropTypes from 'prop-types';

function Message({ registrationError, loading }) {
  if(loading) return <p className='charging'>....Carregando</p>
  return (
    <div>
      {''}
      {registrationError !== undefined ? (
        <p className="message">{registrationError.message} </p>
      ) : (
        ''
      )}
    </div>
  );
}

export default Message;

Message.propTypes = {
  registrationError: PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired
};
