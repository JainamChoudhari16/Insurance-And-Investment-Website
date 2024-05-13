import { Link } from "react-router-dom";
import licImage from "../Images/Partners/lic.png";
import iciciImage from "../Images/Partners/icici.png";
import orientalImage from "../Images/Partners/oriental.png";
import tataImage from "../Images/Partners/tata.png";
import starImage from "../Images/Partners/star.png";
import hdfcImage from "../Images/Partners/hdfc.png";

function PartCard({ name, imageUrl, to }) {
  return (
    <div className="inline-block w-32 h-40 mx-2 overflow-hidden relative">
      <Link to={to} className="block w-full h-full absolute inset-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain"
        />
      </Link>
    </div>
  );
}

function PartnerSection() {
  const partners = [
    {
      name: "LIC",
      imageUrl: licImage,
      to: "https://licindia.in/web/guest/about-us",
    },
    {
      name: "ICICI",
      imageUrl: iciciImage,
      to: "https://www.icicilombard.com/about-us",
    },
    {
      name: "Oriental",
      imageUrl: orientalImage,
      to: "https://orientalinsurance.org.in/en/profile?isSelected=aboutUs&isRefresh=true",
    },
    {
      name: "Tata",
      imageUrl: tataImage,
      to: "https://www.tataaia.com/about-us.html",
    },
    {
      name: "Star",
      imageUrl: starImage,
      to: "https://www.starhealth.in/about-us/",
    },
    {
      name: "HDFC",
      imageUrl: hdfcImage,
      to: "https://www.hdfcergo.com/about-us/about-company",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="text-center">
        {partners.map((partner, index) => (
          <PartCard
            key={index}
            name={partner.name}
            imageUrl={partner.imageUrl}
            to={partner.to}
          />
        ))}
      </div>
    </div>
  );
}

export default PartnerSection;
