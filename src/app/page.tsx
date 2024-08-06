import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
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

        <div className="h-150px relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhore fsw barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
