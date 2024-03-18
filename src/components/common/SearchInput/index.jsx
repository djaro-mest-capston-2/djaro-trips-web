import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({
  // width,
  placeholder,
  backgroundColor,
  ...rest
}) => {
  // Default values
  // width = width || "80%"; // Default length 80% of screen size
  placeholder = placeholder || "Search...";
  backgroundColor = backgroundColor || "#FFFFFF";

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-${backgroundColor}`}
      {...rest}
    />
  );
};

SearchInput.propTypes = {
  width: PropTypes.string, // Width of the input bar
  placeholder: PropTypes.string, // Placeholder text
  backgroundColor: PropTypes.string, // Background color
};

export default SearchInput;
