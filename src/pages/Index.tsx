import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="text-center max-w-md w-full">
        <div className="mb-8 flex justify-center">
          <Home className="w-20 h-20 text-primary" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-foreground">
          Sistema de Cadastro de Imóveis
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Gerencie seu portfólio de propriedades de forma simples e eficiente
        </p>
        <div className="space-y-4">
          <Button
            onClick={() => navigate("/accept-property-payment")}
            className="w-full bg-success hover:bg-success/90 text-success-foreground"
          >
            Iniciar Cadastro
          </Button>
          <Button
            onClick={() => navigate("/property-list")}
            variant="outline"
            className="w-full"
          >
            Ver Imóveis Cadastrados
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
