import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-purple-500 mb-6">Crypto Dashboard</h1>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="p-2 hover:bg-purple-600 rounded">Wallet</a>
          <a href="#" className="p-2 hover:bg-purple-600 rounded">Market</a>
          <a href="#" className="p-2 hover:bg-purple-600 rounded">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-xl font-semibold mb-4">Price Chart</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          {/* Placeholder for the price chart */}
          <div className="h-64 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
            <span className="text-lg">Price Chart Placeholder</span>
          </div>
        </div>

        {/* Buy/Sell Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-lg transition">
            Buy
          </button>
          <button className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg transition">
            Sell
          </button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;