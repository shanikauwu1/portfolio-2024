import React from "react";

// Card component
const Card = ({ image, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-56 object-cover" src={image} alt="Card" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 py-2 px-4 bg-green-800 text-white rounded hover:bg-black">
        Read More
      </button>
    </div>
  </div>
);

// Card Grid component
const CardGrid = () => {
  const cardsData = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Movie Database",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Job Searching App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "React portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      id: 4,
      image: "https://via.placeholder.com/300",
      title: "React portfolio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 p-4">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
