import { useRef, useState, useEffect } from "react";

const useAnimatingWords = (wordArrays: string[]) => {
  const wordCount = useRef(0);
  const wordy = wordCount.current
  const [word, setWord] = useState<string>(wordArrays[wordCount.current]);
  const [wordletters, setWordLetters] = useState<string[]>([]);
  const [letterCount, setCount] = useState<number>(1);

  useEffect(() => {
    let reset: NodeJS.Timeout;
    const interval = setInterval(() => {
      if (letterCount > word.split("").length) {
        clearInterval(interval);
        wordCount.current++;

        console.log(wordCount.current);
        if (wordCount.current >= wordArrays.length) wordCount.current = 0;
        wordCount.current = wordCount.current;
        reset = setTimeout(() => {
          setWord(wordArrays[wordCount.current]);
          setWordLetters([]);
          setCount(1);
        }, 2000);
        return;
      }

      if (reset) clearTimeout(reset);

      word.split("").forEach((letter, index) => {
        if (index + 1 !== letterCount) return;

        setWordLetters((eachLetter) => {
          const newarray = [...eachLetter];
          newarray.push(letter);
          return newarray;
        });
      });

      setCount(letterCount + 1);
    }, 50);

    return () => {
      clearInterval(interval);
      clearTimeout(reset);
    };
  }, [letterCount, word, wordArrays]);
  return {
    word,
    wordletters,
    letterCount,
    wordy
    
  };
};

export default useAnimatingWords;
