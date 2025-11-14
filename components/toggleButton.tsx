"use client";
import { ThemeToggleButton, useThemeToggle } from "./ui/skiper-ui/skiper26";

// Using just the theme toggle button
export const SimpleToggle = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <ThemeToggleButton variant="circle" start="center" />
    </div>
  );
};

// Dark or Light mode only
export const ButtonToggle = () => {
  const { setCrazyDarkTheme, setCrazyLightTheme , isDark } = useThemeToggle({
    variant: "rectangle",
    start: "bottom-up",
  });

  return (
    <div className="flex gap-2">
    {
      isDark?(
        <button
        onClick={setCrazyDarkTheme}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Dark Mode
      </button>
      ):(
        <button
        onClick={setCrazyLightTheme}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Light Mode
      </button>
      )
    }
    </div>
    );
};
