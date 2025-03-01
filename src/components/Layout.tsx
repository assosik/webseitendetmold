import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="text-xl md:text-2xl font-bold text-blue-900">
              webseiten-detmold
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">Über uns</Link>
              <Link to="/references" className="text-gray-700 hover:text-blue-600">Referenzen</Link>
              <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Kontakt</Link>
            </div>
            
            <div className="hidden md:block">
              <a 
                href="/#pricing" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Unsere Preise
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t shadow-lg">
              <div className="space-y-2 p-4">
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-lg text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="block px-4 py-3 text-lg text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Über uns
                </Link>
                <Link 
                  to="/references" 
                  className="block px-4 py-3 text-lg text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Referenzen
                </Link>
                <Link 
                  to="/faq" 
                  className="block px-4 py-3 text-lg text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-4 py-3 text-lg text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Kontakt
                </Link>
                <a 
                  href="/#pricing" 
                  className="block px-4 py-3 text-lg bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  Unsere Preise
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">webseiten-detmold</h3>
            <p className="max-w-md">
              Ihre professionelle Webseiten-Agentur in Detmold. Wir erstellen moderne und effektive Webpräsenzen für Ihr Unternehmen.
            </p>
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} webseiten-detmold. Alle Rechte vorbehalten.</p>
            <div className="mt-2">
              <Link to="/impressum" className="hover:text-white">Impressum</Link>
              <span className="mx-2">|</span>
              <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}