"use client"
import React from 'react';
import { data } from '../_Data/data'; // Adjust the import path according to your folder structure

const DataTableWidget = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Data Table</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-b p-3 text-left">ID</th>
            <th className="border-b p-3 text-left">Name</th>
            <th className="border-b p-3 text-left">Email</th>
            <th className="border-b p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="border-b p-3">{row.id}</td>
              <td className="border-b p-3">{row.name}</td>
              <td className="border-b p-3">{row.email}</td>
              <td className={`border-b p-3 ${row.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableWidget;
