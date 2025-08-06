import EventCard from '../components/EventCard';

export default function Events() {
  const events = [
    {
      title: "Akad Nikah",
      date: "Sabtu, 12 Februari 2028",
      time: "08.00 – 10.00 WIB",
      location: "The Wujil Resort & Conventions, Semarang",
      description: "Momen sakral penyatuan janji suci pernikahan kami."
    },
    {
      title: "Resepsi Pernikahan",
      date: "Sabtu, 12 Februari 2028",
      time: "11.00 – 15.00 WIB",
      location: "The Wujil Resort & Conventions, Semarang",
      description: "Syukuran dan jamuan makan bersama keluarga dan sahabat tercinta."
    }
  ];

  return (
    <section className="min-h-screen py-16 bg-sage-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12 text-sage-900">
          Rangkaian Acara
        </h2>

        <div className="space-y-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
