import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-5xl font-bold text-white mb-6">Über uns</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Wir sind Ihr Partner für professionelle Webentwicklung in Detmold. Mit jahrelanger Erfahrung, schaffen wir digitale Lösungen, die begeistern.
          </p>
        </div>
      </header>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Unser Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1738952627994-c44cb6ff3bb3?q=80&w=2616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Daniel Donhauser"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Daniel Donhauser</h3>
            <p className="text-gray-600">Inhaber/Developer/Designer</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Werte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Qualität</h3>
              <p className="text-gray-600">
                Wir setzen auf höchste Qualitätsstandards bei allen unseren Projekten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Wir bleiben stets am Puls der Zeit mit den neuesten Technologien.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Kundenfokus</h3>
              <p className="text-gray-600">
                Ihre Zufriedenheit steht bei uns an erster Stelle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}