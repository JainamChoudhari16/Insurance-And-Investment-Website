import insurancesType from '../../utils/insurancesType';
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
          safeguarding your assets to securing your family&apos;s future, trust in
          our expertise for peace of mind.
        </p>
        <div className="services flex flex-wrap justify-center">
          {insurancesType.map((service, index) => (
            <ServiceCard
              key={index}
              img={service.img}
              title={service.title}
              description={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ img, title, description }) {
  return (
    <div className="service bg-headerC rounded-lg p-8  text-center flex flex-col justify-center items-center w-40 m-2">
      <img
        src={img}
        alt={title}
        className="service-image mb-4"
        style={{ width: "40px", height: "40px" }}
      />
      <h2 className="service-heading text-xl font-semibold mb-4">{title}</h2>
      {/* <p className="para-line text-lg">{description}</p> */}
    </div>
  );
}

export default InsuranceServices;
