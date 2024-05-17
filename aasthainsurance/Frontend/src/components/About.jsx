import imagesImports from '../utils/imgImports';
import Partners from './Partners';
function About() {
  return (
    <>
      {/* About Company */}
      <div className="py-16 bg-bodyC text-textC">
        <div className="container mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:flex md:items-center md:space-x-6 lg:space-x-12">
            <div className="md:w-1/2 lg:w-1/2">
              <img
                className="w-full"
                src={imagesImports.companyImg}
                alt="company-image"
              />
            </div>
            <div className="md:w-1/2 lg:w-1/2">
              <h2 className="text-2xl font-bold md:text-4xl">
                Welcome to Aastha Insurance and Investments!
              </h2>
              <p className="mt-6">
                Aastha Insurance and Investments is a premier financial firm
                offering personalized insurance and investment solutions from
                renowned partners like TATA-AIA and LIC. With a focus on
                individualized planning and a seamless online platform, clients
                can conveniently explore options ranging from life and health
                insurance to mutual funds. Committed to trust and transparency,
                their experienced team provides exceptional customer service and
                ongoing support to help clients achieve their financial goals
                securely.
              </p>
              <p className="mt-4">
                Aastha Insurance and Investments prioritizes client needs,
                offering informed guidance and access to leading industry
                products. With a dedication to building long-term relationships
                based on trust and integrity, they assist clients at every stage
                of their financial journey, ensuring a pathway to financial
                success and prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Company Highlights */}
      <section className="py-16 px-5 bg-bodyC text-textC mx-auto">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Company Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="highlight text-center">
              <img src={imagesImports.thumbsup} className="w-16 h-16 mx-auto mb-4" alt="thumbsup-icon"/>
              <h3 className="text-xl font-semibold mt-4">
                24x7 Support
              </h3>
              <p className="mt-2">
                Our firm offers 24x7 support, ensuring assistance anytime,
                anywhere.
              </p>
            </div>
            <div className="highlight text-center">
              <img src={imagesImports.wallet} className="w-16 h-16 mx-auto mb-4" alt="wallet-icon"/>
              <h3 className="text-xl font-semibold mt-4">
                Financial Advising
              </h3>
              <p className="mt-2">
                We provide expert financial advising to help clients achieve
                their goals.
              </p>
            </div>
            <div className="highlight text-center">
              <img src={imagesImports.online} className="w-16 h-16 mx-auto mb-4" alt="online-icon"/>
              <h3 className="text-xl font-semibold mt-4">
                Online Assistant
              </h3>
              <p className="mt-2">
                Our online assistant streamlines processes, offering
                convenience and efficiency.
              </p>
            </div>
            <div className="highlight text-center">
              <img src={imagesImports.team} className="w-16 h-16 mx-auto mb-4" alt="team-icon"/>
              <h3 className="text-xl font-semibold mt-4">
                Best Agents
              </h3>
              <p className="mt-2">
                We have the best agents dedicated to serving client&apos;s needs
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Partners  */}
      <Partners />
    </>
  );
}

export default About;
