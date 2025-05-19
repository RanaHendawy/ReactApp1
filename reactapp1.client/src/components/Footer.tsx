
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Acme Inc</h3>
            <p className="text-gray-600 max-w-xs">
              Providing quality solutions for businesses since 2010. Leading the industry with innovation and excellence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link to="/employees" className="text-gray-600 hover:text-blue-600">Our Team</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <address className="not-italic text-gray-600">
              <p>123 Business Road</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-2">contact@acmeinc.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">&copy; 2025 Acme Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
