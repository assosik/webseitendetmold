import React from 'react';

export function Impressum() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-blue">
          <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          
          <div className="mb-8">
            <p className="font-semibold mb-1">Webseiten-Detmold</p>
            <p>Daniel Donhauser</p>
            <p>Haarkampsweg 15a</p>
            <p>32791 Lage</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
          
          <div className="mb-8">
            <p>Telefon: <a href="tel:+4915238903733" className="text-blue-600 hover:text-blue-800">+49 1523 8903733</a></p>
            <p>E-Mail: <a href="mailto:danieldonhauser@outlook.com" className="text-blue-600 hover:text-blue-800">danieldonhauser@outlook.com</a></p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          
          <div className="mb-8">
            <p>Daniel Donhauser</p>
            <p>Haarkampsweg 15a</p>
            <p>32791 Lage</p>
          </div>
        </div>
      </div>
    </div>
  );
}