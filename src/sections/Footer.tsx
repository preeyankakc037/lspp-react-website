import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2937] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <h3 className="text-xl font-bold mb-3">Join our newsletter</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm">
            Sign up to stay updated with the latest insights, news, and more.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg w-full max-w-[250px] outline-none"
            />
            <button className="bg-[#00A859] px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
              Subscribe
            </button>
          </form>
        </div>

        <div className="md:text-right">
          <div className="text-2xl font-bold mb-4 italic">leapfrog</div>
          <div className="flex flex-col md:flex-row md:justify-end gap-4 text-sm text-gray-400">
            <p>Copyright 2026 Leapfrog Technology Inc. All rights reserved.</p>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Data Subject Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;