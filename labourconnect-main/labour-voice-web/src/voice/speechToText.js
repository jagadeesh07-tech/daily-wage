export function listen(lang = "en-IN", onResult) {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser");
      return;
    }
  
    const recognition = new window.webkitSpeechRecognition();
  
    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = false;
  
    recognition.onstart = () => {
      console.log("🎤 Mic started");
    };
  
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      console.log("✅ Heard:", text);
      onResult(text);
    };
  
    recognition.onerror = (event) => {
      console.error("❌ Speech error:", event.error);
      alert("Mic error: " + event.error);
    };
  
    recognition.onend = () => {
      console.log("🛑 Mic stopped");
    };
  
    recognition.start();
  }
  