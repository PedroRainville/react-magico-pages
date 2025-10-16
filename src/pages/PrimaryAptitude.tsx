import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const PrimaryAptitude = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("Casa");

  const propertyTypes = [
    "Todos os Tipos de Imóveis",
    "Apartamento",
    "Área para Loteamento",
    "Casa",
    "Casa de Condomínio",
    "Cobertura",
    "Comercial",
    "Edifício Residencial",
    "Fazenda / Sítios / Chácaras",
    "Flat",
    "Internacional (País)",
    "Kitnet / Conjugado",
    "Lote / Terreno",
    "Praia",
    "Sobrado",
    "Varaneio / Montanha / Estância",
  ];

  const handleContinue = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-white border-b border-border">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Voltar</span>
          </button>
        </div>
      </div>

      <main className="flex-1 max-w-md mx-auto w-full p-6">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-foreground mb-2">
            Qual é a sua Aptidão Principal?
          </h1>
          <p className="text-sm text-muted-foreground">
            Escolha as opções desejadas
          </p>
        </div>

        <RadioGroup value={selectedType} onValueChange={setSelectedType}>
          <div className="space-y-3">
            {propertyTypes.map((type) => (
              <div
                key={type}
                className="flex items-center space-x-3 p-3 border-b border-border"
              >
                <RadioGroupItem value={type} id={type} />
                <Label htmlFor={type} className="cursor-pointer flex-1">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <Button
          onClick={handleContinue}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white"
        >
          Cadastrar
        </Button>
      </main>
    </div>
  );
};

export default PrimaryAptitude;
