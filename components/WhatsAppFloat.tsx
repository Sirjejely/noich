'use client';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348053291432"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-6 z-[80] bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl shadow-green-900/40 transition-all duration-300 hover:scale-110 hover:shadow-green-700/50"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="text-3xl">💬</span>
    </a>
  );
}
