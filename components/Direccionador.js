const Direccionador = ({ partes }) => {
  return (
    <div className="border-b border-gray-300 pb-5 mt-6">
      <ul className="flex justify-center space-x-10">
        {partes.map((parte, index) => (
          <a key={index} href={`#${parte}`} className="text-gray-700">
            <li className="p-2 hover:shadow-lg hover:bg-gray-100 rounded-lg transition duration-300">
              {parte}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Direccionador;
