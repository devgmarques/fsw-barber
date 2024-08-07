import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "lucide-react";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type BarberShopItemProps = {
  barberShop: {
    id: string;
    name: string;
    address: string;
    phones: string[];
    description: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export function BarberShopItem({ barberShop }: BarberShopItemProps) {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pb-3 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            className="rounded-2xl object-cover"
            fill
            alt={barberShop.name}
            src={barberShop.imageUrl}
          />

          <Badge
            className="absolute left-2 top-2 space-x-2"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <span className="text-xs font-semibold">5,0</span>
          </Badge>
        </div>

        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barberShop.name}</h3>

          <p className="truncate text-sm text-gray-400">{barberShop.address}</p>

          <Button variant="secondary" className="mt-3 w-full" asChild>
            <Link href={`/barbershops/${barberShop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
