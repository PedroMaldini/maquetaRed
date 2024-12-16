"use client";
import React from "react";

const HabitacionesTable = () => {
  const habitaciones = [
    {
      nombre: "Habitación Superior Vista Mar OZ",
      desayuno: "Desayuno",
      ocupacion: "2 Adultos 0 Menores",
      precio: 1649.41,
      disponibilidad: "Disponible",
      prepago: "Prepago (13-12-2024)",
      cancelacion: "29-10-2024 / 31-12-2024 | BRS 9566.52",
    },
    {
      nombre: "Habitación Deluxe Vista Mar OZ",
      desayuno: "Desayuno",
      ocupacion: "2 Adultos 0 Menores",
      precio: 1979.36,
      disponibilidad: "Disponible",
      prepago: "Prepago (13-12-2024)",
      cancelacion: "29-10-2024 / 31-12-2024 | BRS 11480.22",
    },
    {
      nombre: "Habitación Superior Vista Mar OZ",
      desayuno: "Desayuno",
      ocupacion: "2 Adultos 0 Menores",
      precio: 1649.41,
      disponibilidad: "Disponible",
      prepago: "Prepago (13-12-2024)",
      cancelacion: "29-10-2024 / 31-12-2024 | BRS 9566.52",
    },
    {
      nombre: "Habitación Deluxe Vista Mar OZ",
      desayuno: "Desayuno",
      ocupacion: "2 Adultos 0 Menores",
      precio: 1979.36,
      disponibilidad: "Disponible",
      prepago: "Prepago (13-12-2024)",
      cancelacion: "29-10-2024 / 31-12-2024 | BRS 11480.22",
    },
    {
      nombre: "Habitación Superior Vista Mar OZ",
      desayuno: "Desayuno",
      ocupacion: "2 Adultos 0 Menores",
      precio: 1649.41,
      disponibilidad: "Disponible",
      prepago: "Prepago (13-12-2024)",
      cancelacion: "29-10-2024 / 31-12-2024 | BRS 9566.52",
    },
    {
      nombre: "Habitación Deluxe Vista Mar OZ",
      desayuno: "Desayuno",
      ocupacion: "2 Adultos 0 Menores",
      precio: 1979.36,
      disponibilidad: "Disponible",
      prepago: "Prepago (13-12-2024)",
      cancelacion: "29-10-2024 / 31-12-2024 | BRS 11480.22",
    },
    // Puedes agregar más habitaciones aquí
  ];

  return (
    <div id="Disponibilidad" className="overflow-x-auto p-4 ">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Habitación</th>
            <th>Precio</th>
            <th>Disponibilidad y Políticas</th>
            <th>Carrito</th>
          </tr>
        </thead>
        <tbody>
          {habitaciones.map((habitacion, index) => (
            <tr key={index}>
              {/* Primera columna: Detalles de la habitación */}
              <td className="font-semibold">
                {habitacion.nombre}
                <br />
                {habitacion.desayuno}
                <br />
                {habitacion.ocupacion}
              </td>
              {/* Segunda columna: Precio */}
              <td>USD {habitacion.precio.toFixed(2)}</td>
              {/* Tercera columna: Disponibilidad, Prepago y Políticas de cancelación */}
              <td>
                {habitacion.disponibilidad}
                <br />
                {habitacion.prepago}
                <br />
                {habitacion.cancelacion}
              </td>
              {/* Cuarta columna: Acción */}
              <td>
                <button
                  className="btn btn-primary text-white"
                  disabled={habitacion.disponibilidad !== "Disponible"}
                  onClick={() => (window.location.href = "/checkout")}
                >
                  Agregar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HabitacionesTable;
