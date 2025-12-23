import React from 'react';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* BU SƏTİR DİZAYNI MƏCBURİ GƏTİRİR */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script>{ `tailwind.config = { theme: { extend: { colors: { glass: "rgba(255,255,255,0.1)" } } } }` }</script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white antialiased overflow-hidden">{children}</body>
    </html>
  )
}
