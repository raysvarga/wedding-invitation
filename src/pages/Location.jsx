export default function Location() {
  return (
    <div className="min-h-screen py-12 bg-[#f8f9f4]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-[#4b6354] mb-8">Lokasi Acara</h2>

        <div className="text-center text-gray-700 mb-6">
          <p className="text-lg">The Wujil Resort & Conventions, Semarang</p>
          <p className="text-sm">Jl. Soekarno Hatta No.KM 25, RW.5, Setiggen, Wujil, Kec. Bergas, Kabupaten Semarang</p>
        </div>

        <div className="mb-6 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Lokasi Pernikahan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.593067495927!2d110.41312601128419!3d-7.172948292801981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70867b402d871f%3A0xa8202814f4edc3f8!2sThe%20Wujil%20Resort%20%26%20Conventions%2C%20Ungaran%20-%20Semarang!5e0!3m2!1sid!2sid!4v1754466111223!5m2!1sid!2sid"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/ZVCf38sHTKf4puzL7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage-500 text-white px-6 py-2 rounded-full hover:bg-sage-600 transition"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
