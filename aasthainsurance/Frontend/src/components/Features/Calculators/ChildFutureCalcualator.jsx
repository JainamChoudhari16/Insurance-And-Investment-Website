import { useState } from "react";

function ChildFutureCalculator() {
  const [currentAge, setCurrentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);
  const [annualExpense, setAnnualExpense] = useState(0);
  const [annualInflationRate, setAnnualInflationRate] = useState(0);
  const [yearsToChildAge, setYearsToChildAge] = useState(0);
  const [futureExpense, setFutureExpense] = useState(0);

  const calculateFutureExpense = () => {
    const yearsToChild = childAge - currentAge;
    setYearsToChildAge(yearsToChild);

    const inflationFactor = Math.pow(
      1 + annualInflationRate / 100,
      yearsToChild
    );
    const futureExpense = annualExpense * inflationFactor;

    setFutureExpense(futureExpense.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Child Future Calculator</h2>
        <div className="mb-4">
          <label className="block mb-2">Current Age:</label>
          <input
            className="border rounded px-2 py-1 w-40"
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(parseInt(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Child's Age at Future Expense:</label>
          <input
            className="border rounded px-2 py-1 w-40"
            type="number"
            value={childAge}
            onChange={(e) => setChildAge(parseInt(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Annual Expense (₹):</label>
          <input
            className="border rounded px-2 py-1 w-40"
            type="number"
            value={annualExpense}
            onChange={(e) => setAnnualExpense(parseFloat(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Annual Inflation Rate (%):</label>
          <input
            className="border rounded px-2 py-1 w-40"
            type="number"
            value={annualInflationRate}
            onChange={(e) => setAnnualInflationRate(parseFloat(e.target.value))}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateFutureExpense}
        >
          Calculate Future Expense
        </button>
        {futureExpense > 0 && (
          <div className="mt-4">
            <p className="font-bold">
              The future expense when your child is {childAge} will be ₹
              {futureExpense}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChildFutureCalculator;
