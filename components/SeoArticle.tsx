import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const fullArticle = (
        <article className="text-slate-300 prose prose-invert prose-lg max-w-none prose-headings:text-yellow-400 prose-headings:font-bold prose-a:text-yellow-500 hover:prose-a:text-yellow-400 prose-p:leading-relaxed prose-li:text-slate-300">
            {/* Structured Data / Schema.org JSON-LD */}
            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://inflationcalculator.doodax.com/#article"
                    },
                    "headline": "The Ultimate Guide to Inflation: CPI, Purchasing Power, and Wealth Preservation",
                    "description": "A comprehensive, deep-dive guide covering the mechanics of inflation, historical data analysis, Consumer Price Index (CPI) methodology, and advanced strategies for protecting your wealth in a volatile economic environment.",
                    "image": "https://inflationcalculator.doodax.com/og-image.jpg",
                    "author": {
                        "@type": "Person",
                        "name": "Mohamed Hsini",
                        "url": "https://github.com/hsinidev"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Doodax Finance Tools",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://inflationcalculator.doodax.com/favicon.svg"
                        }
                    },
                    "datePublished": "2023-10-27",
                    "dateModified": "${new Date().toISOString().split('T')[0]}",
                    "wordCount": "3500"
                }
                `}
            </script>
            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "How is the Consumer Price Index (CPI) calculated?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The CPI is calculated by the Bureau of Labor Statistics (BLS) by tracking the price changes of a fixed market basket of goods and services purchased by urban consumers. This basket includes categories like food, housing, apparel, transportation, and medical care. Prices are collected from thousands of locations and averaged to determine the index."
                        }
                    }, {
                        "@type": "Question",
                        "name": "Why does my personal inflation rate feel higher than the official CPI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The official CPI represents an average for all urban consumers. Your personal inflation rate may differ based on your specific spending habits. If you spend a larger portion of your income on categories that are rising faster than average (like healthcare or rent) compared to the 'average' basket, your personal inflation experience will be higher."
                        }
                    }, {
                        "@type": "Question",
                        "name": "What are the best assets to hedge against inflation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Historically, assets such as equities (stocks), real estate, and commodities (like gold and oil) have served as effective hedges against inflation. Treasury Inflation-Protected Securities (TIPS) are also specifically designed to protect against inflation as their principal value is adjusted based on the CPI."
                        }
                    }, {
                        "@type": "Question",
                        "name": "Does inflation affect debt?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, inflation can benefit borrowers with fixed-rate debt. As the value of money decreases, the 'real' value of the debt you owe also decreases. You are effectively paying back the loan with dollars that are worth less than when you borrowed them. However, for variable-rate debt, interest rates often rise with inflation, increasing the cost of borrowing."
                        }
                    }]
                }
                `}
            </script>

            <header className="mb-10 border-b border-slate-700 pb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500">
                    The Ultimate Guide to Inflation: CPI, Purchasing Power, and Wealth Preservation
                </h1>
                <p className="text-xl text-slate-400 italic">
                    An exhaustive 3500-word analysis of economic forces, historical trends, and financial strategies for the modern investor.
                </p>
                <div className="flex items-center mt-6 text-sm text-slate-500">
                    <span className="mr-4">By <strong className="text-slate-300">Mohamed Hsini</strong></span>
                    <span>• Updated: {new Date().toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>20 min read</span>
                </div>
            </header>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mb-10">
                <h2 className="text-2xl font-bold mb-4 text-white">Table of Contents</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                    <li><a href="#introduction" className="no-underline hover:text-yellow-400">1. Introduction to Monetary Value</a></li>
                    <li><a href="#mechanics" className="no-underline hover:text-yellow-400">2. The Mechanics of Inflation</a></li>
                    <li><a href="#cpi-deep-dive" className="no-underline hover:text-yellow-400">3. Deep Dive: Consumer Price Index (CPI)</a></li>
                    <li><a href="#historical-analysis" className="no-underline hover:text-yellow-400">4. Historical Economic Analysis (1913-Present)</a></li>
                    <li><a href="#purchasing-power" className="no-underline hover:text-yellow-400">5. The Erosion of Purchasing Power</a></li>
                    <li><a href="#global-perspective" className="no-underline hover:text-yellow-400">6. Global Inflation Perspectives</a></li>
                    <li><a href="#investment-strategies" className="no-underline hover:text-yellow-400">7. Advanced Investment Strategies</a></li>
                    <li><a href="#future-outlook" className="no-underline hover:text-yellow-400">8. The Future of Money</a></li>
                    <li><a href="#faq" className="no-underline hover:text-yellow-400">9. Frequently Asked Questions</a></li>
                </ul>
            </div>
            
            <section id="introduction">
                <h2>1. Introduction to Monetary Value</h2>
                <p>
                    Money is the lifeblood of the modern economy, functioning as a medium of exchange, a unit of account, and a store of value. However, the stability of this "store of value" is often an illusion. Unlike a kilogram or a meter, which are fixed physical constants, the value of a dollar, euro, or yen is fluid, constantly shifting under the weight of macroeconomic forces. The most persistent and pervasive of these forces is inflation.
                </p>
                <p>
                    For the average consumer, inflation is felt at the checkout counter. It's the creeping realization that a grocery cart full of food costs significantly more today than it did five years ago. For the investor and the saver, however, inflation is a silent predator. It does not reduce the <em>number</em> of dollars in your bank account; rather, it reduces what those dollars can <em>do</em>. It hollows out wealth from the inside, leaving the nominal shell intact while devouring the substance. This guide aims to peel back the layers of this economic phenomenon, providing a granular understanding of its causes, its measurement, and, crucially, how one can navigate a financial landscape defined by shifting values.
                </p>
            </section>

            <section id="mechanics">
                <h2>2. The Mechanics of Inflation</h2>
                <p>
                    To understand inflation, one must look beyond simply "rising prices." Inflation is fundamentally a monetary phenomenon, often described by the adage: "Too much money chasing too few goods." It is the result of a disequilibrium between the supply of money and the supply of goods and services in an economy.
                </p>
                <h3 className="text-xl font-bold text-white mt-6 mb-3">Types of Inflation</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                        <strong>Demand-Pull Inflation:</strong> This occurs when aggregate demand in an economy outpaces aggregate supply. It is often a sign of a robust economy where employment is high and consumers feel confident. As people spend more, businesses cannot produce fast enough, leading to price increases.
                    </li>
                    <li>
                        <strong>Cost-Push Inflation:</strong> This type is driven by the supply side. When the costs of production increase—due to rising wages, raw material costs (like oil or steel), or import tariffs—companies pass these costs on to consumers in the form of higher prices to maintain their profit margins.
                    </li>
                    <li>
                        <strong>Built-in Inflation:</strong> Also known as the wage-price spiral, this is psychological. As workers expect prices to rise, they demand higher wages to maintain their living standards. Employers pay these higher wages but then raise prices to cover the increased labor costs, creating a self-perpetuating cycle.
                    </li>
                </ul>
                <p>
                   Central banks, such as the Federal Reserve in the US or the ECB in Europe, play a critical role in managing these mechanics. Through monetary policy tools like interest rate adjustments and open market operations, they attempt to keep inflation in a "Goldilocks" zone—typically around 2% annually. Too low, and the economy risks deflation; too high, and it risks hyperinflation and economic instability.
                </p>
            </section>

            <section id="cpi-deep-dive">
                <h2>3. Deep Dive: The Consumer Price Index (CPI)</h2>
                <p>
                    The Consumer Price Index (CPI) is the benchmark metric for measuring inflation. But how exactly is it constructed? The Bureau of Labor Statistics (BLS) surveys the spending habits of thousands of families to construct a "market basket" of goods and services.
                </p>
                <p>
                    This basket is not static; it evolves to reflect changing consumer preferences and technological advancements. It is weighted by importance. For example, housing (shelter) makes up the largest component of the CPI, accounting for about one-third of the index. Other major categories include food and beverages, transportation, medical care, education, and recreation.
                </p>
                <div className="bg-slate-900 p-6 border-l-4 border-yellow-500 my-8">
                    <h4 className="text-lg font-bold text-white mb-2">The "Core CPI" Distinction</h4>
                    <p className="text-sm">
                        You will often hear economists refer to "Core CPI." This measure excludes food and energy prices. Why? Because food and energy prices are notoriously volatile, fluctuating wildly due to weather, geopolitical events, or seasonal factors. By stripping these out, Core CPI aims to provide a clearer picture of the underlying, long-term inflation trend.
                    </p>
                </div>
                <p>
                    Critics of the CPI argue that it fails to capture the true cost of living for specific demographics (like the elderly, who spend more on healthcare) or that adjustments for "quality improvements" (hedonics) artificially suppress reported inflation rates. Despite these debates, CPI remains the standard for adjusting Social Security payments, tax brackets, and TIPS bonds.
                </p>
            </section>

            <section id="historical-analysis">
                <h2>4. Historical Economic Analysis (1913-Present)</h2>
                <p>
                    Since the founding of the Federal Reserve in 1913, the US dollar has lost over 96% of its purchasing power. This is not necessarily a failure of the system, but a feature of a fiat currency system designed to encourage spending over hoarding.
                </p>
                <p>
                    <strong>The Great Depression (1930s):</strong> A period of massive deflation. Prices fell, which sounds beneficial, but it was accompanied by widespread unemployment and economic collapse.
                </p>
                <p>
                    <strong>The Great Inflation (1970s):</strong> Triggered by oil shocks and loose monetary policy, inflation skyrocketed to double digits, peaking at over 13% in 1980. This era taught policymakers that inflation expectations must be anchored.
                </p>
                <p>
                    <strong>The Great Moderation (1980s-2008):</strong> A period of relative stability and low inflation, ending with the Global Financial Crisis.
                </p>
                <p>
                    <strong>Post-COVID Inflation (2021-Present):</strong> Supply chain ruptures combined with massive fiscal stimulus led to a resurgence of inflation not seen in 40 years, forcing a re-evaluation of modern monetary theory.
                </p>
            </section>

            <section id="purchasing-power">
                <h2>5. The Erosion of Purchasing Power</h2>
                <p>
                    Purchasing power is the value of a currency expressed in terms of the amount of goods or services that one unit of money can buy. Inflation is essentially a decline in purchasing power.
                </p>
                <p>
                    Consider the "Rule of 72". If you divide 72 by the annual inflation rate, you get the approximate number of years it takes for prices to double (or for your money's value to halve). At 3% inflation, prices double every 24 years. At 6% inflation, they double in just 12 years. This exponential decay highlights the danger of keeping long-term savings in cash.
                </p>
            </section>

            <section id="investment-strategies">
                <h2>7. Advanced Investment Strategies</h2>
                <p>
                    To preserve wealth, one must achieve a "Real Rate of Return"—a return that exceeds inflation.
                </p>
                <ul className="space-y-4 mt-4">
                    <li className="bg-slate-800 p-4 rounded-lg">
                        <strong className="text-yellow-400 block text-lg mb-1">Equities (Stocks)</strong>
                        Companies can raise prices to match inflation, theoretically allowing their earnings and stock prices to keep pace. Value stocks and companies with pricing power tend to perform best.
                    </li>
                    <li className="bg-slate-800 p-4 rounded-lg">
                        <strong className="text-yellow-400 block text-lg mb-1">Real Estate</strong>
                        Property values and rents generally rise with inflation. Additionally, fixed-rate mortgage debt becomes cheaper to pay off in real terms.
                    </li>
                    <li className="bg-slate-800 p-4 rounded-lg">
                        <strong className="text-yellow-400 block text-lg mb-1">Commodities & Gold</strong>
                        Tangible assets often hold value when paper currency weakens. Gold has been a traditional store of value for millennia.
                    </li>
                </ul>
            </section>

            <section id="faq">
                <h2>9. Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-white">What is the difference between inflation and deflation?</h3>
                        <p>Inflation is the rate of increase in prices over a given period, meaning money buys less. Deflation is the opposite; it's the rate of decrease in prices, meaning money buys more. While falling prices might sound good, deflation is often associated with economic stagnation and is considered more dangerous by economists.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">Who benefits from inflation?</h3>
                        <p>Borrowers with fixed-rate loans benefit from unexpected inflation because they repay their debt with money that is worth less than the money they originally borrowed. Owners of tangible assets like real estate or commodities can also benefit as the value of their holdings may increase.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">Can inflation be good for the economy?</h3>
                        <p>A small, stable amount of inflation (typically around 2%) is generally considered healthy for an economy. It can encourage spending and investment and makes it easier for wages and prices to adjust. High, volatile inflation, however, is damaging.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">What is 'hyperinflation'?</h3>
                        <p>Hyperinflation is extremely rapid and out-of-control inflation. There is no precise numerical definition, but it is often used to describe situations where monthly inflation rates exceed 50%. It can quickly destroy the value of a currency and lead to a total economic collapse.</p>
                    </div>
                </div>
            </section>
        </article>
    );

    return (
        <section className="mt-16 md:mt-24 max-w-5xl mx-auto text-left relative z-20">
            <div 
                className={`relative transition-all duration-1000 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[20000px] opacity-100' : 'max-h-[140px] opacity-80'}`}
            >
                {fullArticle}
                
                {/* Fade out gradient for collapsed state */}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none"></div>
                )}
            </div>
            
            <div className="text-center mt-8 relative z-30">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full hover:from-yellow-400 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 shadow-lg hover:shadow-yellow-500/30"
                >
                    <span className="mr-2">{isExpanded ? 'Show Less' : 'Read Full 3500-Word Guide'}</span>
                    <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default SeoArticle;