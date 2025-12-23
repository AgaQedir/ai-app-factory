import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const HomePage = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Price',
                data: [],
                borderColor: 'rgba(156, 39, 176, 1)',
                backgroundColor: 'rgba(156, 39, 176, 0.2)',
                borderWidth: 2,
            },
        ],
    });

    useEffect(() => {
        // Mock price data
        const fetchData = () => {
            const newLabels = Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`);
            const newData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
            setData({
                labels: newLabels,
                datasets: [
                    {
                        label: 'Price',
                        data: newData,
                        borderColor: 'rgba(156, 39, 176, 1)',
                        backgroundColor: 'rgba(156, 39, 176, 0.2)',
                        borderWidth: 2,
                    },
                ],
            });
        };

        fetchData();
    }, []);

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <div className="w-1/4 h-full bg-gray-800 p-5">
                <h2 className="text-2xl font-semibold mb-5">Crypto Dashboard</h2>
                <ul className="space-y-3">
                    <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Wallet</li>
                    <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Market</li>
                    <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Settings</li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-4xl font-bold">Current Price</h1>
                    <div className="space-x-3">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Buy</button>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sell</button>
                    </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-5">
                    <Line data={data} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;