import mutualFund from "../Images/MutualFunds.jpg";
function MutualFunds() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img className="w-full h-auto" src={mutualFund} alt="image" />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              We also provide investment solutions
            </h2>
            <p className="mt-6 text-gray-600">
              <strong>Diversified Equity Fund</strong> invest across various
              sectors and market capitalizations, providing investors exposure
              to a broad spectrum of stocks. These funds aim for capital
              appreciation over the long term while mitigating risk through
              diversification. They are suitable for investors seeking growth
              opportunities in the equity markets while spreading risk across
              different industries and companies.
            </p>
            <p className="mt-4 text-gray-600">
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
      </div>
    </div>
  );
}

export default MutualFunds;
