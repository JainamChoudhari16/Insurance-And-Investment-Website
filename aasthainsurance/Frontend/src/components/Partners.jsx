import { useState } from "react";
import partners from "../utils/partner";
import PropTypes from 'prop-types'; 


PartnersCard.propTypes = {
  image: PropTypes.string.isRequired,
  externalLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string.isRequired,
};

function PartnersCard({ image, externalLink, name, additionalInfo }) {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimer;

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setIsHovered(true);
    }, 100);
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
      className="max-w-xs h-48 rounded overflow-hidden shadow-lg flex justify-center items-center relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full relative flex justify-center items-center bg-headerC">
        {isHovered ? (
          <div className="w-full h-full bg-headerC"></div>
        ) : (
          <img
            src={image}
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
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-bodyC">
      <div className="text-center pb-12">
        <h2 className="text-2xl font-bold text-textC">
          Check out our Trusted Partners.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <PartnersCard key={partner.id} image={partner.image} externalLink={partner.link} name={partner.name} additionalInfo={partner.additionalInfo} />
        ))}
      </div>
    </section>
  );
}

export default Partners;
