import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import imagesImports from "../../utils/imgImports";
function PlansCard({ name, imageUrl, role, to }) {
  return (
    <div className="max-w-xs mx-4 rounded overflow-hidden shadow-lg bg-headerC">
      <Link to={to}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <img
            src={imageUrl}
            alt={name}
            className="object-contain max-h-full max-w-full"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center text-textC">{name}</div>
          <p className="text-base text-textC font-normal text-center">
            {role}
          </p>
        </div>
      </Link>
    </div>
  );
}
function LicPlans() {
  const plans = [
    {
      id: 1,
      name: "Endownment Plan",
      role: "Click to know more",
      image: imagesImports.endplan,
      to: "/endowment-plans",
    },
    {
      id: 2,
      name: "Whole Life Plan",
      role: "Click to know more",
      image: imagesImports.whole,
      to: "/whole-plans",
    },
    {
      id: 3,
      name: "Money Back Plan",
      role: "Click to know more",
      image: imagesImports.moneyback,
      to: "/moneyback-plans",
    }
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-bodyC">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-textC">
          Various LIC investment plans
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((member, index) => (
          <PlansCard
            key={index}
            name={member.name}
            imageUrl={member.image}
            role={member.role}
            to={member.to}
          />
        ))}
      </div>
    </section>
  );
}

export default LicPlans;
