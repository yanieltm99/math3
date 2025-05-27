import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import { ArrowRight, Star } from "lucide-react";

import teaching from "../../public/Teaching-rafiki.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-300 dark:from-blue-800 dark:to-blue-900 py-6 md:py-14">
        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-6">
                  Diviértete mientras aprendes Matemáticas ✨
                </h1>
                <p className="mt-3 text-lg">
                  Aquí encontrarás una variedad de ejercicios para mejorar tus
                  habilidades en Matemáticas.
                </p>
              </div>
              <Link to="/exercises">
                <Button
                  size="lg"
                  className="group relative bg-green-400 text-xl font-bold cursor-pointer"
                >
                  <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-4 border-black bg-yellow-300 animate-pulse transition-transform duration-1000 group-hover:scale-110">
                    <Star className="h-4 w-4 text-black" />
                  </span>
                  Comienza a aprender
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <img src={teaching} alt="Education" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
