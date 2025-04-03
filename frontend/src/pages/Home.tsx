
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, BarChart3, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-capy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Track Your Job Search with CapyCareer
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              The friendly job application tracker that helps you land your dream job
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-capy hover:bg-capy-lightest hover:text-capy">
                <Link to="/dashboard">
                  Go to Dashboard
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-capy">
                <Link to="/applications">
                  Track Applications
                </Link>
              </Button>
            </div>
            <div className="mt-10">
              <img 
                src="/lovable-uploads/8ec54a8e-68cc-41e4-96c4-7e9d86878523.png" 
                alt="Dashboard Preview" 
                className="rounded-lg shadow-xl max-w-4xl mx-auto w-full"
              />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-capy-lighter/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-capy">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-capy/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-capy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-capy-dark">Job Application Tracking</h3>
                <p className="text-gray-600">Keep all your job applications organized in one place with status updates.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-capy/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="text-capy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-capy-dark">Application Insights</h3>
                <p className="text-gray-600">Get valuable insights about your job search with visual analytics.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-capy/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-capy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-capy-dark">Progress Tracking</h3>
                <p className="text-gray-600">Never miss an interview or deadline with our reminder system.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-capy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Organize Your Job Search?</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Join CapyCareer today and take control of your career journey. Our friendly capybara is here to help!
            </p>
            <Button asChild size="lg" className="bg-white text-capy hover:bg-capy-lightest hover:text-capy">
              <Link to="/dashboard" className="flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-capy-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/bb764ac4-e846-4fc0-a1d2-c9d49a7fb6db.png" 
                alt="CapyCareer Logo" 
                className="h-8 w-8 mr-2" 
              />
              <span className="font-bold">CapyCareer</span>
            </div>
            <div className="text-sm text-white/70">
              © 2025 CapyCareer. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
