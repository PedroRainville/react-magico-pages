import { ArrowLeft, Home, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PropertyRegistrationHeaderProps {
  userName?: string;
}

const PropertyRegistrationHeader = ({ userName = "Yuri Santana" }: PropertyRegistrationHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-border">
      <div className="flex items-center justify-between p-4 max-w-md mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Voltar</span>
        </button>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-foreground" />
          <span className="text-sm text-foreground">{userName}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 py-4">
        <Home className="w-8 h-8 text-foreground" />
        <h1 className="text-xl font-bold text-foreground">Cadastro de Imóvel</h1>
      </div>
    </div>
  );
};

export default PropertyRegistrationHeader;
