"use client";

import * as React from "react";
import Link from "next/link";

// Icons
import { ArrowUpRight } from "lucide-react";

// Internal Components
import { EmptyWidget } from "./empty-widget";

// External Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function StarredWidget() {
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);

  return (
    <>
      {isEmpty ? (
        <EmptyWidget />
      ) : (
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Starred Widget</CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent />
        </Card>
      )}
    </>
  );
}
