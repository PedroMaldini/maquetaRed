import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faUmbrellaBeach,
  faTree,
  faUtensils,
  faShuttleVan,
  faClipboardList,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const icons = {
    Hoteles: faHotel,
    Actividades: faUmbrellaBeach,
    Parques: faTree,
    Gastronomia: faUtensils,
    Traslados: faShuttleVan,
    Reservas: faClipboardList,
    Carrito: faShoppingCart,
  };

  const buttons = [
    "Hoteles",
    "Actividades",
    "Parques",
    "Gastronomia",
    "Traslados",
    "Reservas",
    "Carrito",
  ];

  return (
    <div className="p-8 border-b border-gray-300 w-[90%] mx-auto mb-5">
      <div className="flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-semibold">
            <a href="/home">
              <img src="/images/logo.png" className="pr-10"></img>
            </a>
          </h1>
        </div>

        {/* Botones con iconos a la derecha usando DaisyUI */}
        <div className="hidden md:flex items-center space-x-6">
          {buttons.map((button) => (
            <button
              key={button}
              className="link link-hover btn-sm flex items-center space-x-2 font-semibold"
            >
              <FontAwesomeIcon icon={icons[button]} className="size-6" />
              <span>{button}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
