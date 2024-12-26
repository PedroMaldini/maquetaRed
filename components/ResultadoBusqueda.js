const ResultadoBusqueda = () => {
  const articulos = [
    {
      nombre: "Rio Buzios Beach Hotel",
      direccion: "Praia de João Fernandes Búzios 28950-000",
      disponibilidad: "Disponible",
      precio: "$200",
      imagen: "./images/1.jpeg",
    },
    {
      nombre: "Hotel Pousada da Praia",
      direccion: "Rua das Pedras 111, Búzios",
      disponibilidad: "Disponible",
      precio: "$150",
      imagen: "./images/2.jpeg",
    },
    {
      nombre: "Pousada do Sol",
      direccion: "Rua dos Oceanos 22, Búzios",
      disponibilidad: "Disponible",
      precio: "$180",
      imagen: "./images/3.jpeg",
    },
    {
      nombre: "Villa Serena",
      direccion: "Praia Rasa 45, Búzios",
      disponibilidad: "Disponible",
      precio: "$220",
      imagen: "./images/4.jpeg",
    },
    {
      nombre: "Hotel Atlántico",
      direccion: "Av. Geribá 10, Búzios",
      disponibilidad: "Disponible",
      precio: "$350",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Búzios Beach Resort",
      direccion: "Praia de Tucuns, Búzios",
      disponibilidad: "Disponible",
      precio: "$400",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Casa Blanca Inn",
      direccion: "Rua das Pedras 88, Búzios",
      disponibilidad: "Agotado",
      precio: "$150",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Sol y Mar Lodge",
      direccion: "Rua das Gaivotas 33, Búzios",
      disponibilidad: "Disponible",
      precio: "$200",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Ocean View Boutique",
      direccion: "Praia João Fernandes, Búzios",
      disponibilidad: "Disponible",
      precio: "$270",
      imagen: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <section className="pr-20 mb-5">
        <h2 className="text-left text-2xl font-semibold mb-2">
          Buzios (Brasil)
        </h2>
        <p className="mb-4">
          Precios para 1 habitación del 26/12/2024 al 29/12/2024 | 3 noches | 2
          adultos
        </p>
        <div className="space-y-6 border-black">
          {articulos.map((articulo, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg p-4 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 "
            >
              <figure className="w-full lg:w-80">
                <a href="/detalle">
                  <img
                    src={articulo.imagen}
                    alt={articulo.nombre}
                    className=" max-w-50 h-auto object-cover border-black"
                  />
                </a>
              </figure>
              <div className="flex flex-col lg:ml-6 w-full border-black">
                <h3 className="text-xl font-bold">
                  🏨 Hotel: {articulo.nombre}
                </h3>
                <p className="text-sm text-gray-600">
                  🗺️ Dirección: {articulo.direccion}
                </p>
                <div>
                  📍
                  <a href="https://maps.google.com" className="link">
                    Ver mapa
                  </a>
                </div>
                <div>
                  <p className="text-sm pt-2">🥞 Régimen: Desayuno</p>
                </div>
                <div>
                  <p className="text-sm pt-1">✅ Estado: Disponible</p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end w-full lg:w-auto">
                <span className="text-lg font-semibold mb-2">
                  {articulo.precio}
                </span>
                <a href="/detalle">
                  <button className="btn btn-primary btn-sm">
                    Habitaciones
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ResultadoBusqueda;
