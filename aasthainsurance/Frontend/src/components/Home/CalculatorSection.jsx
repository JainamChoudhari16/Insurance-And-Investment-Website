import { calculatorData } from '../../utils/calculatorData.js';
import { Link } from "react-router-dom";

function CalCard({ name, to, image }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg group bg-headerC hover:bg-bodyC text-center">
      <Link to={to}>
        <div className="px-6 py-4">
          <img src={image} alt={name} className="w-24 h-24 object-cover mx-auto mb-4" /> {/* Adjust the size of the image */}
          <div className="font-bold text-textC text-lg mb-2">{name}</div> {/* Decrease the font size */}
        </div>
      </Link>
    </div>
  );
}

function CalculatorSection() {
  const firstThreeCalculators = calculatorData.slice(0, 3);

  return (
    <section className="mx-auto px-8 py-12 bg-bodyC ">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-textC">
          Check out our various financial calculators
        </h2>
      </div>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {firstThreeCalculators.map((calculator, index) => (
            <CalCard
              key={index}
              name={calculator.name}
              to={calculator.to}
              image={calculator.image} // Pass the image prop to CalCard
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CalculatorSection;
