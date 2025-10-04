import { useFontSize } from "@/lib/providers/font-size-content";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function FontSizeAdjuster() {
  const { increaseFontSize, decreaseFontSize } = useFontSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render on client-side to avoid hydration issues
  if (!isClient) return null;

  return (
    <div className="flex items-center justify-end gap-4">
      <Button size="icon" variant="neutral" onClick={decreaseFontSize}>
        A-
      </Button>
      <Button size="icon" variant="neutral" onClick={increaseFontSize}>
        A+
      </Button>
    </div>
  );
}
