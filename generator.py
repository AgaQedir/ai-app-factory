import os
import sys
from openai import OpenAI

print('--- 🧠 GPT BEYNİ İŞƏ DÜŞDÜ ---')

api_key = os.environ.get('OPENAI_API_KEY')
user_idea = os.environ.get('PROMPT')

if not api_key:
    print('❌ XƏTA: API Açar tapılmadı!')
    sys.exit(1)

client = OpenAI(api_key=api_key)

print(f'Sorğu: {user_idea}')

system_msg = "You are an expert Next.js developer. Output code inside ---CLIENT--- and ---END--- tags."
user_msg = f"Create a modern Next.js page (page.tsx) with Tailwind. Request: {user_idea}"

try:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_msg},
            {"role": "user", "content": user_msg}
        ]
    )
    
    res = response.choices[0].message.content
    print('✅ GPT Cavab Verdi!')

    if "---CLIENT---" in res:
        code = res.split("---CLIENT---")[1].split("---END---")[0].strip()
        
        os.makedirs("app", exist_ok=True)
        with open("app/page.tsx", "w", encoding="utf-8") as f:
            f.write(code)
        
        # Package.json
        pkg = '{"name":"ai-app","dependencies":{"next":"latest","react":"latest","react-dom":"latest","lucide-react":"latest"}}'
        with open("package.json", "w", encoding="utf-8") as f:
            f.write(pkg)
            
        print("🎉 FAYLLAR UĞURLA YARANDI!")
    else:
        print("⚠️ GPT kod formatini sehven 'markdown' kimi verdi, duzeldilir...")
        # Ehtiyat variant
        code = res.replace("", "")
        os.makedirs("app", exist_ok=True)
        with open("app/page.tsx", "w", encoding="utf-8") as f:
            f.write(code)
        print("🎉 FAYLLAR (EHTIYAT VARIANTLA) YARANDI!")

except Exception as e:
    print(f"❌ KRITİK XƏTA: {e}")
    sys.exit(1)
