import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Was kostet eine Webseite?",
      answer: "Bei unserer Webseiten-Agentur können Sie eine professionelle und moderne Webseite zu einem unschlagbaren Preis ab nur 499€ erhalten. Hinzu kommt ein Hosting-Paket, welches die Serverkosten, Domainkosten und Wartungen umfasst. Das bedeutet, dass Sie sich keine Sorgen um die technischen Details machen müssen, sondern sich vollständig auf Ihr Geschäft konzentrieren können."
    },
    {
      question: "Wie lange dauert es, bis die Webseite fertiggestellt ist?",
      answer: "Wir wissen, dass Zeit eine wichtige Ressource ist, deshalb sind wir stolz darauf, eine schnelle Bereitstellung Ihrer Webseite innerhalb von 1-2 Wochen zu garantieren. Unsere Webseiten-Agentur nutzt effektive Prozesse und Werkzeuge, um die Erstellung Ihrer Webseite schnell und effizient zu gestalten, ohne dabei Qualität und Funktionalität zu beeinträchtigen. Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass Ihre Webseite in kürzester Zeit genau nach Ihren Wünschen und Bedürfnissen erstellt wird."
    },
    {
      question: "Wie gehen Sie bei der Erstellung einer Webseite vor?",
      answer: "Zu Beginn beschreiben Sie uns einfach, wie Sie sich die Webseite inhaltlich und gestalterisch vorstellen und in welchem Umfang Sie diese benötigen. Auch Beispiel-Webseiten, die Ihren Vorstellungen entsprechen, können uns helfen, Ihre Wünsche besser zu verstehen.\n\nSobald wir Ihre Angaben erhalten haben, übernehmen wir die gesamte Arbeit für Sie. Sie müssen uns lediglich Text und gegebenenfalls Bilder zur Verfügung stellen. Falls Sie keine eigenen Bilder haben, nutzen wir gerne lizenzfreie Fotos für Ihre Webseite. Durch unsere Erfahrung und Expertise im Bereich Webdesign können wir Ihnen eine ansprechende und professionelle Webseite garantieren.\n\nNatürlich sind Änderungswünsche Ihrerseits jederzeit möglich und willkommen. Wir arbeiten gemeinsam an der Webseite, bis sie vollständig Ihren Ansprüchen entspricht."
    },
    {
      question: "Werden Sie die Webseite nach der Fertigstellung betreuen und warten?",
      answer: "Selbstverständlich bieten wir auch nach der Bereitstellung Ihrer Webseite eine kontinuierliche Betreuung und Wartung an. Die Kosten für diese Leistungen sind bereits in den monatlichen Gebühren enthalten. Wir sorgen dafür, dass Ihre Webseite stets auf dem neuesten Stand bleibt und reibungslos funktioniert. Bei Fragen oder Problemen stehen wir Ihnen jederzeit zur Verfügung."
    },
    {
      question: "Sind Vorauszahlungen notwendig?",
      answer: "Unsere Agentur ist stolz darauf, dass alle unsere bisherigen Kunden mit unseren Ergebnissen zufrieden waren. Aus diesem Grund bieten wir keine Vorauszahlungen an. Wir sind überzeugt davon, dass wir Ihnen ein Ergebnis liefern werden, das Ihren Erwartungen entspricht und Sie zufriedenstellen wird. Daher können Sie sich auf unsere Erfahrung und unser Know-how verlassen, ohne im Voraus bezahlen zu müssen."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="relative min-h-[40vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-5xl font-bold text-white mb-6">Häufig gestellte Fragen</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Dienstleistungen und Prozesse.
          </p>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                <div className="transform transition-transform duration-300">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </div>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700 whitespace-pre-line">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}