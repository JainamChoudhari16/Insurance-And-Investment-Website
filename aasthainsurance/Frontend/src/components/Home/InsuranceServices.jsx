import homeImage from '../Images/ins/homeImage.png';
import autoImage from '../Images/ins/autoImage.png';
import healthImage from '../Images/ins/healthImage.png';
import kidcareImage from '../Images/ins/kidcareImage.png';
import lifeImage from '../Images/ins/lifeImage.png';
import travelImage from '../Images/ins/travelImage.png';
function InsuranceServices() {
  return (
    <section className="our-services py-8 px-4 bg-bodyC text-textC">
      <div className="container mx-auto">
        <h4 className="sub-heading text-center text-2xl mb-4">
          Services We Provide
        </h4>
        <h2 className="heading text-center text-3xl font-bold mb-8">
          Insurance Solutions
        </h2>
        <p className="para-line text-center text-lg mb-12">
          Our comprehensive insurance solutions are meticulously crafted to
          address your unique needs and offer unparalleled protection. From
          safeguarding your assets to securing your family&quot;s future, trust in
          our expertise for peace of mind.
        </p>
        <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            imageUrl={homeImage}
            title="Home"
            description="Secure your home with our comprehensive insurance coverage, tailored to protect your property and belongings."
          />
          <ServiceCard
            imageUrl={autoImage}
            title="Auto"
            description="Drive with confidence knowing you're covered by our reliable auto insurance, offering protection on the road."
          />
          <ServiceCard
            imageUrl={travelImage}
            title="Travel"
            description="Explore the world worry-free with our travel insurance, providing peace of mind for your adventures."
          />
          <ServiceCard
            imageUrl={lifeImage}
            title="Life"
            description="Ensure your loved ones' future with our life insurance solutions, offering financial security and support."
          />
          <ServiceCard
            imageUrl={healthImage}
            title="Health"
            description="Stay healthy and secure with our health insurance plans, providing coverage for your medical needs."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ imageUrl, title, description }) {
  return (
    <div className="service bg-headerC rounded-lg p-8  text-center flex flex-col justify-center items-center">
      <img
        src={imageUrl}
        alt={title}
        className="service-image mb-4"
        style={{ width: "80px", height: "80px" }}
      />
      <h2 className="service-heading text-xl font-semibold mb-4">{title}</h2>
      <p className="para-line text-lg">{description}</p>
    </div>
  );
}

export default InsuranceServices;
