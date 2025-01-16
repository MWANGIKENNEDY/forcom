"use client";

import Image from "next/image";
import React from "react";
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
  { title: "Naivasha", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Kiambu", image: "https://images.unsplash.com/photo-1496871455396-14e56815f1f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Machakos", image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Nairobi", image: "https://images.unsplash.com/photo-1427694012323-fb5e8b0c165b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHl8ZW58MHx8MHx8fDA%3D" },
  { title: "Kitale", image: "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNpdHl8ZW58MHx8MHx8fDA%3D" },
  { title: "Eldoret", image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNpdHl8ZW58MHx8MHx8fDA%3D" },
];

const WhatsHot = () => {
  return (
    <section className="mt-12 lg:mt-24 container">
      <h1 className="text-2xl font-semibold lg:text-3xl text-center mb-10 text-cyan-600">
        {"Find Out What's Hot"}
      </h1>

      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className={`h-[200px] relative flex items-center justify-center rounded-md shadow-md`}>
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md z-20"></div>

              {item.image && <Image src={item.image} alt="" fill className=" object-cover h-full w-full z-10"/>}
                <h2 className="text-2xl text-white font-bold z-30 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">{item.title}</h2>
             
            
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatsHot;
