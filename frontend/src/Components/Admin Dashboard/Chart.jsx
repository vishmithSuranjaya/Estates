// Chart.jsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {       //showing 
  labels: ['1', '2', '3', '4', '5'], //
  datasets: [
    {
      label: 'Price',
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
