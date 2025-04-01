
import { useState } from "react";

interface UniversityPlan {
  id: string;
  name: string;
  location: string;
  programs: string[];
  cost: string;
  notes: string;
}

interface UniversityCardProps {
  plan: UniversityPlan;
  onDelete: () => void;
}

const UniversityCard = ({ plan, onDelete }: UniversityCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`pixel-card h-64 relative cursor-pointer ${isFlipped ? 'animate-flip' : 'animate-flip-back'}`}
      style={{ 
        transformStyle: 'preserve-3d',
        backgroundImage: `url('/lovable-uploads/5422370d-310c-48bb-8967-e255fd5cb465.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Front of card */}
      <div 
        className={`absolute inset-0 p-4 backface-hidden ${isFlipped ? 'hidden' : 'block'}`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <h3 className="text-xl font-bold mb-2 pixel-text">{plan.name}</h3>
        <p className="text-sm text-capy-gold mb-1">Location: {plan.location}</p>
        <p className="text-sm text-capy-gold mb-1">Cost: {plan.cost}</p>
        <div className="mt-4">
          <p className="text-xs text-capy-gold">Click to see more details</p>
        </div>
      </div>

      {/* Back of card */}
      <div 
        className={`absolute inset-0 p-4 backface-hidden ${isFlipped ? 'block' : 'hidden'}`}
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
      >
        <h4 className="text-lg font-bold mb-2 pixel-text">Programs:</h4>
        <ul className="mb-2 text-xs text-capy-gold">
          {plan.programs.map((program, index) => (
            <li key={index} className="mb-1">• {program}</li>
          ))}
        </ul>
        <h4 className="text-lg font-bold mb-1 pixel-text">Notes:</h4>
        <p className="text-xs text-capy-gold mb-2">{plan.notes}</p>
        <div className="absolute bottom-2 right-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded pixel-borders"
          >
            Delete
          </button>
        </div>
        <p className="absolute bottom-2 left-2 text-xs text-capy-gold">Click to flip back</p>
      </div>
    </div>
  );
};

export default UniversityCard;
