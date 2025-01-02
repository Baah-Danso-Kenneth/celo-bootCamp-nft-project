"use client";

import React, { useEffect, useState } from "react";
import BannerPage from "@/components/sections/landingPage/bannerPage";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Faqs from "@/components/ui/faqs";
import RotationText from "@/components/ui/rotationText";
import TableParts from "@/components/ui/tableParts";
import AboutContent from "@/components/sections/landingPage/aboutContent";
import BePartSection from "@/components/sections/landingPage/bePartSection";
import CircleWithText from "@/components/shared/circle_rotate";
import ImageScroller from "@/components/shared/ImageScroller";
import Collection from "@/components/shared/Collection";
import Loader from "@/components/Loader";

function Home() {
  const [isLoader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoader) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <Header />
      <BannerPage />
      <TableParts />
      <AboutContent />
      <BePartSection />
      <Collection />
      <Faqs />
      <Footer />
    </div>

  );
}

export default Home;
