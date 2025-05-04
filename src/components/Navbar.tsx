
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50 py-4 px-6 md:px-12 border-b border-reminisce-tan">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-reminisce-navy font-display text-2xl font-bold">Reminisce</span>
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/how-it-works" className="text-reminisce-navy hover:text-reminisce-coral transition-colors duration-200">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-reminisce-navy hover:text-reminisce-coral transition-colors duration-200">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/stories" className="text-reminisce-navy hover:text-reminisce-coral transition-colors duration-200">
                Stories
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="border-reminisce-navy text-reminisce-navy hover:bg-reminisce-navy hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-reminisce-navy text-white hover:bg-reminisce-navy/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-reminisce-tan py-4 px-6 animate-fade-in">
          <ul className="flex flex-col gap-4 mb-4">
            <li>
              <Link 
                to="/how-it-works" 
                className="text-reminisce-navy block py-2 hover:text-reminisce-coral"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link 
                to="/pricing" 
                className="text-reminisce-navy block py-2 hover:text-reminisce-coral"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                to="/stories" 
                className="text-reminisce-navy block py-2 hover:text-reminisce-coral"
                onClick={() => setIsMenuOpen(false)}
              >
                Stories
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full border-reminisce-navy text-reminisce-navy">
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-reminisce-navy text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
