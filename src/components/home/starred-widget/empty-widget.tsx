// External Components
import { Button } from "@/components/ui/button";

export function EmptyWidget() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-1 items-center justify-center rounded-xl border shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no starred widget
          </h3>
          <p className="text-sm text-muted-foreground">
            You can star a widget below.
          </p>
          <Button className="mt-4">Add Widget</Button>
        </div>
      </div>
    </main>
  );
}
