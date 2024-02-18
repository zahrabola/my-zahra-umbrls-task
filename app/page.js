import Hero from "@/Components/Hero";
import HeroTwo from "@/Components/HeroTwo";
import PricingPlans from "@/Components/PricingPlans";


export default function Home() {
  return (
    <>
      <div>
        {/*Navbar */}
        <Hero />
        {/*Toggle */}
        <PricingPlans />
        <HeroTwo />
        {/*Check */}
        {/*Footer */}
      </div>
    </>
  );
}
