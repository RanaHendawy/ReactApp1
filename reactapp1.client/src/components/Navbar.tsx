
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:Egy_Digital_Delivery@zfp.com";
  };

  return (
    <nav className="bg-background border-b border-border fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex flex-col items-center">
              <div className="flex items-center">
                <img src="/lovable-uploads/904a7119-9e04-4130-bcd7-bb8320677b00.png" alt="ZFP Logo" className="w-8 h-8 mr-2" />
                <span className="text-xl font-bold text-primary">ZFP </span>
              </div>
                          <span style={{fontWeight:"Bold"}} className="text-xs text-gray-500 dark:text-gray-400">Digital Delivery - R&D Unit</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-primary hover:text-primary"
              >
                Home
              </Link>
              <Link
                to="/employees"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400 border-b-2 border-transparent hover:border-primary hover:text-primary"
              >
                Our Team
              </Link>
              <Link
                to="/request"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400 border-b-2 border-transparent hover:border-primary hover:text-primary"
              >
                Submit Request
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button className="ml-4" onClick={handleContactClick}>
              Contact Us
            </Button>
          </div>
          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Button variant="ghost">Menu</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
