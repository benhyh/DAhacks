// this hero page is generated by v0.dev

"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Model from "../components/Model";
import TempOverview from "../components/TempOverview";
import MonthTemp from "../components/MonthTemp";
import WeatherCard from "../components/WeatherCard";
import SweaterCard from "../components/SweaterCard";
import BobaCard from "../components/BobaCard";

export default function SpaceHero() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className={`relative min-h-screen`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      <div className="z-10 flex flex-col items-center">
        <Suspense fallback={<div>Loading Temperature Overview...</div>}>
          <TempOverview />
        </Suspense>
        <Suspense fallback={<div>Loading Monthly Temp...</div>}>
          <MonthTemp />
        </Suspense>

        <Suspense fallback={<div>Loading 3D Model...</div>}>
          <Model />
        </Suspense>
        <Suspense fallback={<div>Loading BobaCard...</div>}>
          <BobaCard />
        </Suspense>
        <Suspense fallback={<div>Loading SweaterCard...</div>}>
          <SweaterCard />
        </Suspense>
      </div>
    </div>
  );
}
