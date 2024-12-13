import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Direccionador from "@/components/Direccionador";
import Carrusel from "@/components/Carrusel";
import Mapa from "@/components/Mapa";
import TablaHabitaciones from "@/components/TablaHabitaciones";

export default function Detalle() {
  const partes = ["Overview", "Disponibilidad", "Mapa"]; // Definición del array

  return (
    <>
      <Header />
      <main>
        <section className="max-w-[80%] mx-auto">
          <Direccionador partes={partes} />
          {/* Usamos el componente y pasamos la prop partes */}
          <div className="my-8">
            <h1 id="Overview" className="text-2xl">
              Rio Buzios Boutique Hotel
            </h1>
            <p className="opacity-80 text-start my-2 ">
              📍Praia de Joao Fernandes Búzios 28950-000
            </p>
            <a href="/busqueda" className=" flex link link-hover text-sm ">
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
              Volver a búsqueda
            </a>
          </div>
          <Carrusel />
          <Mapa />
          <div>
            <h3 className="text-2xl">Habitaciones</h3>
            <h4>
              Precios para 1 habitación del 28/12/2024 al 31/12/2024 | 3 noches
              | 2 adultos
            </h4>

            <TablaHabitaciones />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
