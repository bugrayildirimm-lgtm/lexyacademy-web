import { supabase } from "@/lib/supabase";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

async function getContent() {
  const { data } = await supabase.from("site_content").select("*");
  if (!data) return {};
  return Object.fromEntries(data.map((row) => [row.id, row.data]));
}

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Navbar />
      <Hero data={content.hero} />
      <TrustBar />
      <HowItWorks data={content.how_it_works} />
      <Courses data={content.courses} />
      <Pricing data={content.pricing} />
      <Footer data={content.footer} />
    </main>
  );
}
