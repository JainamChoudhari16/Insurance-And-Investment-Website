import { useState } from "react";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const numerator =
      loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

    const monthlyPaymentAmount = numerator / denominator;

    setMonthlyPayment(monthlyPaymentAmount.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-bodyC text-textC">
      <div className="bg-headerC p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Mortgage Calculator</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Loan Amount (₹):</label>
            <input
              className="border rounded px-2 py-1 w-full"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className="block mb-2">Interest Rate (%):</label>
            <input
              className="border rounded px-2 py-1 w-full"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Loan Term (years):</label>
            <input
              className="border rounded px-2 py-1 w-full"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button
          className="bg-bodyC hover:bg-headerC text-textC font-bold py-2 px-4 rounded"
          onClick={calculateMonthlyPayment}
        >
          Calculate Monthly Payment
        </button>
        {monthlyPayment > 0 && (
          <div className="mt-4">
            <p className="font-bold">
              Your monthly payment will be ₹{monthlyPayment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MortgageCalculator;
