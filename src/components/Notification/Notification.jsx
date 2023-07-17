import React from 'react';
import PropTypes from 'prop-types';

const messageStyles = {
  fontSize: '20px',
  fontWeight: '600',
};

const Notification = ({ message }) => {
  return <p style={messageStyles}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
