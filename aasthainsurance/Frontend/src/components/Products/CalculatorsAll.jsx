import { Link } from "react-router-dom";

function CalCard({ name, imageUrl, to }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg group">
      <Link to={to}>
        <div className="transition duration-300 ease-in-out transform group-hover:-translate-y-1">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-40 object-cover object-center"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 group-hover:text-indigo-600">
            {name}
          </div>
        </div>
      </Link>
    </div>
  );
}

function CalculatorAll() {
  const partners = [
    {
      name: "SIP Calculator",
      imageUrl:
        "https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1259.jpg?t=st=1709464477~exp=1709468077~hmac=577212c05302f4e9291856881dfc37929ff2a6c72deec7c264f68444cb8f3a32&w=740",
      to: "/calculator/sip-calculator",
    },
    {
      name: "Retirement Calculator",
      imageUrl:
        "https://img.freepik.com/premium-photo/concept-pension-retirement-plan-blue-background_185193-49796.jpg?w=826",
      to: "/calculator/retirement-calculator",
    },
    {
      name: "SIP Delay Calculator",
      imageUrl:
        "https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1259.jpg?t=st=1709464477~exp=1709468077~hmac=577212c05302f4e9291856881dfc37929ff2a6c72deec7c264f68444cb8f3a32&w=740",
      to: "/calculator/sip-delay-calculator",
    },
    {
      name: "Child Future Calculator",
      imageUrl:
        "https://img.freepik.com/free-vector/money-income-attraction_74855-6573.jpg?t=st=1709464821~exp=1709468421~hmac=72d5c0db36ca272b449dd90a56641a5d2b20dbc999a5074a0a3082380b264d24&w=826",
      to: "/calculator/childfuture-calculator",
    },
    {
      name: "Tax Calculator",
      imageUrl:
        "https://img.freepik.com/free-vector/financial-documents-with-calculator_1223-36.jpg?t=st=1709464655~exp=1709468255~hmac=25af28a267a09ba5ec91ee5d909255e32054df8d68b055b2c4f1539cb94c8b27&w=740",
      to: "/calculator/tax-calculator",
    },
    {
      name: "Mortgage Calculator",
      imageUrl:
        "https://img.freepik.com/free-vector/flat-design-installment-illustration_23-2149402206.jpg?t=st=1709464704~exp=1709468304~hmac=3c41a6f7525dd1a96014d76daf8b0ccceae5b19634f95f1255913e489976f573&w=740",
      to: "/calculator/mortgage-calculator",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-indigo-600">
          Check out our various financial calculators
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {partners.map((partner, index) => (
            <CalCard
              key={index}
              name={partner.name}
              imageUrl={partner.imageUrl}
              to={partner.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CalculatorAll;
