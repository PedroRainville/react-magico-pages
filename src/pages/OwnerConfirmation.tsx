import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const OwnerConfirmation = () => {
  const navigate = useNavigate();
  const [isDirect, setIsDirect] = useState<boolean | null>(null);

  const handleContinue = () => {
    if (isDirect !== null) {
      toast.success("Cadastro finalizado com sucesso!");
      navigate("/property-list");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-8 text-center">
          Direto com o proprietário?
        </h2>

        <div className="space-y-4">
          <div
            onClick={() => setIsDirect(true)}
            className="flex items-center gap-3 p-4 border border-border rounded cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <Checkbox checked={isDirect === true} />
            <span className="text-foreground font-medium">Sim</span>
          </div>

          <div
            onClick={() => setIsDirect(false)}
            className="flex items-center gap-3 p-4 border border-border rounded cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <Checkbox checked={isDirect === false} />
            <span className="text-foreground font-medium">Não</span>
          </div>
        </div>

        <Button
          onClick={handleContinue}
          disabled={isDirect === null}
          className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Avançar
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default OwnerConfirmation;
