const WhyChooseUs = () => {
  return (
    <section className="why-us bg-white py-8 md:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="why-us-content flex flex-col justify-center">
            <h4 className="sub-heading text-2xl font-bold mb-4 text-center md:text-left">
              Why choose us
            </h4>
            <div className="grid grid-cols-1 gap-4">
              <div className="why-us-col flex items-center">
                <div>
                  <h3 className="why-us-highlight-heading text-xl font-bold mb-2">
                    24x7 Support
                  </h3>
                  <p className="para-line text-gray-700">
                    We offer continuous assistance for all your insurance needs.
                    Our dedicated team ensures prompt responses, guiding you
                    through queries and claims efficiently, anytime, day or
                    night.
                  </p>
                </div>
              </div>
              <div className="why-us-col flex items-center">
                <div>
                  <h3 className="why-us-highlight-heading text-xl font-bold mb-2">
                    Premium Services
                  </h3>
                  <p className="para-line text-gray-700">
                    Experience tailored coverage and superior customer service.
                    Our comprehensive solutions prioritize your family's
                    security, providing peace of mind and exceptional protection
                    for your home and loved ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-us-image">
            <img
              src="https://img.freepik.com/free-vector/organic-flat-people-asking-questions-illustration_23-2148906283.jpg?t=st=1709471630~exp=1709475230~hmac=7d44698d5726d6eab615b2f5c7df9f7d8260c9b8cd3c9fc26567fb0646bee6bd&w=740"
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
