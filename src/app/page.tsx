import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
        <main className="relative flex-grow pt-16">
          <Hero />
          <About />
          <Services />
        </main>
      <Footer />
    </>
    
  );
}
