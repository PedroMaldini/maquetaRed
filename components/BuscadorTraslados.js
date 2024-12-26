"use client";

import { useState } from "react";

export default function BuscadorTraslados() {
  const [direction, setDirection] = useState("desde");
  const [addReturn, setAddReturn] = useState(false);

  return (
    <>
      <div className="max-w-[75%] mx-auto">
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="card-body">
            <div className="border-b border-gray-300 pb-4 mb-6">
              <h2 className="card-title text-center text-xl font-semibold">
                Búsqueda de Traslados
              </h2>
            </div>

            <form
              className="flex flex-wrap justify-between items-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/busqueda";
              }}
            >
              {/* Dirección */}
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">Dirección</span>
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="direction"
                      value="desde"
                      checked={direction === "desde"}
                      onChange={() => setDirection("desde")}
                      className="radio radio-primary"
                    />
                    <span className="ml-2">Desde el aeropuerto</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="direction"
                      value="hacia"
                      checked={direction === "hacia"}
                      onChange={() => setDirection("hacia")}
                      className="radio radio-primary"
                    />
                    <span className="ml-2">Hacia el aeropuerto</span>
                  </label>
                </div>
              </div>

              {/* Desde y Hasta */}
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">
                    {direction === "desde" ? "Desde" : "Hasta"}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder={
                    direction === "desde"
                      ? "Ej: Aeropuerto Ezeiza"
                      : "Ej: Hotel"
                  }
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">
                    {direction === "desde" ? "Hasta" : "Desde"}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder={
                    direction === "desde"
                      ? "Ej: Hotel"
                      : "Ej: Aeropuerto Ezeiza"
                  }
                  className="input input-bordered w-full"
                />
              </div>

              {/* Fecha y Hora del Vuelo */}
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">Fecha del Vuelo</span>
                </label>
                <input type="date" className="input input-bordered w-full" />
              </div>
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">Hora del Vuelo</span>
                </label>
                <input type="time" className="input input-bordered w-full" />
              </div>

              {/* Cantidad de Pasajeros */}
              <div className="form-control w-full sm:w-1/4 mb-4">
                <label className="label">
                  <span className="label-text">Cantidad de Pasajeros</span>
                </label>
                <input
                  type="number"
                  min="1"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Agregar Regreso */}
              <div className="form-control w-full sm:w-1/4 mb-4 flex items-center">
                <label className="label">
                  <span className="label-text">Agregar Regreso</span>
                </label>
                <input
                  type="checkbox"
                  className="toggle toggle-primary ml-2"
                  checked={addReturn}
                  onChange={() => setAddReturn(!addReturn)}
                />
              </div>

              {addReturn && (
                <>
                  <div className="form-control w-full sm:w-1/4 mb-4">
                    <label className="label">
                      <span className="label-text">Fecha de Regreso</span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full sm:w-1/4 mb-4">
                    <label className="label">
                      <span className="label-text">Hora de Regreso</span>
                    </label>
                    <input
                      type="time"
                      className="input input-bordered w-full"
                    />
                  </div>
                </>
              )}

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
    </>
  );
}
