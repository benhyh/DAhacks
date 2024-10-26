"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Scene from "./Scene";

export default function MarsExplorer() {
  const [expandedSpot, setExpandedSpot] = useState(null);

  const marsSpots = [
    {
      id: 1,
      name: "Alba Patera",
      description:
        "A unique volcanic feature on Mars, known for its low relief and large size.",
    },
    {
      id: 2,
      name: "Argyre Planitia",
      description:
        "One of the largest impact basins on Mars, filled with light-toned rock and dust.",
    },
    {
      id: 3,
      name: "Mars Pathfinder Rover",
      description:
        "Landing site of the 1997 Mars Pathfinder mission, including the Sojourner rover.",
    },
    {
      id: 4,
      name: "Odd Crater",
      description:
        "A peculiar crater formation on Mars with unique geological features.",
    },
    {
      id: 5,
      name: "Olympus Mons",
      description:
        "The largest known volcano and mountain in the solar system.",
    },
    {
      id: 6,
      name: "Valles Marineris",
      description: "A vast canyon system that runs along the Martian equator.",
    },
    {
      id: 7,
      name: "Viking 1 Lander",
      description:
        "The landing site of the Viking 1 lander, which touched down on Mars in 1976.",
    },
  ];

  const toggleSpot = (id) => {
    setExpandedSpot(expandedSpot === id ? null : id);
  };

  return (
    <div className="relative flex flex-col lg:flex-row h-screen w-screen overflow-hidden">
      <div className="w-full lg:w-2/3 p-4 z-10">
        <Card className="h-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center border border-gray-700">
          <Scene />
        </Card>
      </div>
      <div className="w-full lg:w-1/3 p-4 z-10">
        <ScrollArea className="h-full">
          {marsSpots.map((spot) => (
            <Card
              key={spot.id}
              className="mb-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700"
            >
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-4 text-left text-white hover:bg-gray-800/50"
                  onClick={() => toggleSpot(spot.id)}
                >
                  {spot.name}
                  {expandedSpot === spot.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                {expandedSpot === spot.id && (
                  <div className="px-4 pb-4 text-gray-300">
                    <div className="h-[0.5px] w-full bg-gray-700" />
                    <p className="mt-3">{spot.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
