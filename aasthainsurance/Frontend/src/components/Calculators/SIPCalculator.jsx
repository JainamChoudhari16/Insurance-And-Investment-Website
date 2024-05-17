import React, { useState } from "react";

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [investmentData, setInvestmentData] = useState([]);

  const calculateMaturityAmount = () => {
    const monthlyRate = annualReturnRate / 12 / 100;
    let investedAmount = 0;
    let totalAmount = 0;
    const data = [];

    for (let i = 2024; i <= 2024 + investmentDuration - 1; i++) {
      const yearInvestment = monthlyInvestment * 12;
      investedAmount += yearInvestment * Math.pow(1 + monthlyRate, i - 2024);
      const returns = investedAmount * (Math.pow(1 + monthlyRate, 12) - 1);
      totalAmount = investedAmount + returns;
      data.push({
        year: i,
        invested: investedAmount.toFixed(2),
        gained: returns.toFixed(2),
        total: totalAmount.toFixed(2),
      });
    }
    setInvestmentData(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-bodyC text-textC">
      <div className="bg-headerC p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4">SIP Calculator</h2>
        <div className="flex flex-col sm:flex-row mb-4">
          <div className="mb-4 sm:mr-4">
            <label className="block mb-2">Monthly Investment Amount (₹):</label>
            <input
              className="border rounded px-2 py-1 w-40"
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-4 sm:mr-4">
            <label className="block mb-2">Expected Annual Return Rate (%):</label>
            <input
              className="border rounded px-2 py-1 w-40"
              type="number"
              value={annualReturnRate}
              onChange={(e) => setAnnualReturnRate(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Investment Duration (years):</label>
            <input
              className="border rounded px-2 py-1 w-40"
              type="number"
              value={investmentDuration}
              onChange={(e) => setInvestmentDuration(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button 
          className="bg-bodyC hover:bg-headerC text-textC font-bold py-2 px-4 rounded"
          onClick={calculateMaturityAmount}
        >
          Calculate Maturity Amount
        </button>
        {investmentData.length > 0 && (
          <div className="mt-4">
            <table className="border-collapse border w-full">
              <thead>
                <tr>
                  <th className="border border-gray-500 px-4 py-2">Year</th>
                  <th className="border border-gray-500 px-4 py-2">
                    Invested Amount (₹)
                  </th>
                  <th className="border border-gray-500 px-4 py-2">
                    Gained Amount (₹)
                  </th>
                  <th className="border border-gray-500 px-4 py-2">
                    Total Amount (₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                {investmentData.map((item) => (
                  <tr key={item.year}>
                    <td className="border border-gray-500 px-4 py-2">
                      {item.year}
                    </td>
                    <td className="border border-gray-500 px-4 py-2">
                      ₹{item.invested}
                    </td>
                    <td className="border border-gray-500 px-4 py-2">
                      ₹{item.gained}
                    </td>
                    <td className="border border-gray-500 px-4 py-2">
                      ₹{item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default SIPCalculator;
