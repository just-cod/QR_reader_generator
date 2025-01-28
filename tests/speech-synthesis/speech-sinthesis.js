const txtArea = document.getElementsByTagName(`textarea`).value;

const speak = () => {
    const utterance = new SpeechSynthesisUtterance(txtArea);

    window.speechSynthesis.speak(utterance);
};

