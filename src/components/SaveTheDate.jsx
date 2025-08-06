export default function SaveTheDate() {
  const googleCalendarUrl = encodeURI(
    `https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan Amanda & Ryan&dates=20240521T090000Z/20240521T110000Z&details=Undangan Pernikahan Amanda & Ryan di Grand Hyatt, Jakarta.&location=Grand Hyatt, Jakarta&sf=true&output=xml`
  );

  return (
    <section className="py-12 bg-sage-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl text-sage-600 font-serif mb-4">Tandai Tanggal-nya</h2>
        <p className="text-lg text-sage-500 mb-6">
          Kami akan menikah pada <strong>02 Agustus 2028</strong> The Wujil Resort & Conventions, Semarang.
        </p>
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sage-500 text-white px-6 py-2 rounded-full hover:bg-sage-600 transition"
        >
          Simpan ke Kalender
        </a>
      </div>
    </section>
  );
}
