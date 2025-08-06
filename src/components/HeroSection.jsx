import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function HeroSection() {
  const [namaTamu, setNamaTamu] = useState("Anda");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const nama = searchParams.get("untuk");
    if (nama) {
      setNamaTamu(decodeURIComponent(nama));
    }
  }, [location.search]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-sage-100 overflow-hidden">
      <img 
        src="https://placehold.co/1920x1080" 
        alt="Dekorasi pernikahan romantis dengan bunga dan cahaya senja"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-sage-600/60 via-sage-500/40 to-sage-600/60"></div>

      <div className="relative z-10 text-center px-6 max-w-2xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4 leading-tight">
          ? &amp; ?
        </h1>

        <p className="text-xl md:text-2xl text-white mb-2">
          Kami akan menikah!
        </p>

        <p className="text-lg md:text-xl text-white mb-6">
          Kami Mengundang, <span className="font-bold">{namaTamu}</span>
        </p>

        <p className="text-base md:text-lg text-white">
          02 Februari 2022 • The Wujil Resort & Conventions, Semarang
        </p>
      </div>
    </section>
  );
}
