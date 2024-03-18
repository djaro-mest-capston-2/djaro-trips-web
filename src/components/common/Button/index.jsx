import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  onClick,
  type,
  variant,
  className,
  avatar,
  borderRadius,
  ...rest
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white";
      case "secondary":
        return "bg-secondary text-black";
      case "white":
        return "bg-white text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getBaseClasses = () =>
    `px-4 py-2 rounded-md transition duration-300 ${avatar ? "flex items-center space-x-2" : ""}`;

  const buttonClasses = `${getBaseClasses()} ${getVariantClasses()} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      style={{ borderRadius }}
      {...rest}
    >
      {avatar && (
        <img
          src={avatar}
          alt="Avatar"
          className="w-6 h-6 rounded-full"
        />
      )}
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
  avatar: PropTypes.string, // Accepts avatar as props
  borderRadius: PropTypes.string, // Accepts border-radius as props
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  variant: "primary",
  className: "",
  borderRadius: "0", // Default border-radius is set to 0
};

export default Button;
