import { Link } from "react-router-dom";

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
  const partners = [
    {
      name: "SIP Calculator 📱",
      to: "/calculator/sip-calculator",
    },
    {
      name: "Retirement Calculator",
      to: "/calculator/retirement-calculator",
    },
    {
      name: "SIP Delay Calculator",
      to: "/calculator/sip-delay-calculator",
    },
    {
      name: "Child Future Calculator",
      to: "/calculator/childfuture-calculator",
    },
    {
      name: "Tax Calculator",
      to: "/calculator/tax-calculator",
    },
    {
      name: "Mortgage Calculator",
      to: "/calculator/mortgage-calculator",
    },
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-bodyC">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-textC">
          Check out our various financial calculators
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {partners.map((partner, index) => (
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
