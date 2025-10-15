import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertyData = () => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("Casa");
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState("");
  const [value, setValue] = useState("");

  const handleContinue = () => {
    navigate("/commission");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
          Dados do Imóvel
        </h2>

        <div className="space-y-6">
          <div>
            <Label className="text-foreground font-medium mb-2 block">Tipo: {propertyType}</Label>
          </div>

          <div>
            <Label htmlFor="description" className="text-foreground font-medium mb-2 block">
              Descrição (Não Obrigatório)
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full"
              placeholder="Descreva o imóvel..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="alqueres" className="text-foreground font-medium mb-2 block">
                Alqueres
              </Label>
              <Input
                id="alqueres"
                className="w-full"
                placeholder="0"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="hectares" className="text-foreground font-medium mb-2 block">
                Hectares
              </Label>
              <Input
                id="hectares"
                className="w-full"
                placeholder="0"
                type="text"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="region" className="text-foreground font-medium mb-2 block">
              Região
            </Label>
            <div className="relative">
              <Input
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full pr-10"
                placeholder="Digite a região..."
              />
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
            </div>
          </div>

          <div>
            <Label htmlFor="value" className="text-foreground font-medium mb-2 block">
              Valor R$
            </Label>
            <Input
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full"
              placeholder="0,00"
              type="text"
            />
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

export default PropertyData;
