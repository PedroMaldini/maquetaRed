const Direccionador = () => {
  const partes = ["Overview", "Disponibilidad", "Mapa"];

  return (
    <div className="border-b border-gray-300 pb-5 mt-6">
      <ul className="flex justify-center space-x-10">
        {partes.map((parte, index) => (
          <li
            key={index}
            className="btn bg-transparent hover:bg-gray-200 border-none"
          >
            <a href={`#${parte}`} className="text-gray-700 hover:text-blue-600">
              {parte}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Direccionador;
