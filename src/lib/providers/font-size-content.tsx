import type React from "react";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FontSizeContextType = {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
};

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined,
);

const MIN_FONT_SIZE = -6;
const MAX_FONT_SIZE = 6;
const DEFAULT_FONT_SIZE = 0;
const FONT_SIZE_KEY = "math-exercises-font-size";

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  // Load font size from localStorage on mount
  useEffect(() => {
    try {
      const savedFontSize = localStorage.getItem(FONT_SIZE_KEY);
      if (savedFontSize) {
        const parsedSize = Number.parseInt(savedFontSize);
        // Validate the parsed size is within bounds
        if (
          !isNaN(parsedSize) &&
          parsedSize >= MIN_FONT_SIZE &&
          parsedSize <= MAX_FONT_SIZE
        ) {
          setFontSize(parsedSize);
        }
      }
    } catch (error) {
      console.error("Error loading font size from localStorage:", error);
    }
  }, []); // Empty dependency array ensures this only runs once on mount

  // Save font size to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem(FONT_SIZE_KEY, fontSize.toString());
      document.documentElement.setAttribute(
        "data-font-size",
        fontSize.toString(),
      );
    } catch (error) {
      console.error("Error saving font size to localStorage:", error);
    }
  }, [fontSize]); // Only run when fontSize changes

  const increaseFontSize = () => {
    setFontSize((prev) => (prev < MAX_FONT_SIZE ? prev + 1 : prev));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => (prev > MIN_FONT_SIZE ? prev - 1 : prev));
  };

  const resetFontSize = () => {
    setFontSize(DEFAULT_FONT_SIZE);
  };

  const contextValue = useMemo<FontSizeContextType>(
    () => ({
      fontSize,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
    }),
    [fontSize], // Only recreate when fontSize changes
  );

  return (
    <FontSizeContext.Provider value={contextValue}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
}
