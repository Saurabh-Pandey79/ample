'use client'; 

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const DAU = () => {
  // Dummy data for DAU
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Days of the week
    datasets: [
      {
        label: 'Daily Active Users',
        data: [300, 400, 350, 450, 500, 550, 600], // Example data
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="card">
      <h3>Daily Active Users (DAU)</h3>
      <Line data={data} />
    </div>
  );
};

export default DAU;
