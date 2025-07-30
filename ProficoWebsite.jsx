// Zwei-Sprachen-Seitenstruktur für Profico Consulting (Deutsch & Englisch)
import React, { useState } from "react";

export default function ProficoWebsite() {
  const [formData, setFormData] = useState({ vorname: "", name: "", anfrage: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hier könnte ein E-Mail-Service wie EmailJS eingebunden werden
    // Beispiel: emailjs.send(...);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <img src="logo_PC_optimized.png" alt="Profico Consulting Logo" className="h-12" />
        <nav>
          <ul className="flex gap-6 text-sm">
            <li><a href="/de">DE</a></li>
            <li><a href="/en">EN</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <img src="Bild_0009_DSF_7498-Bearbeitet.jpg" alt="Portrait" className="mx-auto rounded-full w-48 h-48 object-cover mb-6 shadow-lg" />
        <h1 className="text-3xl font-bold">Herzlich willkommen bei Profico Consulting</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Ich unterstütze Unternehmen in den Bereichen Führung, Organisation, Digitalisierung und Vertrieb mit maßgeschneiderten Beratungs- und Coaching-Angeboten.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Über mich</h2>
        <p>
          Mit über 25 Jahren Erfahrung in der Unternehmensführung, im Vertrieb und in der Organisationsentwicklung
          unterstütze ich Führungskräfte und Teams, nachhaltige Ergebnisse zu erzielen und Veränderungsprozesse erfolgreich zu gestalten.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-12 px-6 bg-gray-50 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Leistungen</h2>
        <ul className="list-disc pl-6">
          <li>Strategieberatung & Organisationsentwicklung</li>
          <li>Führungskräfte-Coaching & Mentoring</li>
          <li>Vertriebstraining & Sales-Exzellenz</li>
          <li>Digitalisierungs- und Transformationsprojekte</li>
          <li>Recruiting & Direct Search</li>
        </ul>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="vorname"
              placeholder="Vorname"
              value={formData.vorname}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Nachname"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="anfrage"
              placeholder="Art der Anfrage"
              value={formData.anfrage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            />
            <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
              Absenden
            </button>
          </form>
        ) : (
          <p className="text-green-600">Vielen Dank für Ihre Nachricht! Ich melde mich in Kürze bei Ihnen.</p>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Profico Consulting GmbH
      </footer>
    </div>
  );
}
// Dummy-Inhalt – bitte durch echten Inhalt ersetzen
