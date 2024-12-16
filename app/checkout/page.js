"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useState } from "react";

export default function Checkout() {
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const calculateDuration = () => {
    if (inDate && outDate) {
      const inDateObj = new Date(inDate);
      const outDateObj = new Date(outDate);
      const duration = (outDateObj - inDateObj) / (1000 * 60 * 60 * 24);
      return duration > 0 ? duration : 0;
    }
    return 0;
  };

  return (
    <>
      <Header />
      <main>
        <a
          href="/detalle"
          className=" flex link link-hover text-sm  max-w-[90%] mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          Volver a habitaciones
        </a>
        <section className="flex max-w-[90%] mx-auto">
          <div className="mx-auto py-10">
            <div className="card bg-base-100 shadow-xl p-8 mb-6">
              <h3 className="card-title">Nombre del Hotel</h3>
              <p>
                <strong>Dirección:</strong> Dirección del Hotel
              </p>
              <p>
                <strong>Régimen:</strong> Régimen del Hotel
              </p>
              <p>
                <strong>Método de Pago:</strong> Método de Pago
              </p>
              <img
                src="images/1.jpeg"
                alt="Hotel"
                className="w-full h-auto object-cover mt-4 max-w-[200px] mx-auto rounded-lg shadow-xl border border-gray-300"
              />
              <p className="mt-4 mx-auto">
                <strong>Tipo de Habitación:</strong> Tipo de Habitación Elegida
              </p>
            </div>
            <div className="card bg-base-100 shadow-xl p-8 mb-6">
              <h3 className="card-title">Datos de reserva</h3>
              <div className="flex">
                <div className="form-control px-4">
                  <label className="label">
                    <span className="label-text">In</span>
                  </label>
                  <p className="">2023-12-01</p>
                </div>
                <div className="form-control px-4">
                  <label className="label">
                    <span className="label-text">Out</span>
                  </label>
                  <p className="">2023-12-05</p>
                </div>
              </div>
              <p className="mt-4">
                <strong>Duración de la estadía:</strong> 4 Noches
              </p>
              <hr className="my-4" />
              <div className="flex">
                <div className="form-control px-4">
                  <label className="label">
                    <span className="label-text">Adulto(s)</span>
                  </label>
                  <p className="">2</p>
                </div>
                <div className="form-control px-4">
                  <label className="label">
                    <span className="label-text">Niño(s)</span>
                  </label>
                  <p className="">1</p>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl p-8 mb-6">
              <h3 className="card-title">Desgloce de tarifa:</h3>
              <p>
                <strong>Precio:</strong> $1000
              </p>
              <p>
                <strong>Suma de Impuestos:</strong> $150
              </p>
              <hr className="my-4" />
              <p>
                <strong>Valor Final:</strong> $1150
              </p>
            </div>
          </div>
          <div className="w-1/2 p-6">
            <div className="card bg-base-100 shadow-xl p-6 mb-4">
              <h3 className="card-title">Adulto número 1 (Principal)</h3>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Apellido</span>
                  </label>
                  <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Tipo de Documento</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option>DNI</option>
                    <option>Pasaporte</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Número de Documento</span>
                  </label>
                  <input type="text" className="input input-bordered w-full" />
                </div>
              </form>
            </div>
            <div className="card bg-base-100 shadow-xl p-6 mb-4">
              <h3 className="card-title">Adulto número 2</h3>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Apellido</span>
                  </label>
                  <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Tipo de Documento</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option>DNI</option>
                    <option>Pasaporte</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Número de Documento</span>
                  </label>
                  <input type="text" className="input input-bordered w-full" />
                </div>
              </form>
            </div>
            <div className="flex justify-end">
              <button
                className="btn btn-primary"
                onClick={() => (window.location.href = "/reservaConfirmada")}
              >
                Confirmar Reserva
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
