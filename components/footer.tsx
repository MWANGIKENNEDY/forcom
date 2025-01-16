import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-20">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start">
        <Link href="#" className="text-gray-800 hover:text-gray-600 font-bold text-lg  "><span className=' text-yellow-500'>Fortcom</span>{"  "}<span className=' text-cyan-500'>Realtors</span></Link>
        </div>
  
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2025. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer