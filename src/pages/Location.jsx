export default function Location() {
  return (
    <div className="min-h-screen py-12 bg-[#f8f9f4]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-[#4b6354] mb-8">Lokasi Acara</h2>

        <div className="text-center text-gray-700 mb-6">
          <p className="text-lg">Grand Hyatt Jakarta</p>
          <p className="text-sm">Jl. M.H. Thamrin No.28-30, Jakarta Pusat</p>
        </div>

        <div className="mb-6 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Lokasi Pernikahan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d28d92479f%3A0x11d8fd72d1760124!2sGrand%20Hyatt%20Jakarta!5e0!3m2!1sen!2sid!4v1694056721282!5m2!1sen!2sid"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/dir//Grand+Hyatt+Jakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#a3b18a] hover:bg-[#8c9c78] text-white font-medium rounded-full transition"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
