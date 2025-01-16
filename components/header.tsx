"use client";
import * as React from "react";
import Select from "react-select";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import Image from "next/image";

const options = [
  { value: "", label: "Select House", style: "bg-red-500" },
  { value: "chocolate", label: "Land", className: "bg-red-500" },
  { value: "strawberry", label: "Apartment", className: "bg-red-500" },
  { value: "vanilla", label: "House", className: "bg-red-500" },
  { value: "vanilla", label: "Villa", className: "bg-red-500" },
];

const options2 = [
  { value: "", label: "Offer Type", style: "bg-red-500" },
  { value: "chocolate", label: "Active", className: "bg-red-500" },
  { value: "strawberry", label: "For Rent", className: "bg-red-500" },
  { value: "vanilla", label: "For Sale", className: "bg-red-500" },
  { value: "vanilla", label: "Hot Offer", className: "bg-red-500" },
  { value: "vanilla", label: "No Fees", className: "bg-red-500" },
  { value: "vanilla", label: "Open House", className: "bg-red-500" },
];

const customStyles = {
  option: (defaultStyles:any, state:any) => ({
    ...defaultStyles,
    color: state.isSelected ? "#6b7280" : "#6b7280", // Gray-500 for both selected and unselected states
    backgroundColor: state.isSelected ? "#e5e7eb" : "#fff", // Light gray for selected, white for unselected
  }),

  control: (defaultStyles:any) => ({
    ...defaultStyles,
    backgroundColor: "#fff", // White background for control
    paddingTop: "3px",
    paddingBottom: "3px",
    border: "1px solid #d1d5db", // Light gray border
    boxShadow: "none",
  }),

  singleValue: (defaultStyles:any) => ({
    ...defaultStyles,
    color: "#6b7280", // Gray-500 for single selected value text
  }),
};


const carouselData = [
  {
    image:
      "https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Kisauni Homes for sale",
    price: "Ksh200000",
  },

  {
    image:
      "https://images.unsplash.com/photo-1519227355453-8f982e425321?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Prime property in Kileleshwa",
    price: "Ksh45000000",
  },

  {
    image:
      "https://images.unsplash.com/photo-1526000130-b9ea509bfbf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2VzfGVufDB8fDB8fHww",
    text: "Real Estate project in Westlands, Nairobi.",
    price: "Ksh5000000",
  },

  {
    image:
      "https://images.unsplash.com/photo-1526000130-b9ea509bfbf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2VzfGVufDB8fDB8fHww",
    text: "Kisauni Homes for sale",
    price: "Ksh80000000",
  },
];

export default function CarouselDemo() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className=" w-full relative  lg:mt-[4.5rem]">
      <Carousel
        className="w-full "
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={
          [
            Autoplay({
              delay: 5000,
            }),
          ]
        }
      >
        <CarouselContent>
          {carouselData.map((dt, index) => (
            <CarouselItem key={index} className="">
              <Card className="">
                <CardContent className=" h-auto py-4 min-h-[30rem] w-full relative z-10">
                  <Image
                    src={dt.image}
                    alt=""
                    fill
                    className="object-cover w-full h-full "
                  />

                  <div className=" absolute bottom-[9rem] container left-0 right-0 z-20 mx-auto lg:hidden">
                    <div className=" bg-white mx-auto max-w-[300px] p-4">
                      <h1 className="text-3xl uppercase text-gray-500 font-semibold   ">
                        {dt.text}
                      </h1>
                    </div>
                  </div>

                  <div className=" absolute bottom-[7rem] container left-0 right-0 z-20 mx-auto hidden lg:block">
                    <div className=" bg-white w-max max-w-6xl p-4 py-6 relative">
                      <h1 className="text-4xl pb-3 uppercase line-clamp-5 text-ellipsis overflow-hidden text-gray-500 font-semibold   ">
                        {dt.text}
                      </h1>
                      <div className="absolute text-4xl px-4 font-semibold bg-cyan-600  text-white -right-12 -bottom-[1rem]">
                      {dt.price}
                    </div>
                    </div>

                    
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute transform -translate-y-1/2  top-1/2 left-[10px]" />
        <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-[10px]" />
      </Carousel>

      <div className=" h-0 overflow-visible absolute bottom-[3rem] left-0 right-0 w-full  container ">
        <div className="flex flex-col lg:flex-row gap-3 bg-yellow-50  py-6 px-2 border-t-[7px] border-cyan-500">
          <div className="lg:flex-1">
            <label htmlFor="propertyType" className="text-xs text-gray-500 uppercase font-semibold">
              Property type
            </label>
            <Select
              styles={customStyles}
              id="propertyType"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>

          <div className="lg:flex-1">
            <label htmlFor="propertyType" className="text-xs uppercase text-gray-500 font-semibold">
              Offer type
            </label>
            <Select
              styles={customStyles}
              id="offerType"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options2}
            />
          </div>

          <div className="lg:flex-1">
  <label htmlFor="propertyType" className="text-xs uppercase text-gray-500 font-semibold">
    Price
  </label>
  <div className="flex items-center justify-between gap-4">
    <input
      type="text"
      className="w-full bg-white text-gray-500 py-2 px-4 border border-gray-300 rounded focus:outline-none "
      placeholder="Min Price..."
    />
    <input
      type="text"
      className="w-full bg-white text-gray-500 py-2 px-4 border border-gray-300 rounded focus:outline-none "
      placeholder="Max Price..."
    />
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
