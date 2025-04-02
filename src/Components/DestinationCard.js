import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{destination.name}</h2>
        <p className="text-gray-600">{destination.location}</p>
        <p className="text-gray-700 mt-2">{destination.description}</p>
        <p className="text-lg font-bold mt-3">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
