import { useState } from "react";
import { speak } from "./voice/textToSpeech";
import { listen } from "./voice/speechToText";

/* ================== CONSTANTS ================== */

const WORKS = ["Construction", "Plumbing", "Electrical", "Painting", "Cleaning"];
const WAGES = ["500", "600", "700", "800", "1000"];
const TIMES = ["Morning", "9 AM – 6 PM", "Full Day"];

const TEXT = {
  en: {
    brand: "LabourConnect",
    heroTitle: "Find daily work.\nHire workers instantly.",
    heroSub:
      "A simple, voice-assisted platform connecting daily wage workers and employers.",
    start: "Get Started",

    chooseRole: "Choose your role",
    seeker: "Job Seeker",
    seekerDesc: "I am looking for daily work",
    provider: "Job Provider",
    providerDesc: "I want to hire workers",

    phone: "Enter phone number",
    continue: "Continue",

    seekerTitle: "Job Seeker Details",
    providerTitle: "Job Provider Details",

    work: "Type of Work",
    wage: "Expected Daily Wage",
    time: "Working Hours",
    location: "Location",

    submit: "Submit",
  },
  te: {
    brand: "లేబర్ కనెక్ట్",
    heroTitle: "రోజువారీ పని పొందండి.\nకూలీలను వెంటనే నియమించండి.",
    heroSub:
      "రోజువారీ కూలీలు మరియు యజమానులను కలిపే వాయిస్ సహాయ వేదిక.",
    start: "ప్రారంభించండి",

    chooseRole: "మీ పాత్రను ఎంచుకోండి",
    seeker: "ఉద్యోగార్థి",
    seekerDesc: "నాకు పని కావాలి",
    provider: "యజమాని",
    providerDesc: "నాకు కూలీలు కావాలి",

    phone: "ఫోన్ నంబర్ నమోదు చేయండి",
    continue: "కొనసాగించండి",

    seekerTitle: "ఉద్యోగార్థి వివరాలు",
    providerTitle: "యజమాని వివరాలు",

    work: "పని రకం",
    wage: "రోజువారీ వేతనం",
    time: "పని సమయం",
    location: "ప్రాంతం",

    submit: "సమర్పించండి",
  },
};

