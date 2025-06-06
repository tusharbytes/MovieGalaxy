import React from "react";

const Footer = () => {
  return (
    <footer className="  text-gray-400 text-sm font-sans">
      <div className="container mx-auto px-6 py-12">
        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-10">
          {/* Movies Now Showing */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">
              🎬 Movies Now Showing
            </h3>
            <ul className="space-y-2">
              {["Dune", "Sky Force", "The House of Dead Horror", "Ramayana: The Legend of Prince Rama", "Emergency"].map((movie, i) => (
                <li key={i} className="hover:text-white transition duration-300">{movie}</li>
              ))}
            </ul>
          </div>

          {/* Events in Top Cities */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">
              📍 Events in Top Cities
            </h3>
            <ul className="space-y-2">
              {["Mumbai", "Delhi-NCR", "Chennai", "Bengaluru", "Hyderabad"].map((city, i) => (
                <li key={i} className="hover:text-white transition duration-300">Events in {city}</li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
      

          {/* MovieGalaxy Exclusives */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">
              🌟 MovieGalaxy Exclusives
            </h3>
            <ul className="space-y-2">
              {["Lollapalooza India", "BookASmile", "Corporate Vouchers", "Gift Cards", "Stream & Trailers"].map((item, i) => (
                <li key={i} className="hover:text-white transition duration-300">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs space-y-4 md:space-y-0">
          <p>© 2025 MovieGalaxy Clone. All Rights Reserved.</p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Contact"].map((link, i) => (
              <span key={i} className="hover:text-white cursor-pointer transition duration-300">
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
