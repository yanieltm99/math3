import PageWrapper from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTopic } from "@/lib/data/selectors";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/exercises/$topicSlug/")({
  loader: async ({ params: { topicSlug } }) => getTopic(topicSlug),
  component: TopicPage,
});

function TopicPage() {
  const topic = Route.useLoaderData();

  if (!topic) {
    return (
      <PageWrapper>
        <Card className="mb-6">
          <CardContent>
            <div className="flex justify-between items-center gap-4">
              <h2 className="text-2xl font-bold">Tema no encontrado</h2>
              <Link to="/exercises">
                <Button variant="neutral">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Regresar
                </Button>
              </Link>
            </div>
            <p className="mt-2 text-lg">
              Lo sentimos, no pudimos encontrar el tema que estás buscando.
            </p>
          </CardContent>
        </Card>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper scrollable={true}>
      <Card className="mb-6">
        <CardContent>
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2 text-2xl">{topic.icon}</div>
              <h2 className="text-2xl font-bold">{topic.name}</h2>
            </div>
            <Link to="/exercises">
              <Button variant="neutral">
                <ArrowLeft className="mr-2 h-4 w-4" /> Regresar
              </Button>
            </Link>
          </div>
          <p className="mt-2 text-lg">{topic.description}</p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topic?.levels.map((level) => (
          <Card key={level.slug}>
            <CardHeader className="border-b-4 pb-4">
              <CardTitle className="text-xl flex items-center justify-between">
                {level.name}
                <div className="flex">
                  {Array.from({ length: level.difficulty }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {Array.from({ length: 3 - level.difficulty }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400/30" />
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="min-h-24">
              <p className="text-base">{level.description}</p>
              <div className="mt-4">
                <Badge variant="warning">
                  {level.exercises.length} Exercises
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link to={`${level.slug}`} className="w-full">
                <Button className="w-full font-bold">
                  Iniciar nivel <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
