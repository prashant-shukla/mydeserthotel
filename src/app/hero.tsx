"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/heritage-hotel-hero-img-bg-01.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          WELCOME TO
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="
          text-7xl
          text-shadow
          md:max-w-full lg:max-w-3xl"
        >
          My Desert Hotel
        </Typography>
      </div>
    </div>
  </div>
  );
}
export default Hero;
