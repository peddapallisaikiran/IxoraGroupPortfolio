import React from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface SearchPageProps {
  navigate: (page: string) => void;
}

const SuggestedPageButton: React.FC<{ text: string }> = ({ text }) => (
  <button className="flex items-center justify-between w-full bg-[#FEFBF9] border border-amber-100 rounded-lg px-4 py-3 text-left text-gray-800 font-semibold hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 group">
    <span>{text}</span>
    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#D4B258] text-white transform group-hover:scale-110 transition-transform">
      <ArrowRightIcon className="w-4 h-4" />
    </span>
  </button>
);

const FooterLink: React.FC<{ text: string; href?: string }> = ({ text, href = '#' }) => (
  <a href={href} className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-[#D4B258] transition-colors pb-1 inline-block">
    {text}
  </a>
);

const SearchPage: React.FC<SearchPageProps> = ({ navigate }) => {
  const DotPattern = ({ className }: { className?: string }) => (
    <div
      className={`absolute w-64 h-64 opacity-30 ${className}`}
      style={{
        backgroundImage: 'radial-gradient(circle, #FDE68A 2px, transparent 2px)', // amber-300 color
        backgroundSize: '1.2rem 1.2rem',
        maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
      }}
      aria-hidden="true"
    />
  );

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      {/* Search Section */}
      <section className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 lg:p-20 text-center overflow-hidden">
        <DotPattern className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
        <DotPattern className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800">
            Search
          </h1>
          <div className="mt-8 max-w-lg mx-auto relative">
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4B258]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-14 pl-14 pr-5 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-400 text-lg shadow-inner"
              aria-label="Search website"
            />
          </div>
        </div>
      </section>

      {/* Suggested Pages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Suggested pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SuggestedPageButton text="We are ICS" />
          <SuggestedPageButton text="Purpose & Values" />
          <SuggestedPageButton text="Services" />
          <SuggestedPageButton text="Sectors" />
          <SuggestedPageButton text="ESG" />
          <SuggestedPageButton text="Environmental" />
          <SuggestedPageButton text="Governance" />
          <SuggestedPageButton text="Social" />
        </div>
      </section>

      {/* Services and Sectors Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 mt-12 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          {/* Services Column */}
          <div className="mb-12 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Services</h3>
            <div className="grid grid-cols-2 gap-x-8">
              <div className="space-y-4 flex flex-col items-start">
                <FooterLink text="Cleaning" />
                <FooterLink text="Hard Services" />
                <FooterLink text="Security" />
                <FooterLink text="Passenger Services" />
                <FooterLink text="Front-of-house" />
              </div>
              <div className="space-y-4 flex flex-col items-start">
                <FooterLink text="Catering" />
                <FooterLink text="Pest Control" />
                <FooterLink text="Facilities Management" />
                <FooterLink text="Carbon & Energy" />
                <FooterLink text="Landscaping" />
              </div>
            </div>
          </div>
          {/* Sectors Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sectors</h3>
            <div className="grid grid-cols-2 gap-x-8">
              <div className="space-y-4 flex flex-col items-start">
                <FooterLink text="Commercial" />
                <FooterLink text="Distribution & Logistics" />
                <FooterLink text="Government" />
                <FooterLink text="Manufacturing" />
              </div>
              <div className="space-y-4 flex flex-col items-start">
                <FooterLink text="Data Centres" />
                <FooterLink text="Education" />
                <FooterLink text="Healthcare" />
                <FooterLink text="Retail" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;