import SectionWrapper from "../ui/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" bgColor="bg-gray-100">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Executive Security Services (ESS), we provide reliable and professional
          security solutions tailored to meet the needs of businesses and individuals.
          Our team is committed to ensuring safety, peace of mind, and exceptional service.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
