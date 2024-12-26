"use client";

const Buscador = ({ horizontal }) => {
  if (!horizontal) {
    return (
      <div className="mx-20 max-w-sm scale-y-80">
        <div className="card bg-base-100 shadow-lg p-2">
          <div className="card-body">
            <div className="border-b border-gray-300 pb-2">
              <h2 className="card-title text-center">Buscador</h2>
            </div>

            <form>
              {/* Nacionalidad */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-center">
                    Nacionalidad del Pasajero
                  </span>
                </label>
                <select className="select select-bordered">
                  <option>Argentina</option>
                  <option>Extranjero</option>
                </select>
              </div>

              {/* Destino */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Destino</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej: Buenos Aires"
                  className="input input-bordered"
                />
              </div>

              {/* Fechas de entrada y salida */}
              <div className="w-full">
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">IN</span>
                  </label>
                  <input type="date" className="input input-bordered" />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">OUT</span>
                  </label>
                  <input type="date" className="input input-bordered" />
                </div>
              </div>

              {/* Habitaciones */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Habitaciones</span>
                </label>
                <div className="flex space-x-4 mb-2">
                  <input
                    type="number"
                    min="1"
                    className="input input-bordered w-1/3"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/3">
                    <label className="label-text">Adultos</label>
                    <input
                      type="number"
                      min="1"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="label-text">Niños</label>
                    <input
                      type="number"
                      min="0"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Solo disponible */}
              <div className="form-control mb-4 w-1/3">
                <label className="label">
                  <span className="label-text">Solo Disponible</span>
                </label>
                <select className="select select-bordered">
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>

              {/* Botón Buscar */}
              <div className="form-control w-1/3 ml-auto">
                <a href="/busqueda">
                  <button type="submit" className="btn btn-primary w-full">
                    Buscar
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-[75%] mx-auto">
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="card-body">
            <div className="border-b border-gray-300 pb-4 mb-6">
              <h2 className="card-title text-center text-xl font-semibold">
                Búsqueda de Hoteles
              </h2>
            </div>

            <form
              className="flex flex-wrap justify-between items-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/busqueda";
              }}
            >
              {/* Nacionalidad */}
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">Nacionalidad del Pasajero</span>
                </label>
                <select className="select select-bordered w-full">
                  <option>Argentina</option>
                  <option>Extranjero</option>
                </select>
              </div>

              {/* Destino */}
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">Destino</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej: Buenos Aires"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Fechas de entrada y salida */}
              <div className="w-full sm:w-1/4 mb-4 flex gap-4">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">IN</span>
                  </label>
                  <input type="date" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">OUT</span>
                  </label>
                  <input type="date" className="input input-bordered w-full" />
                </div>
              </div>

              {/* Habitaciones */}
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">Habitaciones</span>
                </label>
                <input
                  type="number"
                  min="1"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Adultos y Niños */}
              <div className="w-full sm:w-1/4 mb-4 flex gap-4">
                <div className="form-control w-1/2">
                  <label className="label-text">Adultos</label>
                  <input
                    type="number"
                    min="1"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label-text">Niños</label>
                  <input
                    type="number"
                    min="0"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              {/* Solo disponible */}
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">Solo Disponible</span>
                </label>
                <select className="select select-bordered w-full">
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>

              {/* Botón Buscar */}
              <div className="form-control w-full sm:w-1/4 mb-4 flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Buscador;
