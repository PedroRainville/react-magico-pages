import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";

const DocumentsUpload = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/media-upload");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold text-foreground mb-2 text-center">
          Documentação do Imóvel
        </h2>
        
        <p className="text-center text-foreground mb-4">
          Deseja fazer upload de documentos do imóvel?
        </p>

        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-1">
            Faça upload de documentos do imóvel
          </p>
          <p className="text-xs text-muted-foreground">* Opcional</p>
        </div>

        <div className="w-full max-w-xs mb-12">
          <label
            htmlFor="document-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-12 cursor-pointer hover:bg-muted/30 transition-colors"
          >
            <FileUp className="w-20 h-20 text-foreground mb-4" />
            <input
              id="document-upload"
              type="file"
              multiple
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
          </label>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full max-w-xs bg-success hover:bg-success/90 text-success-foreground"
        >
          Finalizar Cadastro
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default DocumentsUpload;
