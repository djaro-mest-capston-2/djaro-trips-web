import React from "react";
import PropTypes from "prop-types";

const TripList = ({ trips }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {trips.map((trip, index) => (
        <TripDetails key={index} {...trip} />
      ))}
    </div>
  );
};

TripList.propTypes = {
  trips: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      noOfPeople: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      bookButton: PropTypes.node.isRequired,
    })
  ).isRequired,
};

const TripDetails = ({
  picture,
  title,
  startDate,
  endDate,
  noOfPeople,
  amount,
  bookButton,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={picture}
        alt={title}
        className="w-full h-auto mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">
        {title}
      </h2>
      <p className="text-gray">
        {startDate} - {endDate}
      </p>
      <p className="text-gray mb-2">
        Number of people: {noOfPeople}
      </p>
      <div className="flex justify-between">
        <p className="text-gray mb-2">
          Amount: ${amount}
        </p>
        <div className="">{bookButton}</div>
      </div>
    </div>
  );
};

TripDetails.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  noOfPeople: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  bookButton: PropTypes.node.isRequired,
};

export { TripList, TripDetails };
