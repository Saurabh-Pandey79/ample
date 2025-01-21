'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const MAU = () => {
  // Dummy data for MAU
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Months
    datasets: [
      {
        label: 'Monthly Active Users',
        data: [1500, 2000, 1800, 2200, 2500, 2700], // Example data
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="card">
      <h3>Monthly Active Users (MAU)</h3>
      <Line data={data} />
    </div>
  );
};

export default MAU;
