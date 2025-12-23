import React from 'react';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>AI App Factory Pro</title>
        {/* BU SƏTİR DİZAYNI 100% GƏTİRİR */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script>{ `tailwind.config = { theme: { extend: { colors: { glass: "rgba(255,255,255,0.05)" } } } }` }</script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{` body { background-color: #000; color: #fff; font-family: 'Inter', sans-serif; } `}</style>
      </head>
      <body className="antialiased h-screen overflow-hidden selection:bg-purple-500 selection:text-white">{children}</body>
    </html>
  )
}
