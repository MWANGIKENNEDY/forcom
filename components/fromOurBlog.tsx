"use client"
import React from 'react';

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const data = [
  {
    title: "Investing in Kenya from the Diaspora: Welcome to the Development Triangle",
    desc: "Discover how the diaspora can actively shape Kenya’s growth through strategic investments in real estate, technology, and education, fostering sustainable development and strengthening community ties."
  },
  {
    title: "Exploring Opportunities in Renewable Energy: A Bright Future",
    desc: "Unleash the potential of renewable energy in Kenya, from solar farms to wind power projects, paving the way for a cleaner, greener, and more self-reliant energy future."
  },
  {
    title: "Nairobi: Africa’s Thriving Tech and Innovation Hub",
    desc: "Dive into Nairobi’s booming tech ecosystem, often called Silicon Savannah, where startups and global companies converge to drive innovation and create lasting economic impact."
  },
  {
    title: "Empowering Communities Through Agribusiness Investments",
    desc: "Invest in agribusiness to transform Kenyan communities by creating sustainable food systems, job opportunities, and a pathway to economic growth while addressing local and global food security challenges."
  },
  {
    title: "The Cultural Renaissance: Promoting Kenya’s Art and Heritage",
    desc: "Support Kenya’s vibrant art scene and heritage projects, fostering cultural preservation and empowering local artists to showcase their talents on the global stage."
  },
  {
    title: "Building Resilient Infrastructure for Kenya’s Future",
    desc: "Explore investment in Kenya’s critical infrastructure projects, enhancing connectivity, urban planning, and sustainability while laying the foundation for long-term economic stability and growth."
  }
];

const FromOurBlog = () => {
  return (
  
    <section className=' mt-12 lg:mt-24 container'>

    <h1 className=' text-2xl font-semibold lg:text-3xl text-center mb-10 text-cyan-600'>From Our Blog</h1>
<div className="slider-container mt-4">
<Slider {...settings} >
      {data.map((item, index) => (
      <div
      key={index}
      className="p-4 flex flex-col h-[300px] relative bg-white rounded shadow-lg"
    >
      <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
      <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
    
     
        <button className="px-4 absolute bottom-4 right-4 py-2 border border-cyan-500 text-cyan-500 text-sm uppercase rounded hover:bg-cyan-500 hover:text-white">
          Read More
        </button>
   
    </div>
      ))}

      </Slider>

      </div>

      </section>

  );
};

export default FromOurBlog;
