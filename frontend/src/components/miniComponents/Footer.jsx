import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Palette className="w-7 h-7 text-primary-400 mr-2" />
              <span className="text-xl font-montserrat font-bold text-white">
                Sketch<span className="text-primary-400">Kingston</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming ideas into captivating visual experiences since 2015.
              Award-winning design studio dedicated to creativity and
              excellence.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Services",
                "Portfolio",
                "Blog",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                "Branding & Identity",
                "Web Design",
                "UI/UX Design",
                "Print Design",
                "Illustration",
                "Photography",
              ].map((service) => (
                <li key={service}>
                  <a
                    href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 block py-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-gray-400">
                Paschim vihar
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3" />
                <a
                  href="tel:8860243743"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  +91 8860243743
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3" />
                <a
                  href="mailto:fiaalekh@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  fiaalekh@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <button className="px-5 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors duration-200">
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} SketchKingston. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a
              href="#"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;