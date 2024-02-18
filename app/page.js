import CheckFeatures from "@/Components/CheckFeatures";
import Hero from "@/Components/Hero";
import HeroTwo from "@/Components/HeroTwo";
import Navbar from "@/Components/Navbar";
import PricingPlans from "@/Components/PricingPlans";
import Toggle from "@/Components/Toggle";


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
       <Toggle />
        <PricingPlans />
        <HeroTwo />
      <CheckFeatures />
        {/*Footer */}
      </div>
    </>
  );
}
