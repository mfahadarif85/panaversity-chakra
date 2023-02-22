import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Outcome from "./Outcome";
import Stats from "./Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Outcome />
      <Footer />
    </>
  );
}
