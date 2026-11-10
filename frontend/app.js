// Complete A to Z Language List (Traditional, Modern, Regional & Global)
const languages = [
    { code: 'ar', name: 'Arabic (Modern Standard - العربية)' },
    { code: 'ar-classical', name: 'Arabic (Classical / Quranic)' },
    { code: 'as', name: 'Assamese (অসমীয়া)' },
    { code: 'bn', name: 'Bengali (বাংলা)' },
    { code: 'brx', name: 'Bodo (बड़ो)' },
    { code: 'zh-CN', name: 'Chinese (Simplified / Modern - 简体中文)' },
    { code: 'zh-TW', name: 'Chinese (Traditional - 繁體中文)' },
    { code: 'zh-HK', name: 'Chinese (Cantonese / Traditional - 廣東話)' },
    { code: 'doi', name: 'Dogri (डोगरी)' },
    { code: 'nl', name: 'Dutch (Nederlands)' },
    { code: 'en-GB', name: 'English (Modern UK)' },
    { code: 'en-US', name: 'English (Modern US)' },
    { code: 'fr', name: 'French (Modern - Français)' },
    { code: 'de', name: 'German (Modern - Deutsch)' },
    { code: 'el', name: 'Greek (Modern - Ελληνικά)' },
    { code: 'grc', name: 'Greek (Ancient / Traditional)' },
    { code: 'gu', name: 'Gujarati (ગુજરાતી)' },
    { code: 'ha', name: 'Hausa' },
    { code: 'he', name: 'Hebrew (Modern / Traditional - עברית)' },
    { code: 'hi-IN', name: 'Hindi (Modern - हिन्दी)' },
    { code: 'hu', name: 'Hungarian (Magyar)' },
    { code: 'is', name: 'Icelandic (Íslenska)' },
    { code: 'id', name: 'Indonesian (Bahasa Indonesia)' },
    { code: 'it', name: 'Italian (Italiano)' },
    { code: 'ja', name: 'Japanese (Modern - 日本語)' },
    { code: 'ja-classical', name: 'Japanese (Classical / Kanbun)' },
    { code: 'kn', name: 'Kannada (ಕನ್ನಡ)' },
    { code: 'ks', name: 'Kashmiri (कॉशुर)' },
    { code: 'kk', name: 'Kazakh (Қазақ тілі)' },
    { code: 'km', name: 'Khmer (ភាសាខ្មែរ)' },
    { code: 'kok', name: 'Konkani (कोंकणी)' },
    { code: 'ko', name: 'Korean (Modern - 한국어)' },
    { code: 'la', name: 'Latin (Classical)' },
    { code: 'mai', name: 'Maithili (मैथिली)' },
    { code: 'ml', name: 'Malayalam (മലയാളം)' },
    { code: 'ms', name: 'Malay (Bahasa Melayu)' },
    { code: 'mni', name: 'Manipuri (Meitei)' },
    { code: 'mr', name: 'Marathi (मराठी)' },
    { code: 'mn', name: 'Mongolian (Монгол)' },
    { code: 'ne', name: 'Nepali (नेपाली)' },
    { code: 'no', name: 'Norwegian (Norsk)' },
    { code: 'or', name: 'Odia (ଓଡ଼ିଆ)' },
    { code: 'fa', name: 'Persian / Farsi (فارسی)' },
    { code: 'pl', name: 'Polish (Polski)' },
    { code: 'pt', name: 'Portuguese (Modern - Português)' },
    { code: 'pa', name: 'Punjabi (ਪੰਜਾਬੀ)' },
    { code: 'ro', name: 'Romanian (Română)' },
    { code: 'ru', name: 'Russian (Русский)' },
    { code: 'sa', name: 'Sanskrit (Classical - संस्कृतम्)' },
    { code: 'sat', name: 'Santali (সাঁওতালি)' },
    { code: 'sd', name: 'Sindhi (सिन्धी)' },
    { code: 'es', name: 'Spanish (Modern - Español)' },
    { code: 'sw', name: 'Swahili (Kiswahili)' },
    { code: 'sv', name: 'Swedish (Svenska)' },
    { code: 'ta', name: 'Tamil (Classical/Modern - தமிழ்)' },
    { code: 'te', name: 'Telugu (తెలుగు)' },
    { code: 'th', name: 'Thai (ไทย)' },
    { code: 'tr', name: 'Turkish (Türkçe)' },
    { code: 'uk', name: 'Ukrainian (Українська)' },
    { code: 'ur', name: 'Urdu (اردو)' },
    { code: 'uz', name: 'Uzbek (Oʻzbekcha)' },
    { code: 'vi', name: 'Vietnamese (Tiếng Việt)' },
    { code: 'cy', name: 'Welsh (Cymraeg)' },
    { code: 'xh', name: 'Xhosa (isiXhosa)' },
    { code: 'yi', name: 'Yiddish (ייִדיশ)' },
    { code: 'yo', name: 'Yoruba (Èdè Yorùbá)' },
    { code: 'zu', name: 'Zulu (isiZulu)' }
];

