import React, { useRef, useEffect } from 'react';

function DashboardGraph() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Bar chart data
    const data = [
      { label: 'January', value: 40 },
      { label: 'February', value: 80 },
      { label: 'March', value: 60 },
      { label: 'April', value: 90 },
      { label: 'May', value: 120 },
      { label: 'June', value: 70 },
    ];

    // Canvas dimensions
    const width = canvas.width;
    const height = canvas.height;

    // Chart background
    ctx.fillStyle = '#f4f4f9';
    ctx.fillRect(0, 0, width, height);

    // Chart labels
    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';

    // Axis lines
    ctx.beginPath();
    ctx.moveTo(100, height - 50);
    ctx.lineTo(100, 50);
    ctx.lineTo(width - 50, height - 50);
    ctx.strokeStyle = '#aaa';
    ctx.stroke();

    // Draw bars
    const barWidth = 50;
    const gap = 60;
    const maxValue = Math.max(...data.map((d) => d.value));

    data.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * (height - 100);
      const x = 100 + index * gap;
      const y = height - barHeight - 50;

      // Draw bars
      ctx.fillStyle = '#4C51BF'; // Bar color
      ctx.fillRect(x, y, barWidth, barHeight);

      // Draw labels
      ctx.fillStyle = '#333';
      ctx.fillText(item.label, x + barWidth / 2, height - 20);
    });

    // Draw values above bars
    data.forEach((item, index) => {
      const x = 100 + index * gap + barWidth / 2;
      const y = height - (item.value / maxValue) * (height - 100) - 60;
      
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.fillText(item.value, x, y);
    });
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <canvas ref={canvasRef} width="600" height="350" className="bg-white rounded shadow"></canvas>
    </div>
  );
}

export default DashboardGraph;
