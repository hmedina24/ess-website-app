"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          ESS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#hero" className="hover:text-yellow-400">Home</Link>
          <Link href="#about" className="hover:text-yellow-400">About</Link>
          <Link href="#services" className="hover:text-yellow-400">Services</Link>
          <Link href="#contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-2">
          <Link href="#hero" className="block hover:text-yellow-400">Home</Link>
          <Link href="#about" className="block hover:text-yellow-400">About</Link>
          <Link href="#services" className="block hover:text-yellow-400">Services</Link>
          <Link href="#contact" className="block hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
