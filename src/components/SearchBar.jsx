import { useState } from "react";
import { FaGlobe} from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai"; // Using a loading spinner icon

const SearchBar = () => {
  // Step 1: Set up state to store selections
  const [destination, setDestination] = useState("");
  const [programType, setProgramType] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false); // For showing the loading spinner

  // Options for each dropdown
  const destinations = ["Canada", "Australia", "UK", "Germany", "USA"];
  const programTypes = ["Undergraduate", "Postgraduate", "Short Course", "Exchange"];
  const budgets = ["<$5,000", "$5,000-$10,000", "$10,000-$20,000", ">$20,000"];

  // Handle the search action
  const handleSearch = () => {
    setLoading(true); // Show loading spinner
    setTimeout(() => {
      setLoading(false); // Hide loading spinner after search "process"
      console.log("Search started with:", { destination, programType, budget });
      // Mocking search results, this can be replaced by real data fetching
    }, 2000); // Simulate search delay (2 seconds)
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Quick Start</h2>

      {/* Destination Dropdown with Icon */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
        <div className="relative">
          <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="block w-full pl-10 border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Select a Destination</option>
            {destinations.map((dest) => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Program Type Dropdown */}
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Program Type</label>
            <div className="relative">
                <IoSchoolSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                <select
                    value={programType}
                    onChange={(e) => setProgramType(e.target.value)}
                    className="block w-full pl-10 border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
                >
                    <option value="">Select a Program Type</option>
                    {programTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
        </div>

      {/* Budget Dropdown with Icon */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
        <div className="relative">
          <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="block w-full pl-10 border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Select a Budget</option>
            {budgets.map((budgetOption) => (
              <option key={budgetOption} value={budgetOption}>{budgetOption}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Button with Loading Indicator */}
      <button
        onClick={handleSearch}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md mt-1 flex justify-center items-center"
        disabled={loading}
      >
        {loading ? (
          <AiOutlineLoading className="animate-spin mr-2" /> // Add spinner when loading
        ) : null}
        {loading ? "Searching..." : "Search Programs"}
      </button>

      {/* Conditional rendering of mock results */}
      {destination && programType && budget && !loading && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">Search Results</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">Program in {destination}</li>
            <li className="text-gray-600">Type: {programType}</li>
            <li className="text-gray-600">Budget: {budget}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
