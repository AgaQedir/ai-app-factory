"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Wallet, TrendingUp, Settings } from 'lucide-react';

const data = [
    { name: 'Jan', price: 4000 },
    { name: 'Feb', price: 3000 },
    { name: 'Mar', price: 2000 },
    { name: 'Apr', price: 2780 },
    { name: 'May', price: 3908 },
    { name: 'Jun', price: 4800 },
];

const Dashboard = () => {
    return (
        <div className="flex bg-gray-900 text-white min-h-screen">
            <aside className="w-1/4 bg-gray-800 p-4">
                <h1 className="text-xl font-bold mb-4">Crypto Dashboard</h1>
                <nav className="flex flex-col">
                    <div className="flex items-center mb-4">
                        <Wallet size={20} className="mr-2 text-purple-500" />
                        <span>Wallet</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <TrendingUp size={20} className="mr-2 text-purple-500" />
                        <span>Market</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <Settings size={20} className="mr-2 text-purple-500" />
                        <span>Settings</span>
                    </div>
                </nav>
            </aside>
            <main className="flex-grow p-8">
                <h2 className="text-2xl font-bold mb-4">Price Chart</h2>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <LineChart width={800} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="price" stroke="#9b59b6" strokeWidth={2} />
                    </LineChart>
                </div>
                <div className="flex justify-between mt-8">
                    <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">Buy</button>
                    <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">Sell</button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;