import React from 'react';
import Loading from './Loading'
import PropTypes from 'prop-types';

function Message( {registrationError, loading} ) {
    if (loading) return <Loading />
  return (
    <div>
        adadadad
    {registrationError !== undefined ? <p className='message'>{registrationError.message} </p>: ''}
    </div>
  );
}  

export default Message;


Message.propTypes = {
    registrationError: PropTypes.string.isRequired,
    loading:PropTypes.string.isRequired
};
  