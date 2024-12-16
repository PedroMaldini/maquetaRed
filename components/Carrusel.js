import React from "react";

const Carrusel = () => {
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
  ];

  return (
    <div className="mt-8 mb-8  mx-auto">
      {/* Carrusel principal */}
      <div className="carousel w-full rounded-xl overflow-hidden shadow-lg relative">
        {images.map((src, index) => (
          <div
            id={`slide${index}`}
            key={index}
            className="carousel-item w-full"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-96 object-cover transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Miniaturas con navegación */}
      <div className="flex justify-center mt-6 space-x-4">
        {images.map((src, index) => (
          <a
            key={index}
            href={`#slide${index}`}
            className="w-20 h-20 border-2 border-gray-300 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:border-primary focus:ring-4 focus:ring-primary focus:ring-opacity-50"
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
