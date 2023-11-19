"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { tw } from "~lib/helpers";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={tw(
        "rounded-sm",
        "p-1",
        "hover:bg-base-5",
        "active:bg-base-4",
        "dark:hover:bg-base-2 dark:active:bg-base-1 font-bold"
      )}
      type="button"
      aria-label="switch theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}