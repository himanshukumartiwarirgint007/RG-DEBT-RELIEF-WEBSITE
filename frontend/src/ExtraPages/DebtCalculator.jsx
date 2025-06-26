import React, { useState } from "react";

const DebtCalculator = () => {
  const [debt, setDebt] = useState("");
  const [months, setMonths] = useState("");
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    const P = parseFloat(debt);
    const N = parseInt(months, 10);

    if (!P || !N) {
      setResults({ error: "Please enter valid numbers." });
      return;
    }

    const monthlyPayment = (P / N).toFixed(2);
    const totalCost = (monthlyPayment * N).toFixed(2);

    // Example: hardcoded for illustrative "savings"
    const totalSavings = (P * 1.3 - totalCost).toFixed(2); // Assuming original debt + estimated interest = 130% of debt

    setResults({
      months: N,
      interestRate: "0%",
      totalInterest: "$0.00",
      monthlyPayment: `$${monthlyPayment}`,
      totalCost: `$${totalCost}`,
      totalSavings: `$${totalSavings}`
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 shadow-md rounded-xl p-8 mt-12">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Debt Relief Calculator</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Debt Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">$</span>
            <input
              type="number"
              value={debt}
              onChange={(e) => setDebt(e.target.value)}
              placeholder="e.g. 7500"
              className="w-full pl-7 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Program Duration (in Months)</label>
          <div className="relative">
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              placeholder="e.g. 24"
              className="w-full pl-3 pr-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-2.5 text-gray-500">mo</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
      >
        Calculate Debt Relief
      </button>

      {results && (
        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          {results.error ? (
            <p className="text-red-500 text-center">{results.error}</p>
          ) : (
            <div className="text-gray-700 space-y-3">
              <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">Result</h3>
              <div className="flex justify-between">
                <span>Months to Pay Off:</span>
                <span className="font-bold">{results.months}</span>
              </div>
              <div className="flex justify-between">
                <span>Interest Rate:</span>
                <span className="font-bold">{results.interestRate}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest Paid:</span>
                <span className="font-bold">{results.totalInterest}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Payment:</span>
                <span className="font-bold">{results.monthlyPayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Cost:</span>
                <span className="font-bold">{results.totalCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Savings:</span>
                <span className="font-bold text-green-600">{results.totalSavings}</span>
              </div>

              <p className="text-xs text-gray-500 mt-6 leading-5">
                <strong>Disclaimer:</strong> This calculator provides estimated outcomes based on typical past experiences and should be used for informational purposes only. Actual results can vary depending on your specific debt situation, creditors, and payment consistency. Not all individuals will qualify for debt relief programs. We strongly recommend speaking with a licensed financial expert to determine the best approach for your needs.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DebtCalculator;
