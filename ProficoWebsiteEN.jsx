
import React from "react";

export default function ProficoWebsiteEN() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <img src="logo_PC_optimized.png" alt="Profico Consulting Logo" className="h-12" />
        <nav>
          <ul className="flex gap-6 text-sm">
            <li><a href="/">DE</a></li>
            <li><a href="/en">EN</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <img src="Bild_0009_DSF_7498-Bearbeitet.jpg" alt="Portrait" className="mx-auto rounded-full w-48 h-48 object-cover mb-6 shadow-lg" />
        <h1 className="text-3xl font-bold">Welcome to Profico Consulting</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          I support companies in leadership, organization, digital transformation and sales through tailored consulting and coaching solutions.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          With over 25 years of experience in business leadership, sales, and organizational development,
          I help leaders and teams achieve lasting results and guide change processes to success.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-12 px-6 bg-gray-50 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <ul className="list-disc pl-6">
          <li>Strategy consulting & organizational development</li>
          <li>Executive coaching & mentoring</li>
          <li>Sales training & sales excellence</li>
          <li>Digitalization and transformation projects</li>
          <li>Recruiting & direct search</li>
        </ul>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form
          action="https://formspree.io/f/moqzvxyz"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="vorname"
            placeholder="First Name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="name"
            placeholder="Last Name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="anfrage"
            placeholder="Type of inquiry"
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Profico Consulting GmbH
      </footer>
    </div>
  );
}
