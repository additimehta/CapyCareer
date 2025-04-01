
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error!",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const success = await login(username, password);
    
    if (success) {
      toast({
        title: "Success!",
        description: "Welcome to CapyPath!"
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Error!",
        description: "Invalid credentials. Password must be at least 6 characters.",
        variant: "destructive"
      });
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-capy-darkPurple p-4"
      style={{
        backgroundImage: `url('/lovable-uploads/5128a9f8-e7ee-44d5-bed7-220416c41ad1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        imageRendering: 'pixelated'
      }}
    >
      <div className="w-full max-w-md p-6 bg-capy-darkPurple bg-opacity-90 rounded-lg pixel-borders border-capy-lightPurple">
        <h2 className="text-2xl font-bold mb-6 text-center pixel-text text-capy-gold">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-2 pixel-text text-sm text-capy-lightPurple">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pixel-input bg-capy-darkPurple border-capy-lightPurple text-white"
              placeholder="Enter your username"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-2 pixel-text text-sm text-capy-lightPurple">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pixel-input bg-capy-darkPurple border-capy-lightPurple text-white"
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="w-full pixel-button bg-capy-gold text-capy-darkPurple mt-6 border-capy-brown">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        
        <p className="mt-4 text-center pixel-text text-sm text-capy-lightPurple">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 underline text-capy-gold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
