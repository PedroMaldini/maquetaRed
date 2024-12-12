const Header = () => {
  let xd = "i";
  return (
    <div className="p-8  border-b border-gray-300 w-[90%] mx-auto  mb-5">
      <div className="flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center space-x-3">
          {/* Asegúrate de tener un logo en la carpeta public */}
          <h1 className="text-2xl font-semibold">Logo de Red</h1>
        </div>

        {/* Botones con iconos a la derecha usando DaisyUI */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            `🏨 Hoteles`,
            `🏖️ Actividades`,
            `🎢 Parques`,
            `🍔 Gastronomia`,
            `🚐 Traslados`,
            `🗒️ Mis Reservas`,
            `🛒 Carrito`,
          ].map((button) => (
            <button
              key={button} // Usamos el texto del botón como la clave única
              className="link link-hover btn-sm flex items-center space-x-2 font-semibold"
            >
              <span>{button}</span>
            </button>
          ))}
        </div>

        {/* Menú en móvil */}
        <div className="md:hidden">
          <button className="btn btn-outline btn-sm">Menú</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
