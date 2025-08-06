import { useRef, useState } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.4;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Play gagal:', err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/audio/instrumental.mp3" loop />
      <button
        onClick={toggleAudio}
        className="bg-white/90 backdrop-blur-md border border-sage-400 text-sage-600 px-4 py-2 rounded-full shadow-lg hover:bg-white transition"
      >
        {isPlaying ? '🔊 Matikan' : '🔇 Hidupkan'}
      </button>
    </div>
  );
}
