import React, { useState, useEffect } from 'react';

// Define the array of topics (cards) to display
const marsInfo = [
  "Mars Facts & Fun Trivia: Learn unique facts about Mars like Olympus Mons, the largest volcano in the solar system!",
  "Mars Exploration News: Keep up-to-date with the latest Mars missions like Perseverance and future manned missions.",
  "Mars Terrain & Landmarks: Explore famous locations like Olympus Mons and Gale Crater through interactive maps.",
  "Living on Mars: Discover how future colonies might survive and what life would look like for settlers.",
  "Mars Timeline: Follow important milestones and future plans for Mars colonization from space agencies.",
  "Mars Habitats: Concepts for Martian habitats, like using Martian soil for farming and challenges of building structures.",
  "Mars Time: Learn about a 'Sol' and how time is measured differently on Mars versus Earth.",
  "Mars Seasons: Explore how seasons work on Mars and what makes them unique compared to Earth's seasons.",
  "Mars Moons: Learn about Mars' two small moons, Phobos and Deimos, and how future missions could explore them.",
  "Space Travel Tips: What future space tourists or astronauts might need to prepare for when traveling to Mars.",
  "Mars Sustainability & Resources: Discover resources like water ice and minerals, and how they could support Martian life.",
  "Astronomy Tools: Learn how to view Mars from Earth using telescopes and get insights into Mars-related astronomical events.",
  "Mars Myths & Pop Culture: Uncover Mars myths and how the planet is represented in movies and books like 'The Martian'.",
  "Mars Travel Costs: Speculate on the potential cost of traveling to Mars and the technology needed to get there.",
  "Mars Challenges & Solutions: Delve into the problems we face colonizing Mars (radiation, dust storms) and possible solutions.",
  "Mars Colonization Projects: Updates from SpaceX and NASA on plans for building colonies on the Red Planet."
];

// Component for the flipping card
const MarsCardFlipper = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Function to switch cards every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % marsInfo.length);
    }, 10000); // Switch card every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div style={{ perspective: '1000px', margin: '0 auto', width: '300px' }}>
      <div style={{
        width: '100%', height: '200px', 
        border: '1px solid #ccc', padding: '20px',
        textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#f4f4f4', 
        borderRadius: '8px', 
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${currentCard * 180}deg)`
      }}>
        <div style={{ width: '100%', height: '100%' }}>
          <p style={{ fontSize: '18px' }}>{marsInfo[currentCard]}</p>
        </div>
      </div>
    </div>
  );
};

export default MarsCardFlipper;
