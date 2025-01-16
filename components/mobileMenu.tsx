"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" fixed z-50 bg-white w-full left-0 right-0 flex items-center justify-between container mx-auto px-4 py-3 lg:hidden">
<Link href="#" className="text-gray-800 hover:text-gray-600 font-bold text-lg  "><span className=' text-yellow-500'>Fortcom</span>{"  "}<span className=' text-cyan-500'>Realtors</span></Link>

      <button onClick={() => setOpen(!open)} className="p-2">
        {open ? <FaTimes /> : <FaBars />}
      </button>



      {open && (
        <div className="  mx-auto w-[95%] mt-6 absolute top-[2.2rem] left-0 right-0 z-50">
          {/* Main Navigation */}
          <nav className="bg-white border border-gray-300 rounded shadow-lg">
            {/* Home */}
            <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded">
              Home
            </Link>

            {/* Properties Dropdown */}
            <details className="border-t border-gray-300">
              <summary className="cursor-pointer list-none px-4 py-3 flex justify-between items-center text-gray-800 hover:bg-gray-100">
                Properties
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 transform transition-transform duration-300 details-[open]:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 py-2 space-y-2">
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Residential
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Commercial
                </Link>
              </div>
            </details>

            {/* Blog */}
            <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded">
              Blog
            </Link>

            {/* Our Partners Dropdown */}
            <details className="border-t border-gray-300">
              <summary className="cursor-pointer list-none px-4 py-3 flex justify-between items-center text-gray-800 hover:bg-gray-100">
                Our Partners
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 transform transition-transform duration-300 details-[open]:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 py-2 space-y-2">
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Investors
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Suppliers
                </Link>
              </div>
            </details>

            {/* Events */}
            <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded">
              Events
            </Link>

            {/* FAQ */}
            <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded">
              FAQ
            </Link>

            {/* Project Dropdown */}
            <details className="border-t border-gray-300">
              <summary className="cursor-pointer list-none px-4 py-3 flex justify-between items-center text-gray-800 hover:bg-gray-100">
                Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 transform transition-transform duration-300 details-[open]:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 py-2 space-y-2">
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Ongoing
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Completed
                </Link>
              </div>
            </details>

            {/* Company Dropdown */}
            <details className="border-t border-gray-300">
              <summary className="cursor-pointer list-none px-4 py-3 flex justify-between items-center text-gray-800 hover:bg-gray-100">
                Company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 transform transition-transform duration-300 details-[open]:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 py-2 space-y-2">
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  About Us
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Our Team
                </Link>
              </div>
            </details>

            {/* Knowledge Base */}
            <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded">
              Knowledge Base
            </Link>

            {/* Booking Dropdown */}
            <details className="border-t border-gray-300">
              <summary className="cursor-pointer list-none px-4 py-3 flex justify-between items-center text-gray-800 hover:bg-gray-100">
                Booking
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 transform transition-transform duration-300 details-[open]:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 py-2 space-y-2">
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Hotels
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Flights
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded">
                  Car Rentals
                </Link>
              </div>
            </details>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
