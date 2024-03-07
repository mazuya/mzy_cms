// pages/index.tsx or any other page
import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Analytics from "./component/Analytics";
import Newslatter from "./component/Newslatter";
import Card from "./component/Card";

function HomePage() {
  return (
    <div className="bg-[#EEEBE6] text-[#8B6A2F]">
      <Hero />
      <Analytics />
      <Newslatter />
      <Card />
    </div>
  );
}

export default HomePage;
