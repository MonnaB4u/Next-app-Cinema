
'use client';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';

const page = () => {

  return (
    <div>
      <HeroSection title={"OUR STORY"} imageUrl={"/about1.svg"} />
    </div>
  );
};

export default page;
