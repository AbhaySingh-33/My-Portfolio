"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string | string[];
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export default function TypewriterText({
  text,
  delay = 0,
  speed = 50,
  className = "",
  showCursor = true,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0); // For array of strings

  useEffect(() => {
    const currentString = Array.isArray(text) ? text[textIndex] : text;
    
    // Initial start delay
    if (displayText === "" && !isDeleting && currentIndex === 0 && delay > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentString[0]);
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentString.length) {
          setDisplayText(currentString.substring(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        } else if (Array.isArray(text)) {
          // Finished typing, wait then delete (if array)
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(currentString.substring(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          // Finished deleting, switch to next string
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % text.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, speed, text, isDeleting, textIndex, displayText]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
}
