import SectionWrapper from "../ui/SectionWrapper";

const Services = () => {
  return (
    <SectionWrapper id="services" bgColor="bg-white">
      <div className="text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Corporate Security</h3>
            <p className="text-gray-600">
              Comprehensive protection for businesses, offices, and sensitive facilities.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Event Security</h3>
            <p className="text-gray-600">
              Trained professionals to manage security at corporate and private events.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Protection</h3>
            <p className="text-gray-600">
              Discreet and reliable personal bodyguard services for individuals and VIPs.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
