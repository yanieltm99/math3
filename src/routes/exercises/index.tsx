import PageWrapper from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTopics } from "@/lib/data/selectors";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/exercises/")({
  loader: async () => getTopics(),
  component: ExercisesPage,
});

function ExercisesPage() {
  const topics = Route.useLoaderData();

  return (
    <PageWrapper scrollable={true}>
      <Card className="mb-6">
        <CardContent>
          <h2 className="text-2xl font-bold">
            Elige un tema a continuación para empezar 🚀
          </h2>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Card key={topic.slug}>
            <CardHeader className="border-b-4 pb-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full p-2 text-2xl">{topic.icon}</div>
                <CardTitle className="text-xl">{topic.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="min-h-24">
              <CardDescription>{topic.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {topic.levels.map((level) => (
                  <Badge key={level.slug} variant="warning">
                    {level.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link to={`${topic.slug}`} className="w-full">
                <Button className="w-full font-bold">
                  Comenzar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
