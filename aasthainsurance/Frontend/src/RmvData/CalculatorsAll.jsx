import { Link } from "react-router-dom";

function CalCard({ name, imageUrl, to }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <Link to={to}>
        <img src={imageUrl} alt={name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
      </Link>
    </div>
  );
}

function CalculatorAll() {
  const partners = [
    {
      name: "SIP",
      imageUrl:
        "https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740",
      to: "/calculator/sip-calculator",
    },
    {
      name: "Retirement",
      imageUrl:
        "https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740",
      to: "/calculator/retirement-calculator",
    },
    {
      name: "Other",
      imageUrl:
        "https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740",
      to: "/calculator/other-calculator",
    },
    {
      name: "SIP",
      imageUrl:
        "https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740",
      to: "/calculator/sip-calculator",
    },
    {
      name: "Retirement",
      imageUrl:
        "https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740",
      to: "/calculator/retirement-calculator",
    },
    {
      name: "Other",
      imageUrl:
        "https://img.freepik.com/free-vector/coins-calculator-background-piggy-bank_23-2147631739.jpg?t=st=1708590410~exp=1708594010~hmac=b7fbe80f4aebe6abbada70e9c007855b3524c3e973ae976e2d013b5ccd7ac06e&w=740",
      to: "/calculator/other-calculator",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
          Invest and Grow Rich, No worries in your life.
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Check out our various financial calculators
        </h1>
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
