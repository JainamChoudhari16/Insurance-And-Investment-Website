import whyUs from '../../assets/images/whyUs.png';

const WhyChooseUs = () => {
  return (
    <section className="why-us bg-bodyC px-8 py-8 text-textC">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="why-us-content">
            <h4 className="sub-heading text-3xl font-bold text-center mx-auto md:text-left py-6">
              Why choose us
            </h4>
            <div className="grid grid-cols-1 gap-4">
              <div className="why-us-col">
                <div>
                  <h3 className="why-us-highlight-heading text-xl font-bold mb-2 mt-4 md:mt-0">
                    24x7 Support
                  </h3>
                  <p className="para-line">
                    We offer continuous assistance for all your insurance needs.
                    Our dedicated team ensures prompt responses, guiding you
                    through queries and claims efficiently, anytime, day or
                    night.
                  </p>
                </div>
              </div>
              <div className="why-us-col">
                <div>
                  <h3 className="why-us-highlight-heading text-xl font-bold mb-2">
                    Premium Services
                  </h3>
                  <p className="para-line">
                    Experience tailored coverage and superior customer service.
                    Our comprehensive solutions prioritize your family&apos;s
                    security, providing peace of mind and exceptional protection
                    for your home and loved ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-us-image flex justify-center">
            <img
              src={whyUs}
              alt=""
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
