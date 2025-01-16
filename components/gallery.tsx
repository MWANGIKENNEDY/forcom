"use client"
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageData = [
    {
      img: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.unsplash.com/photo-1526000130-b9ea509bfbf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2VzfGVufDB8fDB8fHww",
    },
    {
      img: "https://images.unsplash.com/photo-1489370321024-e0410ad08da4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2VzfGVufDB8fDB8fHww",
    },
    {
      img: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1444212568492-d2799d30943b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1471477464302-eb430383ff16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="container mt-12 lg:mt-32">
      <h1 className="text-2xl font-semibold lg:text-3xl text-center mb-10 text-cyan-600">Gallery</h1>
      <Slider {...settings}>
        {imageData.map((image, index) => (
          <div key={index} className="relative h-[600px]">
            <Image
              src={image.img}
              alt={`Gallery image ${index + 1}`}
              fill
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