languages.sort((a, b) => a.name.localeCompare(b.name));

function setupCustomDropdown(inputId, listId, defaultValue) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (!input || !list) return;

    input.value = defaultValue;

    function renderOptions(filter = '') {
        list.innerHTML = '';
        const filtered = languages.filter(lang => 
            lang.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (filtered.length === 0) {
            const noItem = document.createElement('div');
            noItem.className = 'dropdown-item';
            noItem.innerText = 'No language found';
            list.appendChild(noItem);
            return;
        }

        filtered.forEach(lang => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.innerText = lang.name;
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                input.value = lang.name;
                list.classList.remove('active');
            });
            list.appendChild(item);
        });
    }

    input.addEventListener('focus', () => {
        renderOptions('');
        list.classList.add('active');
    });

    input.addEventListener('input', (e) => {
        renderOptions(e.target.value);
        list.classList.add('active');
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !list.contains(e.target)) {
            list.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupCustomDropdown('sourceInput', 'sourceList', 'Hindi (Modern - हिन्दी)');
    setupCustomDropdown('targetInput', 'targetList', 'English (Modern US)');
});

// Text to Speech Functionality
function speakText(text, langCode) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Prevents audio overlapping
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        window.speechSynthesis.speak(utterance);
    }
}

// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = async (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }

        document.getElementById('speechOutput').innerText = transcript;

        const sourceInput = document.getElementById('sourceInput');
        const targetInput = document.getElementById('targetInput');

        const selectedSourceObj = languages.find(l => l.name === sourceInput.value);
        const selectedTargetObj = languages.find(l => l.name === targetInput.value);

        const sourceCode = selectedSourceObj ? selectedSourceObj.code : 'hi';
        const targetCode = selectedTargetObj ? selectedTargetObj.code : 'en';

        try {
            document.getElementById('translatedOutput').innerText = "Translating...";
            const response = await fetch('https://ambient-voice-translater.onrender.com/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: transcript,
                    source_lang: sourceCode,
                    target_lang: targetCode
                })
            });

            const data = await response.json();
            if (data.translated_text) {
                document.getElementById('translatedOutput').innerText = data.translated_text;
                // Speak out translation
                speakText(data.translated_text, targetCode);
            }
        } catch (error) {
            console.error("Translation Error:", error);
            document.getElementById('translatedOutput').innerText = "Error in translation backend.";
        }
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
        const enableToggle = document.getElementById('enableToggle');
        if (enableToggle && enableToggle.checked) {
            recognition.start();
        }
    };
} else {
    alert("Web Speech API is not supported in this browser. Please use Chrome or Edge.");
}

// Toggle Switch Logic
const enableToggle = document.getElementById('enableToggle');
const statusText = document.getElementById('statusText');

if (enableToggle && statusText) {
    enableToggle.addEventListener('change', () => {
        const sourceInput = document.getElementById('sourceInput');
        if (enableToggle.checked) {
            statusText.innerText = "Listening & Translating...";
            statusText.style.color = "#22c55e";
            if (recognition) {
                const selectedLangObj = languages.find(l => l.name === sourceInput.value);
                recognition.lang = selectedLangObj ? selectedLangObj.code : 'hi-IN';
                recognition.start();
            }
        } else {
            statusText.innerText = "OFF";
            statusText.style.color = "#ef4444";
            if (recognition) {
                recognition.stop();
            }
            window.speechSynthesis.cancel();
        }
    });
}