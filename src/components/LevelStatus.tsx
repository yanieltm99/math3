import { Bug, CheckIcon, HelpCircle } from "lucide-react";

interface LevelStatusProps {
  correct: number;
  incorrect: number;
  unanswered: number;
}

export const LevelStatus = ({
  correct,
  incorrect,
  unanswered,
}: LevelStatusProps) => {
  return (
    <div className="flex items-center gap-6">
      {/* Correctas */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main">
          <CheckIcon className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="hidden sm:block">Correctas</span>
          <span className="">{correct}</span>
        </div>
      </div>

      {/* Incorrectas */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full text-destructive-foreground bg-destructive">
          <Bug className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="hidden sm:block">Incorrectas</span>
          <span className="">{incorrect}</span>
        </div>
      </div>

      {/* Pendientes */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-background">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="hidden sm:block">Pendientes</span>
          <span className="">{unanswered}</span>
        </div>
      </div>
    </div>
  );
};
