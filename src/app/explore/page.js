// this hero page is generated by v0.dev

"use client";
import Boba from "../components/boba"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Model from "../components/Model";
import SweaterCard from "../components/SweaterCard"
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
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 via-blue-900 to-black`}
    >
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
      <SweaterCard />
      <Boba />
    </div>
  );
}
