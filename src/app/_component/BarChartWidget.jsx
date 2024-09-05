// src/app/_component/BarChartWidget.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChartWidget = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [12, 19, 3, 5, 2, 15, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: [8, 14, 6, 7, 3, 12, 18],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: '#e5e7eb',
        },
        ticks: {
          color: '#4b5563',
        },
      },
      y: {
        grid: {
          color: '#e5e7eb',
        },
        ticks: {
          color: '#4b5563',
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue and Expenses</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartWidget;
