import Hero from "./components/Hero";

export default function Home() {
  return (
   <>
      <audio autoPlay>
        <source src="/sounds/music.mp3" type="audio/mp3"></source>
      </audio>
      <Hero/>
   </>
  );
}


