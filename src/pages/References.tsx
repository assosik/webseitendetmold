import React from 'react';
import { ExternalLink } from 'lucide-react';

export function References() {
  const references = [
    {
      title: 'Physiotherapie Gontcharov',
      description: 'Eine moderne Website für eine Physiotherapiepraxis in Blomberg',
      image: 'https://images.unsplash.com/photo-1738951257611-b6d856d148a6?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Physiotherapie', 'Gesundheit', 'Responsive Design'],
      url: 'https://physiotherapie-blomberg.de/'
    },
    {
      title: 'FFD-Garten',
      description: 'Internetpräsenz für einen Landschaftsgestalter',
      image: 'https://images.unsplash.com/photo-1738952169677-2261d2178d6f?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Landschaft', 'Handwerk', 'SEO-Optemiert'],
      url: 'https://www.ffd-garten.com'
    },
    {
      title: 'Verkehrssicherung - Heg und Hoff',
      description: 'Professionelle Website für Verkehrssicherung',
      image: 'https://images.unsplash.com/photo-1738951257601-1a1d1747ff96?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Sicherheit', 'Barrierefrei', 'SEO-Optimiert'],
      url: 'https://www.hegundhoff.de'
    },
    {
      title: 'China-Europa Musik- und Kultur',
      description: 'Austauschgesellschaft mit Sitz in Hongkong',
      image: 'https://images.unsplash.com/photo-1738950657517-00f41f9d617c?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Musik', 'International', 'Bewerbungsformular'],
      url: 'https://www.aboutopera.de'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="relative min-h-[40vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">Unsere Referenzen</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Entdecken Sie eine Auswahl unserer erfolgreich umgesetzten Projekte. Jedes Projekt erzählt eine einzigartige Geschichte digitaler Innovation.
          </p>
        </div>
      </header>

      {/* References Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {references.map((reference, index) => {
            const Wrapper = reference.url ? 'a' : 'div';
            const wrapperProps = reference.url ? {
              href: reference.url,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {};
            
            return (
              <Wrapper
                key={index}
                {...wrapperProps}
                className="group bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 select-none touch-manipulation"
              >
                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <img 
                    src={reference.image}
                    alt={reference.title}
                    className="absolute top-0 left-0 w-full object-cover group-hover:translate-y-[calc(-100%+300px)] md:group-hover:translate-y-[calc(-100%+400px)] group-active:translate-y-[calc(-100%+300px)] md:group-active:translate-y-[calc(-100%+400px)] transition-transform duration-[3s] ease-in-out will-change-transform"
                    style={{
                      height: 'auto',
                      minHeight: '100%'
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{reference.title}</h3>
                    {reference.url && <ExternalLink className="h-6 w-6 text-blue-600" />}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{reference.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {reference.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>
    </div>
  );
}