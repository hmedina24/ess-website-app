import SectionWrapper from "../ui/SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper id="contact" bgColor="bg-gray-100">
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Get in touch with Executive Security Services (ESS) for professional
          security solutions tailored to your needs.
        </p>

        <div className="space-y-4 text-gray-800">
          <p><strong>Email:</strong> info@ess.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Main Street, City, State</p>
        </div>

        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Request a Quote
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
