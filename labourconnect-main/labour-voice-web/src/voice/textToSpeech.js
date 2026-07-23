export function speak(text, lang = "en-IN") {
    if (!window.speechSynthesis) return;
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95;
  
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
  