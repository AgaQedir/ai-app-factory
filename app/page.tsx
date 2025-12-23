"use client";

import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = () => {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <aside className="w-1/4 bg-gray-800 p-5">
        <h2 className="text-lg font-bold mb-5">Crypto Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-3 hover:text-purple-500">
              <a href="#wallet">Wallet</a>
            </li>
            <li className="mb-3 hover:text-purple-500">
              <a href="#market">Market</a>
            </li>
            <li className="mb-3 hover:text-purple-500">
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-5">
        <motion.div
          className="bg-gray-800 rounded-lg p-5 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl mb-3">Price Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7e22ce" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7e22ce" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#d1d5db" />
              <YAxis stroke="#d1d5db" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#7e22ce"
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div
          className="flex justify-around"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded shadow-lg flex items-center">
            <Play className="mr-2" /> Buy
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow-lg flex items-center">
            <Play className="mr-2" /> Sell
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;