import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const LoanCalculator = () => {
  const [creditDebt, setCreditDebt] = useState(0);
  const [personalDebt, setPersonalDebt] = useState(0);
  const [months, setMonths] = useState(6);
  const [missedEMI, setMissedEMI] = useState(false);
  const navigate = useNavigate();

  // Calculations
  const totalCreditWithoutSL = creditDebt * 0.45;
  const totalCreditWithSL = creditDebt * 0.05;
  const totalPLWithoutSL = personalDebt * 0.45;
  const totalPLWithSL = personalDebt * 0.13;

  const totalSavings =
    (creditDebt + personalDebt) * 0.45 - (creditDebt * 0.05 + personalDebt * 0.13);
  const monthlyEMI = (totalCreditWithSL + totalPLWithSL) / months;

  const data = [
    { name: 'CC without SL', value: totalCreditWithoutSL },
    { name: 'CC with SL', value: totalCreditWithSL },
    { name: 'PL Without SL', value: totalPLWithoutSL },
    { name: 'PL With SL', value: totalPLWithSL }
  ];

  return (
    <div className="bg-gradient-to-b from-[#e6f2ff] to-[#f0f8ff] px-4 pt-14 pb-4 min-h-0">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#001F3F]">
        Settle Your Loans with Us
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side – Form Inputs */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
          <div className="space-y-6">
            {/* Credit Card Debt */}
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Your Credit Card Debt
              </label>
              <input
                type="range"
                min={0}
                max={200000}
                step={500}
                value={creditDebt}
                onChange={(e) => setCreditDebt(+e.target.value)}
                className="w-full"
              />
              <div className="text-right font-semibold text-gray-800">${creditDebt.toLocaleString()}</div>
            </div>

            {/* Personal Loan Debt */}
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Your Personal Loan Debt
              </label>
              <input
                type="range"
                min={0}
                max={200000}
                step={500}
                value={personalDebt}
                onChange={(e) => setPersonalDebt(+e.target.value)}
                className="w-full"
              />
              <div className="text-right font-semibold text-gray-800">${personalDebt.toLocaleString()}</div>
            </div>

            {/* Months */}
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Months
              </label>
              <input
                type="range"
                min={6}
                max={36}
                value={months}
                onChange={(e) => setMonths(+e.target.value)}
                className="w-full"
              />
              <div className="text-right font-semibold text-gray-800">
                {months} Months
              </div>
            </div>

            {/* EMI Missed */}
            <div>
              <p className="text-gray-700 font-semibold mb-2">
                Missed any EMI in the last 3 months?
              </p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <input
                    type="radio"
                    checked={missedEMI === true}
                    onChange={() => setMissedEMI(true)}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <input
                    type="radio"
                    checked={missedEMI === false}
                    onChange={() => setMissedEMI(false)}
                  />
                  No
                </label>
              </div>
            </div>

            {/* Contact Button */}
            <button
              onClick={() => navigate('/apply')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow mt-2"
            >
              Request A Call Back
            </button>
          </div>
        </div>

        {/* Right Side – Chart & Results */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
          <div className="h-64 mb-6 bg-[#043863] rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  formatter={(value) => `$${value.toLocaleString()}`}
                  labelStyle={{ color: '#000' }}
                />
                <Bar dataKey="value" fill="#e57373" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-3 gap-4 text-center border-t border-b py-4 text-gray-800 font-medium">
            <div>
              <p className="text-sm">Total Est. Savings</p>
              <p className="text-lg font-bold text-green-700">
                ${Math.max(totalSavings, 0).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm">Debt Free In</p>
              <p className="text-lg font-bold">{months} Months</p>
            </div>
            <div>
              <p className="text-sm">Monthly EMI</p>
              <p className="text-lg font-bold">${Math.round(monthlyEMI)}</p>
            </div>
          </div>

          {/* Notes */}
          <div className="text-xs text-gray-700 mt-4 leading-relaxed">
            <p className="mb-2">
              *This is a broad estimate based on trends and may vary. Settlement offers a way to reduce debt burden if full repayment isn't feasible.
            </p>
            <p className="mb-2">
              *Not all loans qualify. Always consult with financial advisors for accurate settlement options. Settling may reduce your
              <span className="text-orange-600 font-semibold"> financial burden significantly.</span>
            </p>
            <p>
              *Credit card dues assumed at 5% repayment & Personal loan at 13% interest. Default repayment shown at 45%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
