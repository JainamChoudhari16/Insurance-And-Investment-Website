import { useState } from 'react';
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
      className="max-w-xs h-48 rounded overflow-hidden shadow-lg flex justify-center items-center relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full relative flex justify-center items-center">
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
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-textColor">{additionalInfo}</p>
        </div>
      </div>
    </a>
  );
}

export default PartnersCard;
