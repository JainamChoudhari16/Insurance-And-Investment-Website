import React, { useState } from "react";
import licImage from "../Images/Partners/lic.png";
import iciciImage from "../Images/Partners/icici.png";
import orientalImage from "../Images/Partners/oriental.png";
import tataImage from "../Images/Partners/tata.png";
import starImage from "../Images/Partners/star.png";
import hdfcImage from "../Images/Partners/hdfc.png";

function PartnersCard({ imageUrl, externalLink, name, additionalInfo }) {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimer;

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setIsHovered(true);
    }, 50); // Adjust this value to change the delay
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    setIsHovered(false);
  };

  return (
    <a
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-xs h-48 rounded overflow-hidden shadow-lg flex justify-center items-center relative block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full relative flex justify-center items-center bg-headerC">
        {isHovered ? (
          <div className="w-full h-full bg-headerC"></div>
        ) : (
          <img
            src={imageUrl}
            alt="Partner"
            className="max-h-full max-w-full mx-auto transition-opacity duration-300 hover:opacity-50"
          />
        )}
        <div className="absolute right-0 top-0 bg-headerC p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h3 className="text-lg font-semibold mb-2 text-textC">{name}</h3>
          <p className="text-textC">{additionalInfo}</p>
        </div>
      </div>
    </a>
  );
}

function Partners() {
  const teamMembers = [
    {
      id: 1,
      image: licImage,
      link: "https://www.licindia.in/",
      name: "LIC",
      additionalInfo: "Life Insurance Corporation of India (LIC) is an Indian state-owned insurance group and investment corporation. It is the largest insurance company in India.",
    },
    {
      id: 2,
      image: iciciImage,
      link: "https://www.icicilombard.com/",
      name: "ICICI Lombard",
      additionalInfo: "ICICI Lombard General Insurance Company Limited is one of the leading private sector general insurance companies in India.",
    },
    {
      id: 3,
      image: orientalImage,
      link: "https://www.orientalinsurance.org.in/",
      name: "Oriental Insurance",
      additionalInfo: "The Oriental Insurance Company Ltd. is a public sector general insurance company of India. It offers various insurance products in the general insurance segment.",
    },
    {
      id: 4,
      image: tataImage,
      link: "https://www.tataaia.com/",
      name: "Tata AIA",
      additionalInfo: "Tata AIA Life Insurance Company Limited (Tata AIA Life) is a joint venture company formed by Tata Sons Pvt. Ltd. and the AIA Group (AIA).",
    },
    {
      id: 5,
      image: starImage,
      link: "https://www.starhealth.in/",
      name: "Star Health",
      additionalInfo: "Star Health & Allied Insurance Co Ltd commenced its operations in 2006 with the business interests in Health Insurance, Overseas Mediclaim Policy and Personal Accident.",
    },
    {
      id: 6,
      image: hdfcImage,
      link: "https://www.hdfcergo.com/",
      name: "HDFC ERGO",
      additionalInfo: "HDFC ERGO General Insurance Company Ltd. is a joint venture between HDFC Ltd., India’s premier Housing Finance Institution and ERGO International AG, the primary insurance entity of the Munich Re Group.",
    },
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-bodyC">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-textC">
          Check out our Trusted Partners.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <PartnersCard key={member.id} imageUrl={member.image} externalLink={member.link} name={member.name} additionalInfo={member.additionalInfo} />
        ))}
      </div>
    </section>
  );
}

export default Partners;