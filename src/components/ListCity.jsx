import React from "react";

const ListCity = () => {
  const cities = [
    {
      id: 1,
      title: "Jakarta",
    },
    {
      id: 2,
      title: "Bandung",
    },
    {
      id: 3,
      title: "Semarang",
    },
    {
      id: 4,
      title: "Surabaya",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-med
            "
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default ListCity;
