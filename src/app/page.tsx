import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Courses from "@/components/Courses";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0F1E] overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Courses />
      <Pricing />
      <Footer />
    </main>
  );
}
