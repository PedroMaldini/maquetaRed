import Link from "next/link"; // Esto es lo que sustituye la etiqueta <a> en el proyecto
import Header from "@/components/Header";
import Buscador from "@/components/Buscador";
import ResultadoBusqueda from "@/components/ResultadoBusqueda";
import Footer from "@/components/Footer";

export default function Busqueda() {
  return (
    <main className="bg-slate-100">
      <Header />
      <div className="flex">
        <Buscador />
        <ResultadoBusqueda />
      </div>
      <Footer />
    </main>
  );
}
