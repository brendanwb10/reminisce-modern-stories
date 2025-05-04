
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12 border-t border-reminisce-tan">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-reminisce-navy font-display text-2xl font-bold">Reminisce</span>
            </Link>
            <p className="text-slate-600 mb-4">
              Preserve your personal stories for generations to come.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-display font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-slate-600 hover:text-reminisce-coral transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-600 hover:text-reminisce-coral transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-slate-600 hover:text-reminisce-coral transition-colors">
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-display font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-reminisce-coral transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-reminisce-coral transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-600 hover:text-reminisce-coral transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-display font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-slate-600 hover:text-reminisce-coral transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-600 hover:text-reminisce-coral transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-reminisce-tan pt-6 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Reminisce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
