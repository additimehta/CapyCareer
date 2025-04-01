
import { useState } from "react";
import { X } from "lucide-react";

interface UniversityPlan {
  id: string;
  name: string;
  location: string;
  programs: string[];
  cost: string;
  notes: string;
}

interface AddUniversityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (plan: Omit<UniversityPlan, "id">) => void;
}

const AddUniversityModal = ({ isOpen, onClose, onAdd }: AddUniversityModalProps) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [programInput, setProgramInput] = useState("");
  const [programs, setPrograms] = useState<string[]>([]);
  const [cost, setCost] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      name,
      location,
      programs,
      cost,
      notes
    });
    resetForm();
  };

  const addProgram = () => {
    if (programInput.trim()) {
      setPrograms([...programs, programInput.trim()]);
      setProgramInput("");
    }
  };

  const removeProgram = (index: number) => {
    setPrograms(programs.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setName("");
    setLocation("");
    setProgramInput("");
    setPrograms([]);
    setCost("");
    setNotes("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-capy-purple w-full max-w-md p-6 rounded-lg pixel-borders">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold pixel-text">Add University Plan</h2>
          <button onClick={onClose} className="text-capy-gold hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm pixel-text">
              University Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pixel-input"
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block mb-1 text-sm pixel-text">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pixel-input"
              required
            />
          </div>

          <div>
            <label htmlFor="programs" className="block mb-1 text-sm pixel-text">
              Programs
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="programs"
                value={programInput}
                onChange={(e) => setProgramInput(e.target.value)}
                className="w-full pixel-input"
              />
              <button
                type="button"
                onClick={addProgram}
                className="pixel-button"
              >
                Add
              </button>
            </div>
            {programs.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {programs.map((program, index) => (
                  <div key={index} className="bg-capy-gold text-capy-purple px-2 py-1 text-xs rounded-full flex items-center">
                    {program}
                    <button
                      type="button"
                      onClick={() => removeProgram(index)}
                      className="ml-1 text-capy-purple"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="cost" className="block mb-1 text-sm pixel-text">
              Cost (per year)
            </label>
            <input
              type="text"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full pixel-input"
              required
            />
          </div>

          <div>
            <label htmlFor="notes" className="block mb-1 text-sm pixel-text">
              Notes
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full pixel-input h-20"
            ></textarea>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="pixel-button bg-gray-700 text-white"
            >
              Cancel
            </button>
            <button type="submit" className="pixel-button">
              Add Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUniversityModal;
