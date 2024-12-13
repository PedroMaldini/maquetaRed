import Link from "next/link"; // esto es lo que substituye la etiqueta a en el proyecto
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/Login";

export default function LoginPage() {
  return (
    <main>
      <Header />
      <Login />
      <Footer />
    </main>
  );
}
