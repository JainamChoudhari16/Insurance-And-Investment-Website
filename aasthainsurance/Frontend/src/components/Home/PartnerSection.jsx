import { Link } from "react-router-dom";
import partners from '../../utils/partner';
import PropTypes from 'prop-types'; 

function PartnerCard({ name, image }) {
  return (
    <div className="inline-block w-40 h-40 mx-2 overflow-hidden relative">
      <Link to="/about" className="block w-full h-full absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </Link>
    </div>
  );
}

// Add props validation
PartnerCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


function PartnerSection() {
  return (
    <div className="container mx-auto bg-bodyC py-12">
      <div className="flex flex-wrap justify-center">
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            name={partner.name}
            image={partner.image}
          />
        ))}
      </div>
    </div>
  );
}

export default PartnerSection;
