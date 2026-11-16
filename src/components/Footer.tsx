
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src="/images/coda-logo.jpg" 
                alt="CODA - Empowering Communities, Transforming Lives" 
                className="h-32 object-contain"
              />
            </div>
            <p className="text-gray-600 mb-4">
              A women-led organization empowering marginalized communities in South Sudan to achieve sustainable development 
              and improve their overall wellbeing through comprehensive programs in education, 
              healthcare, water sanitation, and community development.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-500 hover:text-unicef-blue cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-500 hover:text-unicef-blue cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-500 hover:text-unicef-blue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-unicef-blue transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-600 hover:text-unicef-blue transition-colors">Our Programs</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-unicef-blue transition-colors">Our Partners</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-unicef-blue transition-colors">Blog</Link></li>
              <li><Link to="/beneficiaries" className="text-gray-600 hover:text-unicef-blue transition-colors">Our Beneficiaries</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-unicef-blue mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Juba, Central Equatoria State<br />
                  South Sudan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-unicef-blue flex-shrink-0" />
                <span className="text-gray-600 text-sm">+211 922 226 610</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-unicef-blue flex-shrink-0" />
                <span className="text-gray-600 text-sm">info@codass.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Community Organization for Development Agency (CODA). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
