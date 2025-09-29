import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import Team from "../components/sections/Team";

export default function Home() {
  return (
    <>
      <Navbar />
        <main className="flex-grow pt-16">
          <Hero />
          <About />
          <Team />
          <Services />
          <Contact />
        </main>
      <Footer />
    </>
    
  );
}
