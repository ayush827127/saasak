"use client";
import React from 'react';
import LineChartWidget from './LineChartWidget';
import BarChartWidget from './BarChartWidget';
import DataTableWidget from './DataTableWidget';

const Dashboard = () => {
  return (
    <div className="p-6  min-h-screen">
      <div className="flex flex-col space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <LineChartWidget />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <BarChartWidget />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <DataTableWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
