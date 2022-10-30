import React, { useMemo } from "react";
import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { useIsDarkMode } from "state/user/hooks";
import { lighten, darken } from "polished";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode();

  const themeObject = useMemo(() => getTheme(darkMode), [darkMode]);
  return <EmotionProvider theme={themeObject}>{children}</EmotionProvider>;
}

function getTheme(darkMode: boolean) {
  return {
    darkMode,
    // color
    colors: {
      white: "#FFFFFF",
      black: "#000000",

      highlight: darkMode ? "#FFFFFF" : "#000000",
      normal: darkMode ? "#C3C5CB" : "#565A69",
      placeholder: darkMode ? darken(0.3, "#C3C5CB") : lighten(0.3, "#565A69"),

      backgroundColor: darkMode ? "#191B1F" : "#FFF",
      shadowColor: darkMode ? "#2C2F36" : "#EDEEF2",
      borderColor: darkMode ? "#40444F" : "#CED0D9",

      transparentLayer: darkMode ? "rgba(74, 73, 73, 0.8)" : "rgba(230, 230, 230, 0.7)",

      error: darkMode ? "#FD4040" : "#DF1F38",
      success: darkMode ? "#27AE60" : "#007D35",
    },

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    // media queries
    mediaWidth: {
      upToExtraSmall: 500,
      upToSmall: 720,
      upToMedium: 960,
      upToLarge: 1280,
    },

    borderRadius: "8px",
  };
}

export enum Z_INDEX {
  zero = 0,
  content = 1,
  dropdown = 1000,
  sticky = 1020,
  fixed = 1030,
  modalBackdrop = 1040,
  offcanvas = 1050,
  modal = 1060,
  popover = 1070,
  tooltip = 1080,
}

export type AppTheme = ReturnType<typeof getTheme>;

declare module "@emotion/react" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface Theme extends AppTheme {}
}
