import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Handshake, Search, Eye, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const SentInvites = () => {
  const navigate = useNavigate();

  const invites = [
    {
      name: "Tiago dos Santos",
      creci: "CRECI: 45485 - SP",
      commonProperties: 1,
    },
    {
      name: "André da Silva",
      creci: "CRECI: 65898 - SP",
      commonProperties: 2,
    },
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
          <h2 className="text-lg font-bold text-foreground">Convites Enviados</h2>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Pesquisar"
            className="pl-10 bg-white border border-border"
          />
        </div>

        <div className="space-y-4">
          {invites.map((invite, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-border rounded-lg"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{invite.name}</h3>
                  <p className="text-sm text-muted-foreground">{invite.creci}</p>
                  <button className="text-sm text-primary underline">
                    {invite.commonProperties} parceiro em comum com você
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => navigate("/broker-profile")}
                  className="w-full flex items-center justify-center gap-2 p-2 border border-border rounded hover:bg-accent transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Visualizar Dados</span>
                </button>

                <button className="w-full flex items-center justify-center gap-2 p-2 border border-border rounded hover:bg-accent transition-colors">
                  <X className="w-4 h-4" />
                  <span className="text-sm">Desfazer Convite</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={() => navigate(-1)}
          className="w-full mt-8 bg-primary text-primary-foreground"
        >
          Voltar
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default SentInvites;
