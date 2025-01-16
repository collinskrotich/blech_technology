import React from 'react';
import { Menu, Phone, ShoppingCart, Wrench } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Wrench className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Blech Technology</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="hover:text-blue-200">Services</a>
              <a href="#shop" className="hover:text-blue-200">Shop</a>
              <a href="#contact" className="hover:text-blue-200">Contact</a>
              <a href="/cart" className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}