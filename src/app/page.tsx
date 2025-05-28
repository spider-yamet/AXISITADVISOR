import HeroBanner from "@/components/Home/PaidSearchAdAgency/HeroBanner";
import MeetOurExperts from "@/components/Home/PaidSearchAdAgency/MeetOurExperts";
import BorderLine from "@/components/Common/BorderLine";
import WhatWeDo from "@/components/Home/PaidSearchAdAgency/WhatWeDo";
import FunFacts from "@/components/Home/PaidSearchAdAgency/FunFacts";
import ServicesCard from "@/components/Home/PaidSearchAdAgency/ServicesCard";
import OurProcess from "@/components/Home/PaidSearchAdAgency/OurProcess";
import AwardWinningAgency from "@/components/Home/PaidSearchAdAgency/AwardWinningAgency";
import SuccessStories from "@/components/Home/PaidSearchAdAgency/SuccessStories";
import BrandsSlider from "@/components/Common/BrandsSlider";
import TestimonialsSlider from "@/components/Common/TestimonialsSlider";
import Cta from "@/components/Common/Cta";
import OurBlog from "@/components/Common/OurBlog";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <div className="gradient-bg">

        <Navbar />
        
        <HeroBanner />

        <MeetOurExperts />
      </div>

      <BorderLine />

      <WhatWeDo />

      <FunFacts />

      <div className="gradient-bg-two pt-[260px] md:pt-[270px] lg:pt-[310px]">
        {/* <ServicesCard /> */}

        <OurProcess />
      </div>

      <AwardWinningAgency />

      <div className="gradient-bg-two pt-[190px]">
        <SuccessStories />

        <BorderLine />
      </div>

      <TestimonialsSlider />

      {/* <div className="gradient-bg-two pt-[190px]">
        <Cta />
      </div> */}

      {/* <OurBlog /> */}

      <Footer />
    </>
  );
}
