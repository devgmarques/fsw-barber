"use client";

import { toast } from "sonner";
import { SmartphoneIcon } from "lucide-react";

import { Button } from "./ui/button";

type PhoneItemProps = {
  phone: string;
};

const PhoneItem = ({ phone }: PhoneItemProps) => {
  function handleCopyPhoneClick(phone: string) {
    navigator.clipboard.writeText(phone);
    toast.success("Telefone copiado com sucesso!");
  }

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  );
};

export default PhoneItem;
