import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    setTimeout(() => {
      const r = document.querySelector(":root") as HTMLElement;
      if (newTheme === "dark") {
        r.style.setProperty(
          "--background",
          r.style.getPropertyValue("--dark-background"),
        );
        r.style.setProperty("--main", r.style.getPropertyValue("--dark-main"));
      } else {
        r.style.setProperty(
          "--background",
          r.style.getPropertyValue("--light-background"),
        );
        r.style.setProperty("--main", r.style.getPropertyValue("--light-main"));
      }
    }, 0);
  };

  return (
    <>
      <Button onClick={handleThemeChange} variant="neutral">
        <Sun className="hidden dark:inline stroke-foreground" />
        <Moon className="inline dark:hidden stroke-foreground" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
