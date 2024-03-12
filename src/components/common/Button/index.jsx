import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  onClick,
  type,
  variant,
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white";
      case "secondary":
        return "bg-secondary text-black";
      // Add more variants as needed
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getBaseClasses = () =>
    "px-4 py-2 rounded-md transition duration-300";

  const buttonClasses = `${getBaseClasses()} ${getVariantClasses()} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    "button",
    "submit",
    "reset",
  ]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
  ]),
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  variant: "primary",
  className: "",
};

export default Button;
