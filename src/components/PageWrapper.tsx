import React from "react";
import { ScrollArea } from "./ui/scroll-area";

export default function PageWrapper({
  children,
  scrollable = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  const contentWrapper = (
    <div className="min-h-[100dvh] bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pt-[70px] prose-h4:xl:text-2xl prose-h4:lg:text-xl prose-h4:text-lg">
      <div className="py-12 mx-auto w-container max-h-full text-foreground text-left">
        {children}
      </div>
    </div>
  );

  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh)]">{contentWrapper}</ScrollArea>
      ) : (
        contentWrapper
      )}
    </>
  );
}
