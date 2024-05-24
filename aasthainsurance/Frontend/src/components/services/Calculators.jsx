import React from 'react';
import { Link } from "react-router-dom";
import { calculatorData } from '../../utils/calculatorData.js';

function CalCard({ name, to, image }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg group bg-headerC">
      <Link to={to}>
        <div className="px-6 py-4">
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 object-cover mb-2 rounded-lg" // Add rounded-lg class for rounded corners
          />
          <div className="font-bold text-textC text-lg mb-2">{name}</div>
        </div>
      </Link>
    </div>
  );
}

function Calculators() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-bodyC">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-textC">
          Check out our various financial calculators
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {calculatorData.map((calculator, index) => (
            <CalCard
              key={index}
              name={calculator.name}
              to={calculator.to}
              image={calculator.image} // Pass the image prop
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calculators;
