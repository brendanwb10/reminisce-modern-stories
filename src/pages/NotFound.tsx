
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-6xl font-bold mb-6">404</h1>
          <h2 className="font-display text-2xl mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-8">
            We couldn't find the page you're looking for. The story might have moved or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-reminisce-navy text-white hover:bg-reminisce-navy/90">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
