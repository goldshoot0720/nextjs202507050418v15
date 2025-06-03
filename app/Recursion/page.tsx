"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Sim10Million() {
  const [data, setData] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const simulate = async () => {
    setIsRunning(true);
    const frequency: Record<number, number> = {};
    const total = 10_000_000;
    const batch = 100_000;

    for (let i = 0; i < total; i++) {
      let attempts = 1;
      while (Math.random() < 0.5) {
        attempts++;
      }
      frequency[attempts] = (frequency[attempts] || 0) + 1;

      if (i % batch === 0) await new Promise((r) => setTimeout(r, 0)); // 防止畫面卡死
    }

    // 只保留前 50 種嘗試次數的統計數據
    const result = Array.from({ length: 50 }, (_, i) => frequency[i + 1] || 0);
    setData(result);
    setIsRunning(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        🎯 模擬 1,000 萬次 Jersey 中獎遞迴次數
      </h2>
      <button
        disabled={isRunning}
        onClick={simulate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isRunning ? "模擬中…" : "開始模擬"}
      </button>

      {data.length > 0 && (
        <Bar
          data={{
            labels: Array.from({ length: 50 }, (_, i) => `${i + 1} 次`),
            datasets: [
              {
                label: "出現次數",
                data,
                backgroundColor: "rgba(75,192,192,0.6)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: (val) => Number(val).toLocaleString(),
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}
