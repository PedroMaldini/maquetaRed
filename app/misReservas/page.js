// import componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MisReservas() {
  return (
    <main>
      <Header />
      <div>
        {" "}
        Formulario para buscar las fechas por in/alta, con algun filtro. Boton
        busqueda y limpiar busqueda
      </div>
      <div>
        {" "}
        Tabla con las siguientes columnas: File, titular, servicio, Alta, IN Out
      </div>
      <Footer />
    </main>
  );
}
