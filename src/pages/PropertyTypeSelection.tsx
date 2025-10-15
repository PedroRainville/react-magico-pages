import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const PropertyTypeSelection = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [showLocationDialog, setShowLocationDialog] = useState(false);

  const propertyTypes = [
    "Apartamento",
    "Área para Loteamento",
    "Casa",
    "Casa de Condomínio",
    "Cobertura",
    "Comercial",
    "Edifício Residencial",
    "Fazenda / Sítio / Chácara",
    "Flat",
    "Iinternacional (Pai)",
    "Kitnet / Conjugado",
    "Lote / Terreno",
    "Praia",
    "Sobrado",
    "Vereeiro / Montanha / Estância",
  ];

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setShowLocationDialog(true);
  };

  const handleLocationResponse = (shareLocation: boolean) => {
    setShowLocationDialog(false);
    if (shareLocation) {
      navigate("/property-location-map");
    } else {
      navigate("/property-data");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-2 text-center">
          Tipo
        </h2>
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Escolha a opção desejada
        </p>

        <RadioGroup value={selectedType} onValueChange={handleTypeChange}>
          <div className="space-y-3">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2 border-b border-border pb-3">
                <RadioGroupItem value={type} id={type} />
                <Label htmlFor={type} className="text-foreground cursor-pointer flex-1">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </main>

      <AlertDialog open={showLocationDialog} onOpenChange={setShowLocationDialog}>
        <AlertDialogContent className="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Tipo: {selectedType}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Deseja compartilhar a localização no mapa?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-row gap-2">
            <AlertDialogCancel 
              onClick={() => handleLocationResponse(false)}
              className="flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Não
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => handleLocationResponse(true)}
              className="flex-1 bg-success text-white hover:bg-success/90"
            >
              Sim
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <BottomNav />
    </div>
  );
};

export default PropertyTypeSelection;
