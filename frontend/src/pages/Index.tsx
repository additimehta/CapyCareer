
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "@/contexts/UserContext";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-center bg-capy-darkPurple overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/5128a9f8-e7ee-44d5-bed7-220416c41ad1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        imageRendering: 'pixelated'
      }}
    >
      <div className="z-10 animate-float">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 pixel-text text-capy-gold">
          CapyPath
        </h1>
        <p className="text-lg md:text-xl mb-8 pixel-text max-w-md mx-auto text-capy-lightPurple">
          Your pixelated guide to finding the perfect university!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate("/login")}
            className="pixel-button bg-capy-gold text-capy-darkPurple border-capy-brown"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
