
import { Button } from "@/components/ui/button";
import { Filter, Plus, Search, PlusCircle } from "lucide-react";

const Applications = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl font-bold text-capy-dark mb-4 sm:mb-0">Job Applications</h1>
        <Button className="bg-capy hover:bg-capy-light flex items-center">
          <PlusCircle size={18} className="mr-2" /> Add New Application
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-capy-dark">All Applications</h2>
            <p className="text-sm text-gray-500">Track and manage all your job applications</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search applications..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-capy focus:border-transparent"
              />
            </div>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center p-12 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/bb764ac4-e846-4fc0-a1d2-c9d49a7fb6db.png" 
                alt="CapyCareer Logo" 
                className="h-16 w-16 opacity-50" 
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No applications yet</h3>
            <p className="text-sm text-gray-500 mb-4">Start tracking your job applications with CapyCareer</p>
            <Button className="bg-capy hover:bg-capy-light">
              <Plus size={18} className="mr-2" /> Add Your First Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
