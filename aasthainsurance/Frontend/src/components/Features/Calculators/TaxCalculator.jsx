import { useState } from "react";

function TaxCalculator() {
  const [income, setIncome] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateTax = () => {
    // Calculate taxable income by subtracting deductions from total income
    const taxable = income - deductions;
    setTaxableIncome(taxable);

    // Calculate tax based on tax brackets
    let calculatedTax = 0;
    if (taxable > 0) {
      if (taxable <= 10000) {
        calculatedTax = taxable * 0.1;
      } else if (taxable <= 50000) {
        calculatedTax = 10000 * 0.1 + (taxable - 10000) * 0.2;
      } else {
        calculatedTax = 10000 * 0.1 + 40000 * 0.2 + (taxable - 50000) * 0.3;
      }
    }
    setTax(calculatedTax.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-bodyC text-textC">
      <div className="bg-headerC p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Tax Calculator</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Total Income (₹):</label>
            <input
              className="border rounded px-2 py-1 w-full"
              type="number"
              value={income}
              onChange={(e) => setIncome(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className="block mb-2">Deductions (₹):</label>
            <input
              className="border rounded px-2 py-1 w-full"
              type="number"
              value={deductions}
              onChange={(e) => setDeductions(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <button
          className="bg-bodyC hover:bg-headerC text-textC font-bold py-2 px-4 rounded"
          onClick={calculateTax}
        >
          Calculate Tax
        </button>
        <div className="mt-4">
          <p className="font-bold">Taxable Income: ₹{taxableIncome}</p>
          <p className="font-bold">Tax: ₹{tax}</p>
        </div>
      </div>
    </div>
  );
}

export default TaxCalculator;
