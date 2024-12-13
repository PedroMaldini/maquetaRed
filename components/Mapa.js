import React from "react";

const Mapa = () => {
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-lg rounded-xl overflow-hidden p-4 mt-20 mx-auto">
      <h2 className="card-title text-xl font-semibold mb-4">Ver en el mapa</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58865.64929346481!2d-41.959563652487056!3d-22.761555515294404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96555567e32337%3A0x40218e7a6ff28786!2zQXJtYcOnw6NvIGRvcyBCw7p6aW9zLCBCw7p6aW9zIC0gUkosIEJyYXNpbA!5e0!3m2!1spt-BR!2sar!4v1734102932110!5m2!1spt-BR!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Mapa;
