export default function EventCard({ title, date, time, location, description, image }) {
  // Format untuk URL Calendar
  const formatDate = (rawDate, rawTime) => {
    const start = new Date(`${rawDate}T${rawTime}`);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // default 2 jam
    const pad = (n) => n.toString().padStart(2, '0');

    const format = (date) => {
      return (
        date.getFullYear().toString() +
        pad(date.getMonth() + 1) +
        pad(date.getDate()) +
        'T' +
        pad(date.getHours()) +
        pad(date.getMinutes()) +
        '00Z'
      );
    };

    return {
      start: format(start),
      end: format(end),
    };
  };

  const { start, end } = formatDate(date, time);
  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={image || 'https://placehold.co/600x400'} 
            alt={`Gambar untuk ${title}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-serif mb-2">{title}</h3>
          
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date} • {time}</span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
          
          <p className="text-gray-700 mb-4">{description}</p>

          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage-600 hover:bg-sage-700 text-white px-4 py-2 rounded-full transition"
          >
            Simpan ke Kalender
          </a>
        </div>
      </div>
    </div>
  );
}
