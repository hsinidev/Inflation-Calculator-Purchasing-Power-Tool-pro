import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import InflationCalculatorTool from './components/InflationCalculatorTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-12 md:py-24 text-center max-w-6xl">
        <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down drop-shadow-lg">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">Inflation</span> Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light">
            Discover the true value of your money over time. Instantly calculate historical purchasing power and understand the real impact of inflation on your savings.
            </p>
        </div>
        
        <InflationCalculatorTool />
        <SeoArticle />
      </div>
    </ThemeLayout>
  );
};

export default App;