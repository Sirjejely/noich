'use client';

import { useEffect, useRef, useState } from 'react';

export default function OceanAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const wasMuted = localStorage.getItem('ocean_muted') === '1';
    setMuted(wasMuted);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = muted;
    localStorage.setItem('ocean_muted', muted ? '1' : '0');
  }, [muted]);

  useEffect(() => {
    const start = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
      } catch {}
    };

    const unlock = () => {
      start();
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
    };

    window.addEventListener('click', unlock);
    window.addEventListener('touchstart', unlock);
    window.addEventListener('keydown', unlock);

    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/ocean-wind.mp3" loop preload="auto" />
      <div className="fixed bottom-4 right-4 z-[70] flex gap-2">
        <button
          onClick={() => setMuted((m) => !m)}
          className="px-3 py-2 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur hover:bg-white/5 text-sm"
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    </>
  );
}
