from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from deep_translator import GoogleTranslator

app = FastAPI(title="Ambient Translator API")

# Frontend se request allow karne ke liye CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TranslationRequest(BaseModel):
    text: str
    source_lang: str
    target_lang: str

@app.get("/")
def home():
    return {"message": "Ambient Voice Translator Backend is Running!"}

@app.post("/translate")
def translate_text(request: TranslationRequest):
    try:
        if not request.text.strip():
            return {"translated_text": ""}
            
        # Code formatting (e.g., 'en-US' -> 'en')
        source_code = request.source_lang.split('-')[0]
        target_code = request.target_lang.split('-')[0]

        # Translation Logic
        translated = GoogleTranslator(source=source_code, target=target_code).translate(request.text)
        
        return {
            "original_text": request.text,
            "translated_text": translated,
            "source_lang": source_code,
            "target_lang": target_code
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))