import SectionWrapper from "../ui/SectionWrapper";

const Team = () => {
  return (
    <SectionWrapper id="team" bgColor="bg-white">
      <div className="text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our highly trained and experienced security professionals are committed 
          to delivering excellence and ensuring your peace of mind.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Team Member 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <img
              src="/team1.jpg"
              alt="Team Member 1"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Chief Security Officer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <img
              src="/team2.jpg"
              alt="Team Member 2"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Operations Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <img
              src="/team3.jpg"
              alt="Team Member 3"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Robert Lee</h3>
            <p className="text-gray-600">Field Supervisor</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Team;
