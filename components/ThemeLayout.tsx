import React, { useState } from 'react';

interface ThemeLayoutProps {
  children: React.ReactNode;
}

const Modal: React.FC<{ title: string; content: React.ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in" onClick={onClose}>
        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto transform transition-all scale-100" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-slate-900/95 border-b border-slate-700 px-6 py-5 flex justify-between items-center z-10">
                <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
                <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 rounded-full w-8 h-8 flex items-center justify-center">&times;</button>
            </div>
            <div className="p-8 text-slate-300 leading-relaxed space-y-4">
                {content}
            </div>
        </div>
    </div>
);


const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const navLinks = ["About", "Contact", "Guide", "Privacy Policy", "Terms of Service", "DMCA"];

  const getModalContent = (modalName: string) => {
    switch(modalName) {
        case "About": return (
            <div className="space-y-4">
                <p>Welcome to the <strong>Inflation Calculator: Purchasing Power Tool</strong>.</p>
                <p>This comprehensive financial utility is designed to help users understand the eroding value of money over time due to inflation. By utilizing historical Consumer Price Index (CPI) data, our tool provides an accurate simulation of how purchasing power changes between any two given years.</p>
                <p><strong>Our Mission:</strong> To democratize financial literacy and provide accessible tools that empower individuals to make informed decisions about their savings, investments, and long-term financial planning.</p>
                <p>Built with modern web technologies including React, TypeScript, and Tailwind CSS, this project represents a commitment to high-quality, performant, and user-friendly software.</p>
                <div className="mt-4 pt-4 border-t border-slate-700">
                    <p className="text-sm text-slate-400">Version 1.2.0 | Developed by <a href="https://github.com/hsinidev" className="text-yellow-400 hover:underline">HSINI MOHAMED</a></p>
                </div>
            </div>
        );
        case "Contact": return (
            <div className="space-y-4">
                <p>We value your feedback and are here to assist with any questions or suggestions you may have regarding the Inflation Calculator.</p>
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">✉️</span> <strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="ml-2 hover:text-white transition-colors">hsini.web@gmail.com</a></li>
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">🌐</span> <strong>Website:</strong> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-white transition-colors">doodax.com</a></li>
                        <li className="flex items-center"><span className="text-yellow-400 mr-2">📍</span> <strong>Location:</strong> Global / Remote</li>
                    </ul>
                </div>
                <p>For technical support, partnerships, or press inquiries, please use the email address provided above. We aim to respond to all inquiries within 24-48 hours.</p>
            </div>
        );
        case "Guide": return (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">How to Use the Calculator</h3>
                <ol className="list-decimal pl-5 space-y-3 marker:text-yellow-400">
                    <li>
                        <strong>Enter Initial Amount:</strong> Input the monetary value you wish to calculate. This represents the amount of money in the starting year.
                    </li>
                    <li>
                        <strong>Select Start Year:</strong> Choose the year from which you want to begin the calculation. This is the base year for your amount.
                    </li>
                    <li>
                        <strong>Select End Year:</strong> Choose the target year to see what the equivalent purchasing power would be.
                    </li>
                    <li>
                        <strong>Calculate:</strong> Click the "Calculate Purchasing Power" button. The tool will process the data using historical CPI indices.
                    </li>
                    <li>
                        <strong>Analyze Results:</strong> Review the results, which include the equivalent value, the total cumulative inflation percentage, and the specific dollar amount of purchasing power lost.
                    </li>
                </ol>
                <p className="mt-4 text-sm bg-slate-800 p-4 rounded border-l-4 border-yellow-400">
                    <em>Note: Calculations are based on simulated Consumer Price Index (CPI) data and are intended for educational and informational purposes only.</em>
                </p>
            </div>
        );
        case "Privacy Policy": return (
            <div className="space-y-4 text-sm">
                <p><strong>Effective Date:</strong> October 27, 2023</p>
                <p>At <strong>doodax.com</strong> ("we", "our", "us"), we are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our Inflation Calculator application.</p>
                
                <h4 className="font-bold text-white mt-4">1. Information Collection</h4>
                <p>We do not collect, store, or transmit any personal data or financial information input into the calculator. All calculations are performed locally within your web browser. No data is sent to our servers.</p>
                
                <h4 className="font-bold text-white mt-4">2. Cookies and Local Storage</h4>
                <p>This application does not use tracking cookies or persistent local storage to track user behavior. We prioritize a private, stateless user experience.</p>
                
                <h4 className="font-bold text-white mt-4">3. Third-Party Links</h4>
                <p>Our website may contain links to third-party websites (e.g., GitHub). We are not responsible for the privacy practices or content of these external sites.</p>
                
                <h4 className="font-bold text-white mt-4">4. Changes to This Policy</h4>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                
                <h4 className="font-bold text-white mt-4">5. Contact Us</h4>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-yellow-400">hsini.web@gmail.com</a>.</p>
            </div>
        );
        case "Terms of Service": return (
            <div className="space-y-4 text-sm">
                <h4 className="font-bold text-white">1. Acceptance of Terms</h4>
                <p>By accessing and using this Inflation Calculator, you accept and agree to be bound by the terms and provision of this agreement.</p>
                
                <h4 className="font-bold text-white mt-4">2. Disclaimer of Warranties</h4>
                <p>The tools and content on this site are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
                
                <h4 className="font-bold text-white mt-4">3. Accuracy of Materials</h4>
                <p>The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. The financial data used is simulated for demonstration purposes.</p>
                
                <h4 className="font-bold text-white mt-4">4. Limitation of Liability</h4>
                <p>In no event shall doodax.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
            </div>
        );
        case "DMCA": return (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Digital Millennium Copyright Act (DMCA) Notice</h3>
                <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property infringement of any person or entity.</p>
                <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <a href="mailto:hsini.web@gmail.com" className="text-yellow-400">hsini.web@gmail.com</a>, with the subject line: "Copyright Infringement".</p>
                <p>You must include in your claim a detailed description of the alleged infringement as detailed under 17 U.S.C. 512(c)(3) of the DMCA.</p>
                <div className="bg-slate-800 p-4 rounded mt-4">
                    <p className="font-bold text-white">Designated Copyright Agent:</p>
                    <p>Mohamed Hsini</p>
                    <p>Email: hsini.web@gmail.com</p>
                    <p>Website: doodax.com</p>
                </div>
            </div>
        );
        default: return null;
    }
  }

  return (
    <div className="relative min-h-screen text-white font-sans flex flex-col">
      {/* Background is handled in index.html for global scope */}
      
      <div className="relative z-10 flex flex-col flex-grow">
        <header className="py-6 px-6 md:px-12 backdrop-blur-md bg-slate-900/40 border-b border-white/5 sticky top-0 z-40 transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
               <img src="/favicon.svg" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
               <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 tracking-tight">Inflation Calc</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {navLinks.map(link => (
                <button 
                    key={link} 
                    onClick={() => setActiveModal(link)} 
                    className="text-slate-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all text-sm font-medium tracking-wide uppercase"
                >
                  {link}
                </button>
              ))}
            </nav>
            <button className="md:hidden text-white p-2" onClick={() => setActiveModal('menu')}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </header>
        
        <main className="flex-grow container mx-auto px-4 md:px-0">
          {children}
        </main>
        
        <footer className="py-8 px-6 mt-12 backdrop-blur-md bg-black/60 border-t border-slate-800">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="font-semibold text-slate-200">Inflation Calculator &copy; {new Date().getFullYear()}</p>
              <p className="mt-1">Empowering financial decisions through data.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="flex space-x-4">
                 {navLinks.slice(0, 3).map(link => (
                    <button key={link} onClick={() => setActiveModal(link)} className="hover:text-yellow-400 transition-colors">{link}</button>
                 ))}
              </div>
              <p>
                  Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 font-bold hover:underline transition-all">HSINI MOHAMED</a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      {activeModal && activeModal !== 'menu' && (
        <Modal 
            title={activeModal} 
            content={getModalContent(activeModal)} 
            onClose={() => setActiveModal(null)} 
        />
      )}
      
      {activeModal === 'menu' && (
         <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center z-50 md:hidden animate-fade-in" onClick={() => setActiveModal(null)}>
            <div className="absolute top-6 right-6">
                <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-white p-2">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav className="flex flex-col space-y-6 text-center w-full px-8">
            <div className="flex items-center justify-center gap-2 mb-8">
               <img src="/favicon.svg" alt="Logo" className="w-12 h-12" />
               <h2 className="text-2xl font-bold text-white">Menu</h2>
            </div>
            {navLinks.map(link => (
                <button 
                    key={link} 
                    onClick={(e) => { e.stopPropagation(); setActiveModal(link); }} 
                    className="text-slate-300 hover:text-yellow-400 hover:bg-slate-800 py-4 rounded-xl transition-all text-xl font-medium border border-transparent hover:border-slate-700"
                >
                {link}
                </button>
            ))}
            </nav>
         </div>
      )}
    </div>
  );
};

export default ThemeLayout;