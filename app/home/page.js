// Componentes
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Buscador from "@/components/Buscador";

export default function HomePage() {
  const horizontal = true;
  return (
    <>
      <Header />
      <main className=" mx-auto bg-base-300">
        <div className="max-w-[95%]">
          <div className="mt-8">
            <div className="scale-90 opacity-90">
              <Buscador horizontal={horizontal} />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
