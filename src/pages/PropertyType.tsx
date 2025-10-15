import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const PropertyType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");

  const propertyTypes = [
    "Todos os Tipos de Imóveis",
    "Apartamento",
    "Casa",
    "Área para Loteamento",
    "Galpão",
    "Casa em Condomínio",
    "Cobertura",
    "Fazenda",
    "Edifício Residencial",
    "Terreno / Sítio / Chácara",
  ];

  const handleContinue = () => {
    if (selectedType) {
      navigate("/property-data");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          Imóvel para troca ou parte da venda
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Selecione o tipo de imóvel para troca ou parte da venda
        </p>

        <RadioGroup value={selectedType} onValueChange={setSelectedType} className="space-y-3">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 border border-border rounded hover:bg-muted/50 transition-colors"
            >
              <RadioGroupItem value={type} id={`type-${index}`} />
              <Label htmlFor={`type-${index}`} className="flex-1 cursor-pointer text-foreground">
                {type}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          onClick={handleContinue}
          disabled={!selectedType}
          className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Avançar
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default PropertyType;
