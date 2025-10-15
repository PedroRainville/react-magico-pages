import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface Property {
  id: number;
  description: string;
  value: string;
  region: string;
  image: string;
}

const PropertyList = () => {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);

  const properties: Property[] = [
    {
      id: 1,
      description: "Casa Alto Padrão",
      value: "750.000,00",
      region: "Centro",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      description: "Apartamento Alto",
      value: "750.000,00",
      region: "Centro",
      image: "/placeholder.svg"
    }
  ];

  const handleContinue = () => {
    if (selectedProperty !== null) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
          Selecione entre os imóveis cadastrados
        </h2>

        <div className="space-y-4">
          {properties.map((property) => (
            <div
              key={property.id}
              onClick={() => setSelectedProperty(property.id)}
              className="border border-border rounded-lg p-4 cursor-pointer hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Checkbox checked={selectedProperty === property.id} />
                <div className="flex-1">
                  <p className="text-sm text-foreground mb-1">
                    <span className="font-medium">Descrição:</span> {property.description}
                  </p>
                  <p className="text-sm text-foreground mb-1">
                    <span className="font-medium">Valor de venda:</span> {property.value}
                  </p>
                  <p className="text-sm text-foreground">
                    <span className="font-medium">Região:</span> {property.region}
                  </p>
                </div>
                <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={property.image}
                    alt={property.description}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={handleContinue}
          disabled={selectedProperty === null}
          className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Avançar
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default PropertyList;
