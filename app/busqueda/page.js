import Link from "next/link"; // Esto es lo que sustituye la etiqueta <a> en el proyecto
import Header from "@/components/Header";
import Buscador from "@/components/Buscador";
import ResultadoBusqueda from "@/components/ResultadoBusqueda";
import Footer from "@/components/Footer";

export default function Busqueda() {
  const horizontal = false;
  return (
    <main className="bg-slate-100">
      <Header />
      <div className="flex">
        <div>
          <Buscador />
        </div>
        <ResultadoBusqueda />
      </div>
      <Footer />
    </main>
  );
}
