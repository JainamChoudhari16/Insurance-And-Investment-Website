import thumbsup from "../Images/about/thumbsup.png";
import wallet from "../Images/about/wallet.png";
import online from "../Images/about/online.png";
import team from "../Images/about/team.png";
import Partners from "../Footer/Partners";

function About() {
  return (
    <>
      <div className="py-16 bg-bodyC">
        <div className="container mx-auto px-6 text-textC md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12 lg:w-5/12">
              <img
                className="w-full h-auto"
                src="https://img.freepik.com/free-photo/happy-couple-holding-hands-while-talking-about-housing-plans-with-real-estate-agent-home_637285-3834.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=ais"
                alt="image"
              />
            </div>
            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-2xl text-textC font-bold md:text-4xl">
                Welcome to Aastha Insurance and Investments!
              </h2>
              <p className="mt-6 text-textC">
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
              <p className="mt-4 text-textC">
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
      <div>
        <section className="valuespy-16 text-textC bg-bodyC">
          <div className="container mx-auto">
            <h4 className="sub-heading"></h4>
            <h2 className="heading text-3xl font-bold mb-8 text-center">
              Company Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="highlight text-center">
                <img src={thumbsup} className="mx-auto" />
                <h3 className="highlight-heading text-xl font-semibold mt-4">
                  24x7 Support
                </h3>
                <p className="para-line mt-2">
                  Our firm offers 24x7 support, ensuring assistance anytime,
                  anywhere.
                </p>
              </div>
              <div className="highlight text-center">
                <img src={wallet} className="mx-auto" />
                <h3 className="highlight-heading text-xl font-semibold mt-4">
                  Financial Advising
                </h3>
                <p className="para-line mt-2">
                  We provide expert financial advising to help clients achieve
                  their goals.
                </p>
              </div>
              <div className="highlight text-center">
                <img src={online} className="mx-auto" />
                <h3 className="highlight-heading text-xl font-semibold mt-4">
                  Online Assistant
                </h3>
                <p className="para-line mt-2">
                  Our online assistant streamlines processes, offering
                  convenience and efficiency.
                </p>
              </div>
              <div className="highlight text-center">
                <img src={team} className="mx-auto" />
                <h3 className="highlight-heading text-xl font-semibold mt-4">
                  Best Agents
                </h3>
                <p className="para-line mt-2">
                  We have the best agents dedicated to serving clients' needs
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Partners />
      </div>
    </>
  );
}

export default About;
