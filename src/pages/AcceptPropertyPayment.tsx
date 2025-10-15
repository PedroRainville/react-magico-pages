import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const AcceptPropertyPayment = () => {
  const navigate = useNavigate();
  const [acceptsProperty, setAcceptsProperty] = useState<boolean | null>(null);

  const handleContinue = () => {
    if (acceptsProperty !== null) {
      navigate("/property-type");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-8">
          Aceita imóvel como parte do pagamento ou troca?
        </h2>

        <div className="space-y-4">
          <div
            onClick={() => setAcceptsProperty(true)}
            className="flex items-center gap-3 p-4 border border-border rounded cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <Checkbox checked={acceptsProperty === true} />
            <span className="text-foreground font-medium">Sim</span>
          </div>

          <div
            onClick={() => setAcceptsProperty(false)}
            className="flex items-center gap-3 p-4 border border-border rounded cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <Checkbox checked={acceptsProperty === false} />
            <span className="text-foreground font-medium">Não</span>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default AcceptPropertyPayment;
