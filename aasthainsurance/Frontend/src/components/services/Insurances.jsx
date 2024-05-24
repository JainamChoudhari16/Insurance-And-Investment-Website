// Insurances.js

import { Link } from "react-router-dom";
import insurancesType from "../../utils/insurancesType";

function Card({ title, img, desc, linktopage }) {
  return (
    <div className="max-w-sm overflow-hidden flex flex-col items-center bg-headerC rounded-3xl">
      <img className="w-20 h-auto mt-4 mb-2" src={img} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-textC">{title}</div>
        <p className="text-textC text-base">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={linktopage}
          className="inline-block bg-textC text-headerC rounded-full px-3 py-1 text-sm font-semibold hover:bg-headerC  hover:text-textC mr-2 mb-2"
        >
          FIND POLICY
        </Link>
      </div>
    </div>
  );
}

function Insurances() {
  return (
    <div className="container mx-auto px-4 py-8 bg-bodyC">
      <h1 className="text-center text-3xl font-bold mb-8 text-textC">Types of Insurances</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insurancesType.map((insurance, index) => (
          <Card
            key={index}
            title={insurance.title}
            img={insurance.img}
            desc={insurance.desc}
            linktopage={insurance.linktopage}
          />
        ))}
      </div>
    </div>
  );
}

export default Insurances;
