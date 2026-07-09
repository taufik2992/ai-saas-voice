import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { HealtCheck } from "./healt-check";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorBoundary } from "react-error-boundary";
export default function TestPage() {
  prefetch(trpc.health.queryOptions());

  return (
    <HydrateClient>
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-background to-muted/20 p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Trpc Test Page
            </h1>
            <p className="text-sm text-muted-foreground">
              Checking system connectivity
            </p>
          </div>

          <ErrorBoundary fallback={<div>Something went Wrong</div>}>
            <Suspense fallback={<Skeleton className="h-6 w-6" />}>
              <HealtCheck />
            </Suspense>
          </ErrorBoundary>

          <div className="flex justify-center">
            <div className="h-px w-16 bg-border" />
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Last checked: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </HydrateClient>
  );
}
