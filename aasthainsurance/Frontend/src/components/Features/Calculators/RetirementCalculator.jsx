import { useState } from "react";

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(0);
  const [retirementAge, setRetirementAge] = useState(0);
  const [annualExpenses, setAnnualExpenses] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [retirementCorpus, setRetirementCorpus] = useState(0);

  const calculateRetirementCorpus = () => {
    const yearsToRetirement = retirementAge - currentAge;

    // Convert annual expenses to yearly
    const yearlyExpenses = annualExpenses;

    // Convert annual return rate to yearly
    const yearlyRate = annualReturnRate / 100;

    // Calculate the future value of yearly expenses during retirement
    const futureValueExpenses =
      yearlyExpenses * Math.pow(1 + yearlyRate, yearsToRetirement);

    // Calculate the retirement corpus needed
    const corpusNeeded = futureValueExpenses;

    setRetirementCorpus(corpusNeeded.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Retirement Calculator</h2>
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
          <label className="block mb-2">Desired Retirement Age:</label>
          <input
            className="border rounded px-2 py-1 w-40"
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(parseInt(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Annual Expenses During Retirement (₹):
          </label>
          <input
            className="border rounded px-2 py-1 w-40"
            type="number"
            value={annualExpenses}
            onChange={(e) => setAnnualExpenses(parseFloat(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Expected Annual Return Rate (%):</label>
          <input
            className="border rounded px-2 py-1 w-40"
            type="number"
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(parseFloat(e.target.value))}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateRetirementCorpus}
        >
          Calculate Retirement Corpus
        </button>
        {retirementCorpus > 0 && (
          <div className="mt-4">
            <p className="font-bold">
              You need a retirement corpus of ₹{retirementCorpus}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RetirementCalculator;
