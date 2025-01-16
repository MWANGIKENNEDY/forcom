import React from 'react'
import { allProps } from './allProperties'
import Image from 'next/image';

const FeaturedProperties = () => {
  return (
    <section className=' container mt-12 lg:mt-24'>

        <h1 className=' text-2xl font-semibold lg:text-3xl text-center mb-10 text-cyan-600'>Featured Properties</h1>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {allProps.map((property, index) => (
        <div key={index} className="rounded overflow-hidden shadow-lg bg-white">
          {/* Image Section */}
          <div className="relative w-full h-64">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="p-4">
            <h1 className="text-xl font-bold">{property.title}</h1>
            <p className="font-semibold text-cyan-500">{property.price}</p>
            <p className="text-sm">
              <span className="font-semibold">Property size:</span>{' '}
              {property.propertySize}
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-gray-500">{property.submitDatee}</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-cyan-500 text-white text-sm uppercase rounded hover:bg-cyan-600">
                  Added
                </button>
                <button className="px-4 py-2 border border-cyan-500 text-cyan-500 text-sm uppercase rounded hover:bg-cyan-500 hover:text-white">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </section>
  )
}

export default FeaturedProperties