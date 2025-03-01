import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-blue-900">
              webseiten-detmold
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">Über uns</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Kontakt</a>
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Angebot anfordern
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Über uns
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Kontakt
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center"
              >
                Angebot anfordern
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}