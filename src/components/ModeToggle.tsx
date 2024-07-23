"use client";

import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button 
      variant="outline" 
      size="icon"
      className="hover:bg-transparent group"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <SunIcon className="group-hover:text-primary" />
      ) : (
        <MoonIcon className="group-hover:text-secondary" />
      )}
    </Button>
  );
}
