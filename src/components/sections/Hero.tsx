import SectionWrapper from "../ui/SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper id="hero" bgColor="bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="flex flex-col items-center justify-center text-center text-white space-y-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold">
          Executive Security Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Professional security solutions tailored for your business and peace of mind.
        </p>
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Get Started
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
