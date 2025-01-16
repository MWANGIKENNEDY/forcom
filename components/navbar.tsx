import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full  bg-white shadow-md py-3 fixed top-0 z-10  left-0 right-0 text-sm hidden lg:block"> 
  {/* Main Navigation */}
  <nav className="flex container space-x-6 items-center justify-between px-4 py-3">
    {/* Home */}
    <Link href="#" className="text-gray-800 hover:text-gray-600 font-bold text-lg  "><span className=' text-yellow-500'>Fortcom</span>{"  "}<span className=' text-cyan-500'>Realtors</span></Link>


<div className=' flex space-x-6 items-center justify-between '>

        {/* Properties Dropdown */}
        <div className="relative group ">
      <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center space-x-1">
        <span className=' text-cyan-500'>Properties</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-300 mt-2 rounded shadow-lg z-10 w-max">
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Residential</Link>
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Commercial</Link>
      </div>
    </div>

    {/* Blog */}
    <Link href="#" className="text-cyan-500 ">Blog</Link>

    {/* Our Partners Dropdown */}
    <div className="relative group">
      <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center space-x-1">
        <span className=' text-cyan-500'>Our Partners</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-300 mt-2 rounded shadow-lg z-10 w-max">
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Investors</Link>
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Suppliers</Link>
      </div>
    </div>

    {/* Events */}
    <Link href="#" className="text-cyan-500 hover:text-gray-600">Events</Link>

    {/* FAQ */}
    <Link href="#" className="text-cyan-500 hover:text-gray-600">FAQ</Link>

    {/* Project Dropdown */}
    <div className="relative group">
      <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center space-x-1">
        <span className=' text-cyan-500'>Project</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-300 mt-2 rounded shadow-lg z-10 w-max">
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Ongoing</Link>
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Completed</Link>
      </div>
    </div>

    {/* Company Dropdown */}
    <div className="relative group">
      <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center space-x-1">
        <span className=' text-cyan-500'>Company</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-300 mt-2 rounded shadow-lg z-10 w-max">
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</Link>
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Team</Link>
      </div>
    </div>

    {/* Knowledge Base */}
    <Link href="#" className="text-cyan-500 hover:text-gray-600">Knowledge Base</Link>

    {/* Booking Dropdown */}
    <div className="relative group">
      <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center space-x-1">
        <span className=' text-cyan-500'>Booking</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-300 mt-2 rounded shadow-lg z-10 w-max">
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Hotels</Link>
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Flights</Link>
        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Car Rentals</Link>
      </div>
    </div>


</div>

  </nav>
</div>

  )
}

export default Navbar