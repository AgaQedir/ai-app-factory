import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Crypto Price',
      data: [20, 30, 25, 40, 50, 45, 60],
      fill: true,
      backgroundColor: 'rgba(139, 0, 255, 0.2)',
      borderColor: 'rgba(139, 0, 255, 1)',
      tension: 0.1,
    },
  ],
};

const CryptoDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-1/4 p-5 bg-gray-800">
        <h2 className="text-2xl mb-6">Crypto Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li><button className="w-full text-left p-2 hover:bg-purple-600 rounded">Wallet</button></li>
            <li><button className="w-full text-left p-2 hover:bg-purple-600 rounded">Market</button></li>
            <li><button className="w-full text-left p-2 hover:bg-purple-600 rounded">Settings</button></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-5">
        <h1 className="text-3xl mb-4">Current Price Chart</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 mb-10">
          <Line data={data} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="flex justify-between">
          <button className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded">Buy</button>
          <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded">Sell</button>
        </div>
      </main>
    </div>
  );
};

export default CryptoDashboard;