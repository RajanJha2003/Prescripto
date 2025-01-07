import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  const stats = [
    { number: "10K+", label: "Active Patients" },
    { number: "500+", label: "Verified Doctors" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      title: "Expert Doctors",
      description: "Access to highly qualified and experienced medical professionals across various specialties.",
      icon: "👨‍⚕️"
    },
    {
      title: "Easy Booking",
      description: "Simple and quick appointment booking process with instant confirmations.",
      icon: "📅"
    },
    {
      title: "Quality Care",
      description: "Committed to providing the highest standard of medical care and patient service.",
      icon: "🏥"
    },
    {
      title: "Affordable Prices",
      description: "Transparent pricing and affordable consultation fees for all patients.",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Healthcare Access
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We're on a mission to make quality healthcare accessible to everyone through innovative digital solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600">
              We combine medical expertise with technology to provide you the best healthcare experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                <img 
                  src={assets.about_image}
                  alt="Medical Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We believe that everyone deserves access to quality healthcare. Our platform connects patients with the best healthcare providers, making it simple to find the right doctor and book appointments online.
              </p>
              <ul className="space-y-4">
                {[
                  "Quality healthcare for everyone",
                  "Transparent and affordable pricing",
                  "24/7 patient support",
                  "Verified and experienced doctors"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of satisfied patients who have found the right healthcare providers through our platform.
            </p>
            <button className="inline-flex items-center px-8 py-3 rounded-full
              bg-blue-600 text-white font-medium
              hover:bg-blue-700
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-200">
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;