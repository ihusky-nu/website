"use client";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="navbar">
      <nav className="bg-[rgba(250,250,252,0.92)]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/ihusky-logo.png"
              width={60}
              height={40}
              alt="iHusky Logo"
            />
          </a>
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`w-full md:block md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-light flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <a
                  href="/home"
                  className="block py-2 px-3 text-gray-700 hover:text-black md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="block py-2 px-3 text-gray-700 hover:text-black md:p-0"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/workshops"
                  className="block py-2 px-3 text-gray-700 hover:text-black md:p-0"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="/officers"
                  className="block py-2 px-3 text-gray-700 hover:text-black md:p-0"
                >
                  Officers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3 text-gray-700 hover:text-black md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
