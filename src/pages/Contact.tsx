import React, { FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Neue Kontaktanfrage von der Webseite');
    const body = encodeURIComponent(`
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Nachricht: ${formData.get('message')}
    `);
    
    window.location.href = `mailto:danieldonhauser@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="relative min-h-[40vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-5xl font-bold text-white mb-6">Kontakt</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie uns - wir sind für Sie da.
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Sprechen Sie uns an</h2>
            <p className="text-gray-600">
              Wir freuen uns darauf, von Ihnen zu hören und Ihr Projekt zu besprechen.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                <a href="mailto:danieldonhauser@outlook.com" className="text-gray-700 hover:text-blue-600">danieldonhauser@outlook.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-3" />
                <a href="tel:+4915238903733" className="text-gray-700 hover:text-blue-600">+49 1523 8903733</a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <span className="text-gray-700">Detmold, Deutschland</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}