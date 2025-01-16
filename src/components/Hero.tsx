import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Phone Repair Services</h1>
          <p className="text-xl mb-8">Expert repairs for all major brands with same-day service</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Book Repair
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
              View Parts Store
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 bg-blue-600 p-4 rounded-lg">
            <Shield className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">90-Day Warranty</h3>
              <p className="text-blue-200">On all repairs</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-blue-600 p-4 rounded-lg">
            <Clock className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">Same Day Service</h3>
              <p className="text-blue-200">Most repairs done in 2hrs</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-blue-600 p-4 rounded-lg">
            <Award className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">Certified Experts</h3>
              <p className="text-blue-200">Professional technicians</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}