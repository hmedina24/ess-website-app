const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Logo / Brand */}
        <div className="text-lg font-semibold text-yellow-400">
          ESS
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#hero" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Executive Security Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
