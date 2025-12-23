import os
import sys
from openai import OpenAI

print('--- 🧠 BÜTÜN KİTABXANALAR YÜKLƏNİR ---')

api_key = os.environ.get('OPENAI_API_KEY')
user_idea = os.environ.get('PROMPT')

if not api_key: sys.exit(1)

client = OpenAI(api_key=api_key)

# GPT-ye deyirik ki, yalnız bizim verdiyimiz kitabxanalari isletsini
system_msg = """You are a Next.js expert. 
Create a SINGLE FILE component (page.tsx).
You CAN use these libraries: 'lucide-react', 'recharts', 'react-chartjs-2', 'chart.js', 'framer-motion'.
Output ONLY code inside ---CLIENT--- tags."""

user_msg = f"Create a modern Next.js page with Tailwind. Request: {user_idea}"

try:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_msg},
            {"role": "user", "content": user_msg}
        ]
    )
    res = response.choices[0].message.content
    
    if "---CLIENT---" in res:
        code = res.split("---CLIENT---")[1].split("---END---")[0].strip()
    else:
        code = res.replace("", "")

    os.makedirs("app", exist_ok=True)
    with open("app/page.tsx", "w", encoding="utf-8") as f:
        f.write(code)

    # BURA VACİBDİR: Bütün lazımi alətləri bura yazırıq
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
        "chart.js": "latest",
        "react-chartjs-2": "latest",
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
        
    tw_config = '''/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./app/**/*.{js,ts,jsx,tsx}"],
      theme: { extend: {} },
      plugins: [],
    }'''
    with open("tailwind.config.js", "w", encoding="utf-8") as f:
        f.write(tw_config)

    print("🎉 HAZIRDIR!")

except Exception as e:
    print(f"XETA: {e}")
    sys.exit(1)
