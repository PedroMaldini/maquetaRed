// Componentes
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReservaConfirmada() {
  const reservationNumber = "123456"; // Example reservation number

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center my-40 ">
        <div className=" p-8 rounded-lg shadow-lg text-center ">
          <h1 className="text-2xl font-bold mb-4">
            Su reserva ha sido completada
          </h1>
          <p className="mb-4`">
            La reserva se generó con el número de file:
            <strong>{reservationNumber}</strong>
          </p>
          <a href="/home" className="btn btn-primary">
            Volver a Home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
