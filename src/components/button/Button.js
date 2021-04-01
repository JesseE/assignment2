import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ modifier, text, onClick }) => {
  return (
    <button className={`button ${modifier}`} onClick={onClick}>
      <span dangerouslySetInnerHTML={{__html: text}}></span>
    </button>
  );
};

Button.propTypes = {
  modifier: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
