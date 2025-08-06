import { useEffect, useState } from 'react';

export default function Countdown() {
  const targetDate = new Date("2022-02-02T08:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-sage-100 py-12 text-center">
      <h2 className="text-3xl font-serif text-sage-600 mb-8">Menuju Hari Bahagia</h2>
      
      <div className="flex justify-center space-x-6 text-sage-500 text-lg font-medium">
        <div>
          <p className="text-5xl font-bold text-sage-500">{timeLeft.days}</p>
          <p className="mt-1">Hari</p>
        </div>

        <div>
          <p className="text-5xl font-bold text-sage-500">{timeLeft.hours}</p>
          <p className="mt-1">Jam</p>
        </div>

        <div>
          <p className="text-5xl font-bold text-sage-500">{timeLeft.minutes}</p>
          <p className="mt-1">Menit</p>
        </div>

        <div>
          <p className="text-5xl font-bold text-sage-500">{timeLeft.seconds}</p>
          <p className="mt-1">Detik</p>
        </div>
      </div>
    </section>
  );
}