export default function App() {
  const [step, setStep] = useState("landing");
  const [lang, setLang] = useState("en");
  const [voiceOn, setVoiceOn] = useState(false);
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  // Job Seeker
  const [work, setWork] = useState("");
  const [wage, setWage] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  // Job Provider
  const [pWork, setPWork] = useState("");
  const [pBudget, setPBudget] = useState("");
  const [pTime, setPTime] = useState("");
  const [pLocation, setPLocation] = useState("");

  const t = TEXT[lang];
  const langCode = lang === "en" ? "en-IN" : "te-IN";

  const say = (msg) => voiceOn && speak(msg, langCode);

  // ✅ Speech-to-text ONLY for location
  const listenLocation = (setter) => {
    listen(langCode, (spokenText) => {
      if (!spokenText) return;
      setter(spokenText);
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">



      {/* ============ NAVBAR ============ */}
      
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <span className="font-semibold text-lg">{t.brand}</span>

          <div className="ml-auto flex gap-3">
            <button
              className="px-4 py-1.5 border rounded-full text-sm"
              onClick={() => setLang(lang === "en" ? "te" : "en")}
            >
              {lang === "en" ? "తెలుగు" : "English"}
            </button>
            <button
              className="px-4 py-1.5 border rounded-full text-sm"
              onClick={() => setVoiceOn(!voiceOn)}
            >
              {voiceOn ? "Voice ON" : "Voice OFF"}
            </button>
          </div>
        </div>
      </header>

      {/* ============ LANDING ============ */}
      {step === "landing" && (
        <main className="max-w-5xl mx-auto px-6 pt-28 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold whitespace-pre-line">
            {t.heroTitle}
          </h1>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            {t.heroSub}
          </p>

          <div className="mt-10">
            <button
              onClick={() => {
                say(t.chooseRole);
                setStep("role");
              }}
              className="bg-black text-white px-8 py-3 rounded-lg text-sm font-medium"
            >
              {t.start}
            </button>
          </div>
        </main>
      )}

      {/* ============ ROLE ============ */}
      {step === "role" && (
        <main className="max-w-4xl mx-auto px-6 pt-24">
          <h2 className="text-3xl font-semibold text-center mb-10">
            {t.chooseRole}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              onClick={() => {
                setRole("seeker");
                setStep("phone");
              }}
              className="border rounded-2xl p-8 hover:shadow-md cursor-pointer"
            >
              <h3 className="text-xl font-medium">{t.seeker}</h3>
              <p className="text-gray-500 mt-2">{t.seekerDesc}</p>
            </div>

            <div
              onClick={() => {
                setRole("provider");
                setStep("phone");
              }}
              className="border rounded-2xl p-8 hover:shadow-md cursor-pointer"
            >
              <h3 className="text-xl font-medium">{t.provider}</h3>
              <p className="text-gray-500 mt-2">{t.providerDesc}</p>
            </div>
          </div>
        </main>
      )}

      {/* ============ PHONE ============ */}
      {step === "phone" && (
        <main className="max-w-md mx-auto px-6 pt-24">
          <div className="border rounded-2xl p-8">
            <label className="block text-sm text-gray-600 mb-2">
              {t.phone}
            </label>
            <input
              className="w-full border rounded-lg px-4 py-3 mb-6"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => say(t.phone)}
            />
            <button
              className="w-full bg-black text-white py-3 rounded-lg"
              onClick={() => {
                if (phone.length < 10) return alert("Invalid phone");
                setStep(role === "seeker" ? "seeker" : "provider");
              }}
            >
              {t.continue}
            </button>
          </div>
        </main>
      )}

      {/* ============ JOB SEEKER ============ */}
      {step === "seeker" && (
        <main className="max-w-xl mx-auto px-6 pt-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t.seekerTitle}
          </h2>

          <div className="space-y-6">
            <SelectBlock title={t.work} options={WORKS} value={work} setValue={setWork} />
            <SelectBlock title={t.wage} options={WAGES.map(w => `₹${w}`)} value={wage} setValue={setWage} />
            <SelectBlock title={t.time} options={TIMES} value={time} setValue={setTime} />

            {/* LOCATION WITH 🎤 */}
            <div>
              <p className="text-sm text-gray-600 mb-2">{t.location}</p>
              <div className="flex gap-2">
                <input
                  className="flex-1 border rounded-lg px-4 py-3"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => say(t.location)}
                />
                <button
                  type="button"
                  className="border rounded-lg px-4 text-lg"
                  onClick={() => listenLocation(setLocation)}
                >
                  🎤
                </button>
              </div>
            </div>

            <button
              className="w-full bg-black text-white py-3 rounded-lg"
              onClick={() => alert("Job Seeker Submitted")}
            >
              {t.submit}
            </button>
          </div>
        </main>
      )}

      {/* ============ JOB PROVIDER ============ */}
      {step === "provider" && (
        <main className="max-w-xl mx-auto px-6 pt-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t.providerTitle}
          </h2>

          <div className="space-y-5">
            <input className="w-full border rounded-lg px-4 py-3" placeholder={t.work} onChange={e => setPWork(e.target.value)} />
            <input className="w-full border rounded-lg px-4 py-3" placeholder={t.wage} onChange={e => setPBudget(e.target.value)} />
            <input className="w-full border rounded-lg px-4 py-3" placeholder={t.time} onChange={e => setPTime(e.target.value)} />

            {/* LOCATION WITH 🎤 */}
            <div className="flex gap-2">
              <input
                className="flex-1 border rounded-lg px-4 py-3"
                value={pLocation}
                onChange={(e) => setPLocation(e.target.value)}
                onFocus={() => say(t.location)}
              />
              <button
                type="button"
                className="border rounded-lg px-4 text-lg"
                onClick={() => listenLocation(setPLocation)}
              >
                🎤
              </button>
            </div>

            <button
              className="w-full bg-black text-white py-3 rounded-lg"
              onClick={() => alert("Job Provider Submitted")}
            >
              {t.submit}
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

/* ============ REUSABLE SELECT BLOCK ============ */
function SelectBlock({ title, options, value, setValue }) {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => setValue(o)}
            className={`px-4 py-2 rounded-lg border text-sm ${
              value === o ? "bg-black text-white" : ""
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
