
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-capy-lighter/10 p-4">
      <div className="text-center">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/bb764ac4-e846-4fc0-a1d2-c9d49a7fb6db.png" 
            alt="CapyCareer Logo" 
            className="h-20 w-20 mx-auto" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-capy-dark">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The capybara couldn't find the page you're looking for.
        </p>
        <Button asChild size="lg" className="bg-capy hover:bg-capy-light">
          <Link to="/" className="flex items-center">
            <Home className="mr-2" size={18} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
