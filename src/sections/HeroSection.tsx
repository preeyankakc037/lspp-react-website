import React, { useState } from 'react';
import ScrollLine from '../components/layout/ScrollLine';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Perks', href: '#perks' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Student Partners', href: '#student-partners' },
  { label: 'FAQ', href: '#faq' },
];

const HeroSection: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Sticky wrapper — full width, sits on top */}
      <div className="sticky top-0 z-50 w-full px-4 md:px-8 pt-4 pb-2">

        {/* Floating pill navbar */}
        <div className="relative max-w-6xl mx-auto bg-white rounded-full shadow-lg shadow-black/10 border border-gray-100 px-5 py-3 flex items-center justify-between overflow-hidden">

          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="/leapLogo.png"
              alt="Leapfrog Logo"
              className="h-7 object-contain"
            />
          </div>

          {/* Center: Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#apply"
              className="px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-all duration-200 shadow-sm"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* ScrollLine progress bar at bottom of pill */}
          <ScrollLine />
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white rounded-3xl shadow-lg border border-gray-100 px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="mt-1 px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full text-center hover:bg-gray-700 transition-all duration-200"
            >
              Apply Now
            </a>
          </div>
        )}
      </div>

      {/* Main Hero Container */}
      <section className="py-12 md:py-20 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="flex items-start gap-4">
            <img
              src="/logo.png"
              alt="Leapfrog Student Partnership Program Logo"
              className="w-12 h-12 object-contain shrink-0 mt-0.5"
            />
            <div className="-space-y-0.5">
              <h4 className="text-gray-900 font-bold text-base leading-tight">Leapfrog</h4>
              <p className="text-gray-600 font-medium text-sm">Student Partnership Program</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#004B45] tracking-tight leading-[1.1]">
            Learn, Lead and Grow
          </h1>

          <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed max-w-xl">
            Learn new and in-demand skills, grow your network, and build your future in a career that interests you the most.
          </p>
        </div>

        {/* Right Column Content Image Frame */}
        <div className="lg:col-span-6 w-full">
          <div className="w-full overflow-hidden rounded-[2.5rem] shadow-xs">
            <img
              src="/leapfrog.JPG"
              alt="Leapfrog Student Partners Cohort Group"
              className="w-full h-auto object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) parent.className += " aspect-[4/3] bg-gray-100 flex items-center justify-center border text-gray-400 font-mono text-xs";
                if (parent) parent.innerHTML = "Drop 'leapfrog.JPG' into your public folder";
              }}
            />
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;