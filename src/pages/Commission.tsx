import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Commission = () => {
  const navigate = useNavigate();
  const [mainBrokerPercent, setMainBrokerPercent] = useState("urbano-6");
  const [customPercent, setCustomPercent] = useState("");
  const [installmentType, setInstallmentType] = useState("dividido");
  const [customRetention, setCustomRetention] = useState("");

  const handleContinue = () => {
    navigate("/documents-upload");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
          Comissão
        </h2>

        <div className="space-y-6">
          <div className="bg-success p-3 rounded">
            <h3 className="text-success-foreground font-semibold text-center">
              Percentual Corretor Principal
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={mainBrokerPercent === "urbano-6"}
                onCheckedChange={() => setMainBrokerPercent("urbano-6")}
              />
              <Label className="text-foreground cursor-pointer">Urbano 6%</Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                checked={mainBrokerPercent === "empresa-5"}
                onCheckedChange={() => setMainBrokerPercent("empresa-5")}
              />
              <Label className="text-foreground cursor-pointer">Empresa 5%</Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                checked={mainBrokerPercent === "rural-3"}
                onCheckedChange={() => setMainBrokerPercent("rural-3")}
              />
              <Label className="text-foreground cursor-pointer">Rural 3%</Label>
            </div>

            <div className="flex items-center gap-3 flex-1">
              <Checkbox
                checked={mainBrokerPercent === "custom"}
                onCheckedChange={() => setMainBrokerPercent("custom")}
              />
              <Label className="text-foreground">Informar Percentual</Label>
              <Input
                value={customPercent}
                onChange={(e) => setCustomPercent(e.target.value)}
                className="w-24"
                placeholder="%"
                disabled={mainBrokerPercent !== "custom"}
              />
            </div>
          </div>

          <div className="bg-success p-3 rounded mt-6">
            <h3 className="text-success-foreground font-semibold text-center">
              Percentual do Parceiro
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={installmentType === "dividido"}
                onCheckedChange={() => setInstallmentType("dividido")}
              />
              <Label className="text-foreground cursor-pointer">Dividido em partes iguais</Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                checked={installmentType === "retencao-50"}
                onCheckedChange={() => setInstallmentType("retencao-50")}
              />
              <Label className="text-foreground cursor-pointer">Retenção 50%</Label>
            </div>

            <div className="flex items-center gap-3 flex-1">
              <Checkbox
                checked={installmentType === "custom-retention"}
                onCheckedChange={() => setInstallmentType("custom-retention")}
              />
              <Label className="text-foreground">Definir Retenção</Label>
              <Input
                value={customRetention}
                onChange={(e) => setCustomRetention(e.target.value)}
                className="w-24"
                placeholder="%"
                disabled={installmentType !== "custom-retention"}
              />
            </div>
          </div>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Avançar
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Commission;
