import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Qualifications } from "@/components/sections/Qualifications";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Qualifications />
      <Skills />
      <Footer />
    </main>
  );
}
