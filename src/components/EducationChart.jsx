import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title, Legend);

export default function EducationChart() {
  const data = {
    labels: ["Secondary (10th)", "Intermediate (12th)", "Bachelor of Science"],
    datasets: [
      {
        label: "Percentage (%)",
        data: [83, 66, 65],
        backgroundColor: [
          "rgba(59,130,246,0.75)",
          "rgba(16,185,129,0.75)",
          "rgba(239,68,68,0.75)"
        ],
        borderColor: [
          "rgba(59,130,246,1)",
          "rgba(16,185,129,1)",
          "rgba(239,68,68,1)"
        ],
        borderWidth: 1,
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Score: ${context.raw}%`
        }
      }
    }
  };

  return (
    <div className="chart-container h-64">
      <Bar data={data} options={options} />
    </div>
  );
}
