"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaWallet, FaChartLine, FaCog } from 'lucide-react';

const Dashboard: React.FC = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Price',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(138, 43, 226, 1)', // Neon purple
                backgroundColor: 'rgba(138, 43, 226, 0.3)',
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
            },
        },
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <aside className="w-1/4 bg-gray-800 p-5 shadow-lg">
                <h1 className="text-2xl font-bold mb-5">Crypto Dashboard</h1>
                <ul>
                    <li className="flex items-center mb-4">
                        <FaWallet className="mr-2" /> Wallet
                    </li>
                    <li className="flex items-center mb-4">
                        <FaChartLine className="mr-2" /> Market
                    </li>
                    <li className="flex items-center mb-4">
                        <FaCog className="mr-2" /> Settings
                    </li>
                </ul>
            </aside>
            <main className="flex-1 p-5">
                <div className="mb-10">
                    <h2 className="text-xl font-bold mb-4">Price Chart</h2>
                    <Line data={data} options={options} />
                </div>
                <div className="flex justify-around">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
                        Buy
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                        Sell
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
//