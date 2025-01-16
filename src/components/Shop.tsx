import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "iPhone 13 Pro Screen",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Samsung S21 Battery",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "USB-C Fast Charger",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Phone Repair Tool Kit",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Shop() {
  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Phone Parts Store</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}