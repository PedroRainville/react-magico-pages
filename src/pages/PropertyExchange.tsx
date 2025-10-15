import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertyExchange = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState(false);

  const handleContinue = () => {
    if (!selectedType) {
      setError(true);
      return;
    }
    navigate("/property-type-selection");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
          Imóvel para troca ou parte da venda
        </h2>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-foreground mb-4">
              Selecione o tipo de imóvel para troca ou parte da venda
            </p>
            
            <Select value={selectedType} onValueChange={(value) => {
              setSelectedType(value);
              setError(false);
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
                <SelectItem value="terreno">Terreno</SelectItem>
                <SelectItem value="rural">Imóvel Rural</SelectItem>
              </SelectContent>
            </Select>

            {error && (
              <p className="text-sm text-destructive mt-2">
                Pode ser mais de um imóvel!
              </p>
            )}
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

export default PropertyExchange;
