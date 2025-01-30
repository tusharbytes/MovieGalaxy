import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="container mx-auto px-6 py-10">
        {/* Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Movies Now Showing */}
          <div>
            <h3 className="text-white font-semibold mb-3">MOVIES NOW SHOWING</h3>
            <ul className="space-y-2">
              <li>Dune</li>
              <li>Sky Force</li>
              <li>The House of Dead Horror</li>
              <li>Ramayana: The Legend of Prince Rama</li>
              <li>Emergency</li>
            </ul>
          </div>

          {/* Events in Top Cities */}
          <div>
            <h3 className="text-white font-semibold mb-3">EVENTS IN TOP CITIES</h3>
            <ul className="space-y-2">
              <li>Events in Mumbai</li>
              <li>Events in Delhi-NCR</li>
              <li>Events in Chennai</li>
              <li>Events in Bengaluru</li>
              <li>Events in Hyderabad</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">HELP</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Press Releases</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* BookMyShow Exclusives */}
          <div>
            <h3 className="text-white font-semibold mb-3">MOVIEGALAXY EXCLUSIVES</h3>
            <ul className="space-y-2">
              <li>Lollapalooza India</li>
              <li>BookASmile</li>
              <li>Corporate Vouchers</li>
              <li>Gift Cards</li>
              <li>Stream & Trailers</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2025 MovieGalaxy Clone. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
