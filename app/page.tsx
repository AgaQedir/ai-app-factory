"use client";
import React, { useState } from 'react';

// İKONLAR (SVG)
const IconZap = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconPlay = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>;

export default function AppFactory() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex h-screen w-full bg-black text-white">
      {/* SOL TƏRƏF */}
      <div className="w-64 bg-[#0a0a0a] border-r border-[#222] hidden md:flex flex-col p-4">
        <div className="flex items-center gap-2 mb-8 text-blue-500 font-bold text-xl">
          <IconZap /> AI Factory
        </div>
        <div className="p-3 bg-[#111] rounded border border-[#333] mb-2 cursor-pointer text-white">Editor</div>
        <div className="p-3 text-gray-400 hover:text-white cursor-pointer">Projects</div>
        <div className="p-3 text-gray-400 hover:text-white cursor-pointer">Settings</div>
      </div>

      {/* ORTA TƏRƏF */}
      <div className="flex-1 flex flex-col bg-[#000]">
        <header className="h-16 border-b border-[#222] flex items-center justify-between px-6">
          <span className="text-gray-400">New Project</span>
          <button className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200 flex items-center gap-2">
            <IconPlay /> Deploy
          </button>
        </header>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Build Apps with AI
            </h1>
            <p className="text-gray-400 mb-8 text-lg">Describe your dream app, and we will code it.</p>

            <div className="relative bg-[#111] border border-[#333] rounded-2xl overflow-hidden p-2">
              <textarea 
                className="w-full h-32 bg-transparent p-4 text-white text-lg focus:outline-none resize-none"
                placeholder="Example: Create a Crypto Trading Dashboard..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className="flex justify-between items-center px-4 py-2 border-t border-[#222]">
                <span className="text-xs text-gray-500">Model: GPT-4o</span>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium">
                  Generate Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
