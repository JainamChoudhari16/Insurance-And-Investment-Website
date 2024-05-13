import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import ulip from "../Images/plans/ulip.jpg";
import whole from "../Images/plans/whole.jpg";
import retire from "../Images/plans/retirement.jpg";
import pure from "../Images/plans/pureprotection.jpg";
import moneyback from "../Images/plans/moneyback.jpg";
import endplan from "../Images/plans/EndPlan.jpg";
import childplan from "../Images/plans/childplan.jpg";
import health from "../Images/plans/health.jpg";
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
          <p className="text-base text-footerC font-normal text-center">
            {role}
          </p>
        </div>
      </Link>
    </div>
  );
}
function FinConsultancy() {
  const plans = [
    {
      id: 1,
      name: "Endownment Plan",
      role: "Click to know more",
      image: endplan,
      to: "/plans/planName",
    },
    {
      id: 2,
      name: "Children Protection Plan",
      role: "Click to know more",
      image: childplan,
      to: "/plans/planName",
    },
    {
      id: 3,
      name: "Whole Life Plan",
      role: "Click to know more",
      image: whole,
      to: "/plans/planName",
    },
    {
      id: 4,
      name: "Retirement Plan",
      role: "Click to know more",
      image: retire,
      to: "/plans/planName",
    },
    {
      id: 5,
      name: "Health Insurance Plan",
      role: "Click to know more",
      image: health,
      to: "/plans/planName",
    },
    {
      id: 6,
      name: "Money Back Plan",
      role: "Click to know more",
      image: moneyback,
      to: "/plans/planName",
    },
    {
      id: 7,
      name: "Pure Protection",
      role: "Click to know more",
      image: pure,
      to: "/plans/planName",
    },
    {
      id: 8,
      name: "ULIP Plan",
      role: "Click to know more",
      image: ulip,
      to: "/plans/planName",
    },
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-bodyC">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-textC">
          Check out our various investment plans
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

export default FinConsultancy;
