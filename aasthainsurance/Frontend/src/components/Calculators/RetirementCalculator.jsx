import { useState } from "react";

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(67);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [currentIncome, setCurrentIncome] = useState(70000);
  const [incomeIncreaseRate, setIncomeIncreaseRate] = useState(0);
  const [incomeNeededAfterRetirement, setIncomeNeededAfterRetirement] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [inflationRate, setInflationRate] = useState(3);
  const [retirementCorpus, setRetirementCorpus] = useState(0);

  const calculateRetirementCorpus = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = lifeExpectancy - retirementAge;

    // Calculate future value of current income at retirement age
    const futureIncome = currentIncome * Math.pow(1 + incomeIncreaseRate / 100, yearsToRetirement);

    // Calculate annual expenses during retirement based on the percentage of current income
    const yearlyExpenses = futureIncome * (incomeNeededAfterRetirement / 100);

    // Adjust for inflation
    const adjustedYearlyExpenses = yearlyExpenses * Math.pow(1 + inflationRate / 100, yearsInRetirement);

    // Calculate the retirement corpus needed using the annuity formula
    const corpusNeeded = adjustedYearlyExpenses * ((1 - Math.pow(1 + annualReturnRate / 100, -yearsInRetirement)) / (annualReturnRate / 100));

    setRetirementCorpus(corpusNeeded.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-bodyC text-textC">
      <div className="bg-headerC p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Retirement Calculator</h2>
        <div className="flex flex-row mb-4">
          <div className="mr-4">
            <label className="block mb-2">Current Age:</label>
            <input
              className="border rounded px-2 py-1 w-20"
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(parseInt(e.target.value))}
            />
          </div>
          <div className="mr-4">
            <label className="block mb-2">Planned Retirement Age:</label>
            <input
              className="border rounded px-2 py-1 w-20"
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block mb-2">Life Expectancy:</label>
            <input
              className="border rounded px-2 py-1 w-20"
              type="number"
              value={lifeExpectancy}
              onChange={(e) => setLifeExpectancy(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="mr-4">
            <label className="block mb-2">Current Pre-Tax Income (₹/year):</label>
            <input
              className="border rounded px-2 py-1 w-20"
              type="number"
              value={currentIncome}
              onChange={(e) => setCurrentIncome(parseFloat(e.target.value))}
            />
          </div>
          <div className="mr-4">
            <label className="block mb-2">Income Increase Rate (%/year):</label>
            <input
              className="border rounded px-2 py-1 w-20"
              type="number"
              value={incomeIncreaseRate}
              onChange={(e) => setIncomeIncreaseRate(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className="block mb-2">Income Needed After Retirement (% of current income):</label>
            <input
              className="border rounded px-2 py-1 w-20"
              type="number"
              value={incomeNeededAfterRetirement}
              onChange={(e) => setIncomeNeededAfterRetirement(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="mr-4">
            <label className="block mb-2">Expected Annual Return Rate (%):</label>
            <input
              className="border rounded px-2 py-1 w-20"
              type="number"
              value={annualReturnRate}
              onChange={(e) => setAnnualReturnRate(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className="block mb-2">Inflation Rate (%/year):</label>
            <input
              className="border rounded px-2 py-1 w-20"
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <button
          className="bg-bodyC hover:bg-headerC text-textC font-bold py-2 px-4 rounded"
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
