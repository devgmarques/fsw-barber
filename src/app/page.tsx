import Image from "next/image";
import { SearchIcon } from "lucide-react";

import { prisma } from "@/lib/prisma";
import { quickSearchOptions } from "@/constants/search-options";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { BookingItem } from "@/components/booking-item";
import { BarberShopItem } from "@/components/barbershop-item";

// TODO => receber agendamento como props
export default async function Home() {
  const barbersShops = await prisma.barberShop.findMany({});
  const popularBarbersShops = await prisma.barberShop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />

      <div className="px-5">
        <h2 className="text-xl font-bold">Olá, Guilherme</h2>

        <p>Terça-feira, 06 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca ..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((item) => (
            <Button key={item.title} className="gap-2" variant="secondary">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={16}
                height={16}
              />
              {item.title}
            </Button>
          ))}
        </div>

        <div className="h-150px relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhore fsw barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbersShops.map((item) => (
            <BarberShopItem barberShop={item} key={item.id} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbersShops.map((item) => (
            <BarberShopItem barberShop={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
