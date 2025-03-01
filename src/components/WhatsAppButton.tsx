import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/4915238903733"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontaktieren Sie uns via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-fade-in"
      style={{
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </a>
  );
}