import  { useState, useEffect } from "react";

const TypingText = () => {
  const texts = ["Welcome ..", "Insure your family with us", "Insurance & Investment", ];
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentText = texts[index];
      const currentLetter = currentText.slice(0, letterIndex + 1);
      setDisplayedText(currentLetter);

      if (letterIndex === currentText.length - 1) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setLetterIndex(0);
          setIndex((index + 1) % texts.length);
        }, 1000); // Delay before switching to the next text
      } else {
        setLetterIndex(letterIndex + 1);
      }
    }, 100); // Typing speed
    return () => clearInterval(typingInterval);
  }, [index, letterIndex]);

  return (
    <h2 className="text-xl font-bold sm:text-3xl transition duration-500 ease-in-out transform hover:scale-105">
      {displayedText}
    </h2>
  );
};

export default TypingText;
