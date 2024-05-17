import React from 'react';
import { Link } from "react-router-dom";
import { calculatorData } from '../../utils/calculatorData.js';

function CalCard({ name, to }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg group bg-headerC">
      <Link to={to}>
        <div className="px-6 py-4">
          <div className="font-bold text-textC text-xl mb-2">{name}</div>
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
          {calculatorData.map((partner, index) => (
            <CalCard
              key={index}
              name={partner.name}
              to={partner.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calculators;
