import React from 'react';
import Image from 'next/image';

export const allProps = [
  {
    image: "https://images.unsplash.com/photo-1505819244306-ef53954f9648?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdXNlfGVufDB8fDB8fHww",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, sequi.",
    price: "Ksh200,000",
    propertySize: "50X100ft",
    submitDatee: "10 months ago",
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlfGVufDB8fDB8fHww",
    title: "Spacious and modern house with stunning views of the countryside.",
    price: "Ksh300,000",
    propertySize: "60X120ft",
    submitDatee: "8 months ago",
  },
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA=",
    title: "Charming family home in a quiet neighborhood, perfect for families.",
    price: "Ksh250,000",
    propertySize: "45X90ft",
    submitDatee: "12 months ago",
  },
  {
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Modern villa with luxurious amenities and a private swimming pool.",
    price: "Ksh500,000",
    propertySize: "100X150ft",
    submitDatee: "6 months ago",
  },
  {
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Rustic home surrounded by lush greenery, a perfect escape from the city.",
    price: "Ksh180,000",
    propertySize: "40X80ft",
    submitDatee: "11 months ago",
  },
  {
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Elegant urban property with modern finishes and prime location.",
    price: "Ksh400,000",
    propertySize: "70X140ft",
    submitDatee: "9 months ago",
  },
];

const AllProperties = () => {
  return (

    <section className='container'>

<h1 className=' text-2xl font-semibold lg:text-3xl text-center mb-10 text-cyan-600'>All Properties</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
  
  );
};

export default AllProperties;
