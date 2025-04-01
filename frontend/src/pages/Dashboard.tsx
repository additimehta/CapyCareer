
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/components/ui/use-toast";
import UniversityCard from "@/components/UniversityCard";
import AddUniversityModal from "@/components/AddUniversityModal";

// Mock data for university plans
const INITIAL_PLANS = [
  {
    id: "1",
    name: "Capy University",
    location: "Capybara Hills, CA",
    programs: ["Computer Science", "Wildlife Biology"],
    cost: "$15,000/year",
    notes: "Great capybara-friendly campus with rivers nearby."
  },
  {
    id: "2",
    name: "Waterfront College",
    location: "Riverside, FL",
    programs: ["Marine Biology", "Environmental Studies"],
    cost: "$18,500/year",
    notes: "Amazing swimming facilities and wetland research opportunities."
  }
];

const Dashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plans, setPlans] = useState(() => {
    const savedPlans = localStorage.getItem('capy-plans');
    return savedPlans ? JSON.parse(savedPlans) : INITIAL_PLANS;
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    localStorage.setItem('capy-plans', JSON.stringify(plans));
  }, [plans]);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "See you soon!"
    });
    navigate("/");
  };

  const addPlan = (plan: typeof INITIAL_PLANS[0]) => {
    setPlans([...plans, { ...plan, id: Math.random().toString() }]);
    setIsModalOpen(false);
    toast({
      title: "Plan added!",
      description: `${plan.name} has been added to your plans.`
    });
  };

  const deletePlan = (id: string) => {
    setPlans(plans.filter(plan => plan.id !== id));
    toast({
      title: "Plan removed",
      description: "The university plan has been removed."
    });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-capy-purple p-4">
      <header className="flex justify-between items-center mb-8 p-4 bg-capy-purple bg-opacity-80 rounded-lg pixel-borders">
        <h1 className="text-xl md:text-2xl font-bold pixel-text">CapyPath Dashboard</h1>
        <div className="flex gap-4">
          <span className="pixel-text">Hello, {user.username}!</span>
          <button 
            onClick={handleLogout}
            className="pixel-button text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold pixel-text">Your University Plans</h2>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="pixel-button"
        >
          Add New Plan
        </button>
      </div>

      {plans.length === 0 ? (
        <div className="text-center p-8 bg-capy-purple bg-opacity-60 rounded-lg pixel-borders">
          <p className="pixel-text text-lg mb-4">You haven't added any university plans yet!</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="pixel-button"
          >
            Add Your First Plan
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <UniversityCard 
              key={plan.id} 
              plan={plan} 
              onDelete={() => deletePlan(plan.id)} 
            />
          ))}
        </div>
      )}

      <AddUniversityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={addPlan} 
      />
    </div>
  );
};

export default Dashboard;
