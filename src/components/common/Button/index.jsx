import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  backgroundColor,
  textColor,
  padding,
  margin,
  border,
  className,
  children,
}) => {
  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
        padding,
        margin,
        border,
      }}
      className={className}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
