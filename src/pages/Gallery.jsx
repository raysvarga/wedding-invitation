export default function Gallery() {
  const images = [
    "https://placehold.co/600x400?text=Foto+1",
    "https://placehold.co/600x400?text=Foto+2",
    "https://placehold.co/600x400?text=Foto+3",
    "https://placehold.co/600x400?text=Foto+4",
    "https://placehold.co/600x400?text=Foto+5",
    "https://placehold.co/600x400?text=Foto+6",
  ];

  return (
    <div className="min-h-screen py-12 bg-[#e6f0e6]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-[#4d6655] mb-4">Galeri Kenangan</h2>
        <p className="text-center text-gray-700 mb-10">
          Beberapa momen indah yang telah kami abadikan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Galeri ${index + 1}`}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
