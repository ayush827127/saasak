"use client"
import React, { useState } from 'react';

const sampleData = [
  { id: 1, name: 'John Doe', status: 'Active' },
  { id: 2, name: 'Jane Smith', status: 'Inactive' },
  { id: 3, name: 'Alice Johnson', status: 'Active' },
  { id: 4, name: 'Bob Brown', status: 'Inactive' },
];

const SettingsPage = () => {
  // Initial settings state
  const [filters, setFilters] = useState({
    status: 'All', // Default filter
    search: '',    // Default search text
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, status: e.target.value });
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  // Filter data based on settings
  const filteredData = sampleData.filter((item) => {
    const matchesStatus = filters.status === 'All' || item.status === filters.status;
    const matchesSearch = item.name.toLowerCase().includes(filters.search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-gray-100 p-6 shadow-lg rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>
      <form className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status:</label>
          <select
            value={filters.status}
            onChange={handleFilterChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Search:</label>
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Search by name"
          />
        </div>
        <button
          type="button"
          onClick={() => alert('Settings applied')} // Replace with your action
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Apply
        </button>
      </form>
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Sample Data</h3>
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li key={item.id} className="flex justify-between py-2 border-b border-gray-200">
                <span>{item.name}</span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${item.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {item.status}
                </span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No results found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SettingsPage;
