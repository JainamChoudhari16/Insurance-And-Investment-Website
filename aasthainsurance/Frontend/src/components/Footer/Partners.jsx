import { Link } from "react-router-dom"; 
import licImage from "../Images/Partners/lic.png";
import iciciImage from "../Images/Partners/icici.png";
import orientalImage from "../Images/Partners/oriental.png";
import tataImage from "../Images/Partners/tata.png";
import starImage from "../Images/Partners/star.png";
import hdfcImage from "../Images/Partners/hdfc.png";

function PartnersCard({ imageUrl }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg flex justify-center items-center">
      <Link className="block">
        <img src={imageUrl} alt={name} className="max-h-48 w-auto mx-auto" />
      </Link>
    </div>
  );
}

function Partners() {
  const teamMembers = [
    {
      id: 1,
      image: licImage,
    },
    {
      id: 2,
      image: iciciImage,
    },
    {
      id: 3,
      image: orientalImage,
    },
    {
      id: 4,
      image: tataImage,
    },
    {
      id: 5,
      image: starImage,
    },
    {
      id: 6,
      image: hdfcImage,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-indigo-600">
          Check out our Trusted Partners.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <PartnersCard key={index} imageUrl={member.image} />
        ))}
      </div>
    </section>
  );
}

export default Partners;
