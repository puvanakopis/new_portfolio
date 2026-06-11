import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Project } from "@/components/sections/Project";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative bg-[var(--background)]">
        <Preloader />
        <CustomCursor />
        <Navbar />
        <ScrollToTop />
        <Hero />
        <About />
        <Services />
        <Project />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
