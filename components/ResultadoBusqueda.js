const ResultadoBusqueda = () => {
  const articulos = [
    {
      nombre: "Rio Buzios Beach Hotel",
      direccion: "Praia de João Fernandes Búzios 28950-000",
      tipoHabitacion: "Standard Vista Jardín OZ",
      desayuno: "Desayuno",
      disponibilidad: "Disponible",
      prepago: "Prepago (11-12-2024)",
      politicaCancelacion: "Políticas de cancelación",
      precio: "$200",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Hotel Pousada da Praia",
      direccion: "Rua das Pedras 111, Búzios",
      tipoHabitacion: "Deluxe Vista Mar",
      desayuno: "Desayuno",
      disponibilidad: "Disponible",
      prepago: "Prepago (15-12-2024)",
      politicaCancelacion: "Políticas de cancelación",
      precio: "$150",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Pousada do Sol",
      direccion: "Rua dos Oceanos 22, Búzios",
      tipoHabitacion: "Superior Frente al Mar",
      desayuno: "Desayuno",
      disponibilidad: "Disponible",
      prepago: "Prepago (18-12-2024)",
      politicaCancelacion: "Políticas de cancelación",
      precio: "$180",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Villa Serena",
      direccion: "Praia Rasa 45, Búzios",
      tipoHabitacion: "Habitación Deluxe",
      desayuno: "Incluido",
      disponibilidad: "Disponible",
      prepago: "Prepago (15-12-2024)",
      politicaCancelacion: "Sin devolución",
      precio: "$220",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Hotel Atlántico",
      direccion: "Av. Geribá 10, Búzios",
      tipoHabitacion: "Suite Presidencial",
      desayuno: "Buffet",
      disponibilidad: "Disponible",
      prepago: "Prepago (20-12-2024)",
      politicaCancelacion: "Flexible",
      precio: "$350",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Búzios Beach Resort",
      direccion: "Praia de Tucuns, Búzios",
      tipoHabitacion: "Bungalow Familiar",
      desayuno: "Incluido",
      disponibilidad: "Disponible",
      prepago: "Prepago (25-12-2024)",
      politicaCancelacion: "Sin devolución",
      precio: "$400",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Casa Blanca Inn",
      direccion: "Rua das Pedras 88, Búzios",
      tipoHabitacion: "Habitación Estándar",
      desayuno: "Continental",
      disponibilidad: "Agotado",
      prepago: "N/A",
      politicaCancelacion: "Sin devolución",
      precio: "$150",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Sol y Mar Lodge",
      direccion: "Rua das Gaivotas 33, Búzios",
      tipoHabitacion: "Habitación con Balcón",
      desayuno: "Incluido",
      disponibilidad: "Disponible",
      prepago: "Prepago (22-12-2024)",
      politicaCancelacion: "Moderada",
      precio: "$200",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Ocean View Boutique",
      direccion: "Praia João Fernandes, Búzios",
      tipoHabitacion: "Habitación Premium",
      desayuno: "Buffet",
      disponibilidad: "Disponible",
      prepago: "Prepago (18-12-2024)",
      politicaCancelacion: "Estricto",
      precio: "$270",
      imagen: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="pr-20 mb-5">
      <h2 className=" text-left text-2xl font-semibold  mb-2 ">
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
            className="card bg-base-100 shadow-lg p-4 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 w-full"
          >
            <figure className="w-full lg:w-80 border-black">
              <img
                src={articulo.imagen}
                alt={articulo.nombre}
                className="w-full h-auto object-cover border-black"
              />
            </figure>
            <div className="flex flex-col lg:ml-6 w-full border-black">
              <h3 className="text-xl font-bold">🏨 Hotel: {articulo.nombre}</h3>
              <p className="text-sm text-gray-600">
                🗺️ Dirección: {articulo.direccion}
              </p>
              <div>
                📍
                <a className="link">Ver mapa</a>
              </div>
              <p className="text-sm">
                🛌 Habitación: {articulo.tipoHabitacion}
              </p>
              <p className="text-sm">🥞 Régimen: {articulo.desayuno}</p>
              <p className="text-sm">✅ Estado: {articulo.disponibilidad}</p>
              <p className="text-sm">ℹ️ Pago: {articulo.prepago}</p>
              <p className="text-sm">✍🏻{articulo.politicaCancelacion}</p>
            </div>

            <div className="flex flex-col items-end justify-end w-full lg:w-auto">
              <span className="text-lg font-semibold mb-2">
                {articulo.precio}
              </span>
              <a href="/detalle">
                <button className="btn btn-primary btn-sm">Detalle</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultadoBusqueda;
