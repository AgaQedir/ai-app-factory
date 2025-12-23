import os
import sys
from openai import OpenAI

print('--- 🚀 SON HƏMLƏ: ALL-IN-ONE SYSTEM ---')

api_key = os.environ.get('OPENAI_API_KEY')
user_idea = os.environ.get('PROMPT')

if not api_key:
    print("❌ Açar yoxdur!")
    sys.exit(1)

client = OpenAI(api_key=api_key)

# GPT-yə dəqiq əmr
system_msg = """You are a senior React Developer.
Create a SINGLE FILE component (page.tsx).
Use 'lucide-react' for icons.
Use 'recharts' for charts (ResponsiveContainer, AreaChart, etc.).
Use 'framer-motion' for animations.
Style with Tailwind CSS.
Do NOT write 'use client' at the top, I will add it.
Output ONLY the code inside ---CLIENT--- tags."""

user_msg = f"Create a high-end, futuristic dashboard. Topic: {user_idea}. Make it dark mode, neon style."

try:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_msg},
            {"role": "user", "content": user_msg}
        ]
    )
    res = response.choices[0].message.content
    
    # Kodu təmizləyirik
    if "---CLIENT---" in res:
        code = res.split("---CLIENT---")[1].split("---END---")[0].strip()
    else:
        code = res.replace("", "")

    # HƏLL 1: 'use client' məcburi əlavə olunur
    code = code.replace('"use client";', '').replace("'use client';", '')
    final_code = '"use client";\n\n' + code

    os.makedirs("app", exist_ok=True)
    with open("app/page.tsx", "w", encoding="utf-8") as f:
        f.write(final_code)

    # HƏLL 2: Bütün lazımi kitabxanalar (Chart, Motion, vs.)
    pkg = '''{
      "name": "ai-app",
      "version": "1.0.0",
      "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start"
      },
      "dependencies": {
        "next": "latest",
        "react": "latest",
        "react-dom": "latest",
        "lucide-react": "latest",
        "framer-motion": "latest",
        "recharts": "latest",
        "clsx": "latest",
        "tailwind-merge": "latest"
      },
      "devDependencies": {
        "typescript": "latest",
        "@types/node": "latest",
        "@types/react": "latest",
        "@types/react-dom": "latest",
        "postcss": "latest",
        "tailwindcss": "latest"
      }
    }'''
    
    with open("package.json", "w", encoding="utf-8") as f:
        f.write(pkg)
        
    # HƏLL 3: Tailwind Config
    tw_config = '''/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./app/**/*.{js,ts,jsx,tsx}"],
      theme: { extend: {} },
      plugins: [],
    }'''
    with open("tailwind.config.js", "w", encoding="utf-8") as f:
        f.write(tw_config)

    print("🎉 SİSTEM TAM HAZIRDIR!")

except Exception as e:
    print(f"XETA: {e}")
    sys.exit(1)
