import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Bug,
  CheckIcon,
  HelpCircle,
  ThumbsUp,
  Trophy,
} from "lucide-react";
import type React from "react";
import { useEffect, useState, memo, useMemo } from "react";

interface QuizResultsProps {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

function LevelResults({
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
}: QuizResultsProps) {
  const [progressValue, setProgressValue] = useState(0);
  const unansweredQuestions =
    totalQuestions - (correctAnswers + incorrectAnswers);
  const score = Math.round((correctAnswers / totalQuestions) * 100);

  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(score), 500);
    return () => clearTimeout(timer);
  }, [score]);

  const excellentColor = "text-yellow-600 dark:text-yellow-400";
  const goodColor = "text-blue-600 dark:text-blue-400";
  const needsImprovementColor = "text-orange-600 dark:text-orange-400";

  const excellentBgColor = "bg-yellow-600 dark:bg-yellow-400";
  const goodBgColor = "bg-blue-600 dark:bg-blue-400";
  const needsImprovementBgColor = "bg-orange-600 dark:bg-orange-400";

  // Memoize performance details calculation
  const performanceDetails = useMemo(() => {
    if (score >= 80) {
      return {
        icon: <Trophy className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-500" />,
        message: "¡Excelente! ¡Lo estás haciendo genial!...",
        color: excellentColor,
        bgColor: excellentBgColor,
      };
    } else if (score >= 50) {
      return {
        icon: <ThumbsUp className="h-12 w-12 sm:h-16 sm:w-16 text-blue-500" />,
        message: "¡Buen trabajo! ¡Estás progresando!",
        color: goodColor,
        bgColor: goodBgColor,
      };
    } else {
      return {
        icon: (
          <BookOpen className="h-10 w-10 sm:h-16 sm:w-16 text-orange-500" />
        ),
        message: "¡Sigue practicando! ¡La próxima vez lo harás mejor!",
        color: needsImprovementColor,
        bgColor: needsImprovementBgColor,
      };
    }
  }, [score, excellentColor, excellentBgColor, goodColor, goodBgColor, needsImprovementColor, needsImprovementBgColor]);

  const { icon, message, color, bgColor } = performanceDetails;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center justify-center mb-2">
        <div className="flex flex-col items-center justify-center m-1">
          {icon}
          <p className={`text-xl font-medium mt-1 ${color}`}>{message}</p>
        </div>
        <div className="text-3xl font-bold mb-2">{score}%</div>
        <Progress
          value={progressValue}
          className="w-full h-3"
          indicatorColor={bgColor}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard
          icon={<CheckIcon className="h-8 w-8 text-green-500" />}
          title="Correctas"
          value={correctAnswers}
          total={totalQuestions}
          color="bg-green-100 dark:bg-green-900/20"
          textColor="text-green-700 dark:text-green-400"
        />

        <StatCard
          icon={<Bug className="h-8 w-8 text-red-500" />}
          title="Incorrectas"
          value={incorrectAnswers}
          total={totalQuestions}
          color="bg-red-100 dark:bg-red-900/20"
          textColor="text-red-700 dark:text-red-400"
        />

        <StatCard
          icon={<HelpCircle className="h-8 w-8 text-gray-500" />}
          title="Sin responder"
          value={unansweredQuestions}
          total={totalQuestions}
          color="bg-gray-100 dark:bg-gray-800"
          textColor="text-gray-700 dark:text-gray-400"
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  total: number;
  color: string;
  textColor: string;
}

const StatCard = memo<StatCardProps>(function StatCard({
  icon,
  title,
  value,
  total,
  color,
  textColor,
}) {
  const percentage = useMemo(() => Math.round((value / total) * 100) || 0, [value, total]);

  return (
    <Card className={`${color} border-none dark:border-gray-700`}>
      <CardContent className=" px-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-medium ${textColor}`}>{title}</h3>
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold dark:text-gray-100">{value}</span>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              de {total}
            </span>
            <span className="text-sm font-medium dark:text-gray-300">
              {percentage}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default memo(LevelResults);
