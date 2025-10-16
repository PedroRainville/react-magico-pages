import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Handshake, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";

const Partners = () => {
  const navigate = useNavigate();

  const sections = [
    { label: "Minhas Conexões", badge: 1, path: "/partners" },
    { label: "Convites Recebidos", badge: 2, path: "/partners" },
    { label: "Convites Enviados", badge: null, path: "/sent-invites" },
    { label: "Parceiros cadastrados por mim", badge: null, path: "/registered-partners" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <div className="bg-white border-b border-border">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Voltar</span>
          </button>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-foreground" />
            <span className="text-sm text-foreground">Yuri Santana</span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-md mx-auto w-full p-4">
        <div className="flex items-center gap-3 mb-6">
          <Handshake className="w-6 h-6 text-foreground" />
          <h2 className="text-lg font-bold text-foreground">Parceiros</h2>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder=""
            className="pl-10 bg-white border border-border"
          />
        </div>

        <div className="space-y-3">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => navigate(section.path)}
              className="relative w-full p-4 bg-[#1a5f3f] hover:bg-[#164f34] text-white font-semibold rounded transition-colors"
            >
              {section.badge && (
                <Badge className="absolute top-2 right-2 bg-destructive text-white">
                  {section.badge}
                </Badge>
              )}
              {section.label}
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-sm text-red-600">
            <strong>Atenção:</strong> se durante o cadastro o sistema reconhecer o parceiro pelo Telefone e
            e-mail ele retornará uma mensagem informando que ele já está cadastrado e
            mostrará o cadastro para você enviar uma solicitação de conexão.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Partners;
