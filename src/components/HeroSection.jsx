export default function HeroSection() {
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
          Amanda &amp; Ryan
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6">
          Kami akan menikah!
        </p>
        <p className="text-base md:text-lg text-white">
          21 Mei 2024 • Grand Hyatt, Jakarta
        </p>
      </div>
    </section>
  );
}
