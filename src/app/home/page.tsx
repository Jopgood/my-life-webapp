"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Icons
import { DollarSign, Leaf } from "lucide-react";

// External Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Internal Components
import StarredWidget from "@/components/home/starred-widget";

// Types
interface Plant {
  id: number;
  name: string;
  image?: string;
  nextWaterDate: string;
}

export default function Dashboard() {
  const [plants, setPlants] = React.useState<Plant[]>([
    {
      id: 1,
      name: "Monstera",
      image: "https://i.imgur.com/8iZWJdu.jpeg",
      nextWaterDate: "2024-01-01",
    },
  ]);

  const plantList = plants?.map((plant) => (
    <Card key={plant.id} x-chunk={`dashboard-plant-${plant.id}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{plant.name}</CardTitle>
        <Leaf className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="py-2 w-full">
          <div className="relative w-full h-32">
            <Image
              src={plant?.image ?? ""}
              alt={plant.name}
              layout="fill"
              objectFit="none" // Ensures the image fills the space without cropping
              className={cn("w-full h-full transition-all hover:scale-105")}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Next water date: {plant.nextWaterDate}
        </p>
      </CardContent>
    </Card>
  ));

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 h-screen">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {plantList}
      </div>
      <div className="flex flex-1 flex-row gap-5">
        {/*  STARRED WIDGET 1   */}
        <div className="flex flex-1">
          <StarredWidget />
        </div>

        {/*  STARRED WIDGET 2   */}
        <div className="flex flex-1">
          <StarredWidget />
        </div>
      </div>
    </main>
  );
}
