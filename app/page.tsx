import AllProperties from "@/components/allProperties";
import FeaturedProperties from "@/components/featuredProperties";
import CarouselDemo from "@/components/header";



import React from "react";
import WhatsHot from "@/components/whatsHot";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FromOurBlog from "@/components/fromOurBlog";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

const HomePage = () => {
  return (
    <>
      <CarouselDemo />
      <p className=" mt-[17rem] lg:mt-[7rem] text-black"></p>
      <AllProperties />
      <FeaturedProperties />
      <WhatsHot/>
      <FromOurBlog/>
      <Gallery/>
      <Footer/>
    </>
  );
};

export default HomePage;
