import React, { useState } from "react";
import { Menu, X, ShoppingCart, Sun } from "lucide-react";

// This component assumes you have installed lucide-react (npm install lucide-react)
// and have Tailwind CSS setup.

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Orders", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Team", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-[#008145] p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </div>
            <span className="ml-3 text-2xl font-bold text-[#37393D]">
              CampusEats
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Navlink
                key={item.name}
                href={item.href}
                className="text-[#37393D] hover:text-[#008145] font-bold text-sm"
              >
                {item.name}
              </Navlink>
            ))}
          </div>

          {/* Desktop Icons & Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-lg text-[#37393D] hover:bg-[#e6f3ec]">
              <Sun size={24} />
            </button>
            <button className="relative p-2 rounded-lg text-[#37393D] hover:bg-[#e6f3ec]">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </button>
            <Navlink
              href="#"
              className="bg-[#008145] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#006f3c] transition duration-200"
            >
              Get Started
            </Navlink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-lg text-[#37393D] hover:bg-[#e6f3ec]">
              <Sun size={24} />
            </button>
            <button className="relative p-2 rounded-lg text-[#37393D] hover:bg-[#e6f3ec]">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 space-y-2">
          {navItems.map((item) => (
            <Navlink
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-sm font-bold text-[#37393D] hover:bg-[#e6f3ec] hover:text-[#008145]"
            >
              {item.name}
            </Navlink>
          ))}
          <Navlink
            href="#"
            className="block w-full text-center bg-[#008145] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#006f3c] transition duration-200"
          >
            Get Started
          </Navlink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return <h1>hello</h1>;
// };

// export default Navbar;
