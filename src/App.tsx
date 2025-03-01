import React from 'react';
import CountUp from 'react-countup';
import { 
  Globe2, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492138786289-d35ea832da43?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 text-blue-200 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium">Professionelle Webentwicklung</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ihre Vision.<br />
              Unsere Expertise.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
              Wir entwickeln maßgeschneiderte Webseiten, die Ihr Unternehmen perfekt repräsentieren. 
              Modern, effektiv und ab nur 499€ + 15€ monatlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Unsere Preise
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                to="/references" 
                className="inline-flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Unsere Referenzen
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl">
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  <CountUp end={50} suffix="+" duration={3} />
                </div>
                <div className="text-blue-200 text-sm">Zufriedene Kunden</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  <CountUp end={100} suffix="%" duration={3} />
                </div>
                <div className="text-blue-200 text-sm">Zufriedenheit</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  <CountUp end={24} suffix="/7" duration={3} />
                </div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
          Unsere Leistungen
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Globe2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Webseiten-Erstellung</h3>
            <p className="text-gray-600">
              Professionelle, responsive Webseiten für Ihr Unternehmen - optimiert für alle Geräte.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Code2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Technische Optimierung</h3>
            <p className="text-gray-600">
              Schnelle Ladezeiten und optimale Performance für beste Nutzererfahrung.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Rocket className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">SEO & Marketing</h3>
            <p className="text-gray-600">
              Optimierung für Suchmaschinen und digitales Marketing für mehr Sichtbarkeit.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Transparente Preisgestaltung
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Basis-Paket</h3>
                  <p className="text-gray-600 mt-2">Perfekt für kleine Unternehmen</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">499€</p>
                  <p className="text-gray-500">+ 15€ monatlich</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  '1 Seite (Web Visitenkarte für Firmen / Landing Page) + Impressum / Datenschutz',
                  'Professionelles Webdesign',
                  'Wunschdomain',
                  'Responsive für alle Geräte',
                  'SEO-Optimierung',
                  'Branchenspezifisches Bildmaterial',
                  'Hosting & Support',
                  'SSL-Zertifikat',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Business-Paket</h3>
                  <p className="text-gray-600 mt-2">Für umfangreichere Projekte</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">699€</p>
                  <p className="text-gray-500">+ 20€ monatlich</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  'Bis zu 5 Seiten (z.B. Startseite, Über uns, Service, Kontakt)',
                  'Professionelles Webdesign',
                  'Wunschdomain',
                  'Responsive für alle Geräte',
                  'SEO-Optimierung',
                  'Branchenspezifisches Bildmaterial',
                  'Hosting & Support',
                  'SSL-Zertifikat',
                  'Erweiterte Funktionen',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900">
            Kontaktieren Sie uns
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <a 
              href="mailto:info@webseiten-detmold.de" 
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
              <span className="text-gray-700">danieldonhauser@outlook.com</span>
            </a>
            
            <a 
              href="tel:+4915238903733" 
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <span className="text-gray-700">+49 1523 8903733</span>
            </a>
            
            <a 
              href="https://maps.google.com/?q=Detmold,Deutschland" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <MapPin className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Standort</h3>
              <span className="text-gray-700">Detmold, Deutschland</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;