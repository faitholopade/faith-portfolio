import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
   >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
