export default function Footer() {
  return (
    <footer className="bg-[#e6ebe0] text-[#5a6650] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="mb-2 font-semibold text-lg">Hilya & Rama</p>
          <p className="text-sm text-[#7a866f]">
            © {new Date().getFullYear()} Undangan Pernikahan. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
