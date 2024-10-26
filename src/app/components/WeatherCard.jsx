import React from "react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Sun, Cloud, Umbrella, Wind, Rocket, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

export default function WeatherCard() {
  const hourlyData = [
    { time: "Now", temp: 58, icon: "moon" },
    { time: "3 AM", temp: 55, icon: "moon" },
    { time: "5 AM", temp: 55, icon: "moon" },
    { time: "7 AM", temp: 56, icon: "sun" },
    { time: "9 AM", temp: 64, icon: "sun" },
    { time: "11 AM", temp: 71, icon: "sun" },
    { time: "1 PM", temp: 76, icon: "sun" },
    { time: "3 PM", temp: 79, icon: "sun" },
    { time: "5 PM", temp: 83, icon: "sun" },
    { time: "7 PM", temp: 81, icon: "sun" },
    { time: "9 PM", temp: 73, icon: "moon" },
    { time: "11 PM", temp: 68, icon: "moon" },
  ];

  const getIcon = (icon) => {
    switch (icon) {
      case "sun":
        return <Sun className="w-4 h-4 text-yellow-400" />;
      case "moon":
        return <Cloud className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <>
      <motion.div
        className="absolute top-10 left-10 text-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <button
          className="rounded-lg p-2"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <Rocket
            size={36}
            className="hover:scale-110 transition-all duration-300"
          />
        </button>
      </motion.div>
      <div className="grid grid-cols-12 max-w-[90vw] gap-4 mx-auto">
        <Card className="w-full bg-gray-900 text-white col-span-9 shadow-lg shadow-blue-500/20 border border-gray-700">
          <CardContent className="p-6">
            <Tabs defaultValue="summary" className="mb-6">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="hourly">Hourly</TabsTrigger>
                <TabsTrigger value="details">More details</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Sun className="w-5 h-5 text-yellow-400 mr-2" />
                <span>5:48 AM</span>
              </div>
              <div className="flex items-center">
                <Sun className="w-5 h-5 text-yellow-400 mr-2" />
                <span>8:21 PM</span>
              </div>
            </div>

            <div className="relative h-40 mb-6">
              {hourlyData.map((data, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${(index / (hourlyData.length - 1)) * 100}%`,
                    bottom: `${((data.temp - 55) / (83 - 55)) * 100}%`,
                  }}
                >
                  <div className="text-xs">{data.temp}°</div>
                </div>
              ))}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500"></div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-6">
              {hourlyData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-2">{getIcon(data.icon)}</div>
                  <div className="text-xs mb-1">0%</div>
                  <div className="text-xs">{data.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="w-[22dvw] mx-auto bg-gray-900 text-white shadow-lg shadow-blue-500/20 border border-gray-700">
          <h3 className="text-lg font-semibold py-4 px-5 mt-4">
            Suggestions for your day
          </h3>
          <div className="h-[0.5px] bg-gray-700 w-full" />
          <CardContent className="py-4 px-6">
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center bg-gray-800 rounded-lg p-4">
                <Umbrella className="w-5 h-5 mr-2 text-blue-400 bg-gray-800/10" />
                <div>
                  <div className="font-semibold">Umbrella</div>
                  <div className="text-sm text-gray-400">No need</div>
                </div>
              </div>
              <div className="flex items-center bg-gray-800 rounded-lg p-4">
                <Sun className="w-5 h-5 mr-2 text-yellow-400" />
                <div>
                  <div className="font-semibold bg-gray-800">Outdoors</div>
                  <div className="text-sm text-gray-400">Fair</div>
                </div>
              </div>
              <div className="flex items-center bg-gray-800 rounded-lg p-4">
                <Sun className="w-5 h-5 mr-2 text-yellow-400" />
                <div>
                  <div className="font-semibold">Clothing</div>
                  <div className="text-sm text-gray-400">Light jacket</div>
                </div>
              </div>
              <div className="flex items-center bg-gray-800 rounded-lg p-4">
                <Wind className="w-5 h-5 mr-2 text-blue-400" />
                <div>
                  <div className="font-semibold bg-gray-800">Wind chill</div>
                  <div className="text-sm text-gray-400">Slight</div>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="flex justify-center mt-8 p-2 w-fit mx-auto text-center bg-gray-800 rounded-full px-4 py-3"
            >
              <span>See more</span>
              <ChevronRight className="ml-1.5 mt-0.5 w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
