'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const WAU = () => {
  // Dummy data for WAU
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // Weeks of the month
    datasets: [
      {
        label: 'Weekly Active Users',
        data: [2500, 2700, 2900, 3100, 3200], // Example data
        fill: false,
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="card">
      <h3>Weekly Active Users (WAU)</h3>
      <Line data={data} />
    </div>
  );
};

export default WAU;
