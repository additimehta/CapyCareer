
import { useState } from "react";
import { 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  Building2, 
  Search, 
  Filter, 
  MoreVertical 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Status = "Interview" | "Applied" | "Rejected" | "Offer";

interface Application {
  id: number;
  company: string;
  position: string;
  status: Status;
  dateApplied: string;
  nextStep: string;
  salaryRange: string;
}

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const applications: Application[] = [
    {
      id: 1,
      company: "CapyTech Solutions",
      position: "Senior Frontend Developer",
      status: "Interview",
      dateApplied: "2024-02-20",
      nextStep: "Technical Interview - Feb 25",
      salaryRange: "$120k - $160k"
    },
    {
      id: 2,
      company: "Capybara Designs",
      position: "Product Designer",
      status: "Applied",
      dateApplied: "2024-02-18",
      nextStep: "-",
      salaryRange: "$90k - $120k"
    },
    {
      id: 3,
      company: "Capy Industries",
      position: "Backend Engineer",
      status: "Rejected",
      dateApplied: "2024-02-15",
      nextStep: "-", 
      salaryRange: "$140k - $180k"
    },
    {
      id: 4,
      company: "CapyCloud",
      position: "DevOps Engineer",
      status: "Offer",
      dateApplied: "2024-02-10",
      nextStep: "Review Offer by Feb 24",
      salaryRange: "$130k - $170k"
    }
  ];

  const stats = [
    { title: "Total Applications", value: 24, icon: <Briefcase className="h-5 w-5 text-white" /> },
    { title: "Interviews", value: 8, icon: <Calendar className="h-5 w-5 text-white" /> },
    { title: "Offers", value: 2, icon: <CheckCircle className="h-5 w-5 text-white" /> },
    { title: "Companies", value: 15, icon: <Building2 className="h-5 w-5 text-white" /> },
  ];

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case "Interview":
        return (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-yellow-500" />
            <span className="text-yellow-500">Interview</span>
          </div>
        );
      case "Applied":
        return (
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-blue-500" />
            <span className="text-blue-500">Applied</span>
          </div>
        );
      case "Rejected":
        return (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-red-500" />
            <span className="text-red-500">Rejected</span>
          </div>
        );
      case "Offer":
        return (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-green-500">Offer</span>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header with New Application Button */}
      <div className="flex justify-end w-full mb-8">
        <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full">
          + Track New Application
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-purple-700 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-600/50 rounded-lg">
                {stat.icon}
              </div>
              <span className="text-sm font-medium text-purple-200">{stat.title}</span>
            </div>
            <p className="text-4xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Applications Table */}
      <div className="bg-purple-700 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 sm:mb-0">Job Applications</h2>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search applications..."
                className="pl-10 pr-4 py-2 bg-purple-600/50 border border-purple-500 rounded-lg text-white placeholder-purple-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-600 flex items-center gap-2">
              <Filter size={16} />
              Filter
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-600">
                <th className="pb-3 text-purple-300 font-medium">Company</th>
                <th className="pb-3 text-purple-300 font-medium">Position</th>
                <th className="pb-3 text-purple-300 font-medium">Status</th>
                <th className="pb-3 text-purple-300 font-medium">Date Applied</th>
                <th className="pb-3 text-purple-300 font-medium">Next Step</th>
                <th className="pb-3 text-purple-300 font-medium">Salary Range</th>
                <th className="pb-3 text-purple-300 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b border-purple-600 text-white">
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white mr-3">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <span>{app.company}</span>
                    </div>
                  </td>
                  <td className="py-4">{app.position}</td>
                  <td className="py-4">
                    {getStatusBadge(app.status)}
                  </td>
                  <td className="py-4">{app.dateApplied}</td>
                  <td className="py-4">{app.nextStep}</td>
                  <td className="py-4">{app.salaryRange}</td>
                  <td className="py-4">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-purple-600">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
