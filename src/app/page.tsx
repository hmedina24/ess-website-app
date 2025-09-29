import Navbar from "../components/layouts/Navbar";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-20"> {/* Padding to avoid Navbar overlap */}
        <Hero />
      </div>
    </main>
  );
}
