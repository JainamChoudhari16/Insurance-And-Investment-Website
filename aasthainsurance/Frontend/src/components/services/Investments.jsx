import imagesImports from "../../utils/imgImports";
import LicPlans from "./LicPlans";
function Investments() {
  return (
    <div className="py-16 bg-bodyC">
      <div className="container mx-auto px-6 text-textC md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img className="w-full h-auto" src={imagesImports.mutualfund} alt="image" />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-textC font-bold md:text-4xl">
              We also provide investment solutions
            </h2>
            <p className="mt-6 text-textC">
              <strong>Diversified Equity Fund</strong> invest across various
              sectors and market capitalizations, providing investors exposure
              to a broad spectrum of stocks. These funds aim for capital
              appreciation over the long term while mitigating risk through
              diversification. They are suitable for investors seeking growth
              opportunities in the equity markets while spreading risk across
              different industries and companies.
            </p>
            <p className="mt-4 text-textC">
              <strong>Fixed-Income Bond Fund</strong> primarily invest in a
              variety of bonds, including government, corporate, and municipal
              bonds, offering investors regular income streams and capital
              preservation. These funds are designed for investors seeking
              stable returns and lower volatility compared to equity
              investments. Fixed-income bond funds are often favored by those
              looking for income generation and a more conservative investment
              approach.
            </p>
          </div>
        </div>
        <LicPlans/>
      </div>
    </div>
  );
}

export default Investments;
