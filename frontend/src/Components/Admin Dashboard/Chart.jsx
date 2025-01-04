// Chart.jsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Visitors',
      data: [30, 70, 45, 80, 100],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const Chart = () => {
  return(
    <div style={{ width: '400px', height: '300px' }}>
      <Line data={data} />
    </div>
  );
};

export default Chart;
