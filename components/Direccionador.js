// components/Direccionador.js
const Direccionador = ({ partes }) => {
  return (
    <div className="border-b border-gray-300 pb-5 mt-6">
      <ul className="flex justify-center space-x-10" key="ulDireccionador">
        {partes.map((parte, index) => (
          <a href={`#${parte}`} className="text-gray-700 hover:text-blue-600">
            <li
              key={index}
              className="btn bg-transparent hover:bg-gray-200 border-none"
            >
              {parte}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Direccionador;
