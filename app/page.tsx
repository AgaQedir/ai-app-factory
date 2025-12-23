"use client";

```tsx
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Input, Button } from 'lucide-react';

const data = [
  { name: 'Page A', value: 4000 },
  { name: 'Page B', value: 3000 },
  { name: 'Page C', value: 2000 },
  { name: 'Page D', value: 2780 },
  { name: 'Page E', value: 1890 },
];

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#162447] text-white">
      <motion.header 
        className="text-center mb-16"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-purple-400">
          Generate Full Web Apps with AI in Seconds
        </h1>
      </motion.header>

      <div className="mb-12">
        <motion.input 
          type="text" 
          placeholder="Describe your dream app..." 
          className="p-4 w-80 bg-gray-800 border border-purple-600 rounded-md text-purple-200 placeholder-purple-500 focus:outline-none transition duration-200"
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
        />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-400 mb-8">How it Works</h2>
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <Input className="text-purple-400 w-10 h-10 mb-2" />
            <h3 className="text-lg">1. Type Idea</h3>
          </div>
          <div className="flex flex-col items-center">
            <Input className="text-purple-400 w-10 h-10 mb-2" />
            <h3 className="text-lg">2. AI Builds</h3>
          </div>
          <div className="flex flex-col items-center">
            <Input className="text-purple-400 w-10 h-10 mb-2" />
            <h3 className="text-lg">3. Deploy</h3>
          </div>
        </div>
      </section>

      <ResponsiveContainer width="100%" height={200} className="mb-12">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9a0f84" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6f2c91" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke="#9a0f84" fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>

      <section className="flex space-x-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition ease-in-out duration-200">
          <h4 className="text-xl text-purple-400">Free</h4>
          <p className="text-white">Basic features included.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition ease-in-out duration-200">
          <h4 className="text-xl text-purple-400">Pro</h4>
          <p className="text-white">Advanced features and support.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition ease-in-out duration-200">
          <h4 className="text-xl text-purple-400">Enterprise</h4>
          <p className="text-white">Custom solutions for your needs.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
```