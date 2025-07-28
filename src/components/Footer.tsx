import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-enricon-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/13f2c9c5-ad53-4e17-aa31-e262ca8a0d65.png" 
              alt="Enricon Dynamics" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Where Precision Meets Purpose
            </p>
            <p className="text-gray-400 text-xs mt-4">
              Premier manufacturer of high-precision automotive gauges and fixtures.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-enricon-teal" />
                <div className="text-sm text-gray-300">
                  <p>Shop No. 33, Pandurang Industrial Estate</p>
                  <p>Bhosari, Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-gray-300 hover:text-enricon-teal transition-colors">Home</a>
              <a href="/about" className="block text-sm text-gray-300 hover:text-enricon-teal transition-colors">About Us</a>
              <a href="/research" className="block text-sm text-gray-300 hover:text-enricon-teal transition-colors">Research Labs</a>
              <a href="/contact" className="block text-sm text-gray-300 hover:text-enricon-teal transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Enricon Dynamics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;