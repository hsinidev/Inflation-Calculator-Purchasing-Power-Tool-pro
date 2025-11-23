import React, { useState, useCallback } from 'react';
import { fetchCpiData } from '../services/FinancialAPI';

interface CalculationResult {
  equivalentValue: number;
  inflationRate: number;
  powerLost: number;
  startYear: number;
  endYear: number;
  initialAmount: number;
}

const InflationCalculatorTool: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState<string>('100');
  const [startYear, setStartYear] = useState<string>('1995');
  const [endYear, setEndYear] = useState<string>(new Date().getFullYear().toString());
  const [apiKey, setApiKey] = useState<string>('https://api.placeholder.com/cpi-data');
  
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCalculate = useCallback(async () => {
    setError('');
    setResult(null);
    setIsLoading(true);

    const amount = parseFloat(initialAmount);
    const start = parseInt(startYear, 10);
    const end = parseInt(endYear, 10);

    if (isNaN(amount) || isNaN(start) || isNaN(end) || amount <= 0) {
      setError('Please enter valid positive numbers for all fields.');
      setIsLoading(false);
      return;
    }
    if (start >= end) {
      setError('Start year must be earlier than the end year.');
      setIsLoading(false);
      return;
    }

    try {
      const cpiData = await fetchCpiData(start, end);

      const startCpi = cpiData[start];
      const endCpi = cpiData[end];

      if (!startCpi || !endCpi) {
        throw new Error('CPI data not available for the selected years.');
      }

      const equivalentValue = amount * (endCpi / startCpi);
      const inflationRate = ((endCpi - startCpi) / startCpi) * 100;
      const powerLost = amount - (amount * (startCpi / endCpi));

      setResult({
        equivalentValue,
        inflationRate,
        powerLost,
        startYear: start,
        endYear: end,
        initialAmount: amount,
      });

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [initialAmount, startYear, endYear]);

  return (
    <section id="calculator" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto p-6 md:p-8 bg-slate-900/50 backdrop-blur-lg border border-slate-700 rounded-xl shadow-2xl text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">Calculate Purchasing Power</h2>
        <p className="text-center text-slate-400 mb-8">See how the value of money has changed over the years due to inflation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label htmlFor="initialAmount" className="block text-sm font-medium text-slate-300 mb-2">Initial Amount ($)</label>
            <input type="number" id="initialAmount" value={initialAmount} onChange={(e) => setInitialAmount(e.target.value)} className="w-full bg-slate-800 border border-slate-600 rounded-md p-3 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" placeholder="e.g., 1000" />
          </div>
          <div>
            <label htmlFor="startYear" className="block text-sm font-medium text-slate-300 mb-2">Start Year</label>
            <input type="number" id="startYear" value={startYear} onChange={(e) => setStartYear(e.target.value)} className="w-full bg-slate-800 border border-slate-600 rounded-md p-3 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" placeholder="e.g., 1995" />
          </div>
          <div>
            <label htmlFor="endYear" className="block text-sm font-medium text-slate-300 mb-2">End Year</label>
            <input type="number" id="endYear" value={endYear} onChange={(e) => setEndYear(e.target.value)} className="w-full bg-slate-800 border border-slate-600 rounded-md p-3 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" placeholder="e.g., 2025" />
          </div>
        </div>

        <div className="mb-8">
            <label htmlFor="apiKey" className="block text-xs font-medium text-slate-400 mb-2">Placeholder API Endpoint</label>
            <input type="text" id="apiKey" value={apiKey} onChange={(e) => setApiKey(e.target.value)} className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 text-xs text-slate-400 focus:ring-1 focus:ring-yellow-400" />
        </div>

        <div className="text-center mb-8">
          <button onClick={handleCalculate} disabled={isLoading} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold py-3 px-12 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20 disabled:bg-slate-600 disabled:from-slate-600 disabled:to-slate-700 disabled:shadow-none disabled:cursor-not-allowed">
            {isLoading ? 'Calculating...' : 'Calculate Purchasing Power'}
          </button>
        </div>

        {error && <div className="text-center bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg">{error}</div>}

        {result && (
          <div className="mt-10 text-center p-6 md:p-8 bg-slate-800/70 border border-yellow-400/30 rounded-lg animate-fade-in shadow-2xl shadow-yellow-500/10">
            <p className="text-lg text-slate-300 mb-2">
              ${result.initialAmount.toLocaleString('en-US')} in <span className="font-bold text-yellow-400">{result.startYear}</span> is equivalent to
            </p>
            <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 my-4">
              ${result.equivalentValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-lg text-slate-300 mb-8">
              in <span className="font-bold text-yellow-400">{result.endYear}</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center border-t border-slate-600 pt-6">
              <div>
                <p className="text-slate-400 text-sm">Total Inflation Rate</p>
                <p className="text-2xl font-semibold text-white">{result.inflationRate.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Purchasing Power Lost</p>
                <p className="text-2xl font-semibold text-white">${result.powerLost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InflationCalculatorTool;