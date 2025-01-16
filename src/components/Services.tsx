import React from 'react';
import { Smartphone, Shield, Smartphone as Phone, Package } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "LCD Screen Replacement",
    description: "Professional LCD screen replacement for all phone brands"
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: "Phone Accessories",
    description: "Wide range of genuine phone accessories for all models"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Protectors",
    description: "High-quality screen protectors and protective films"
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Phone Covers",
    description: "Stylish and durable phone cases for all brands"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}