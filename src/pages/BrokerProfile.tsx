import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User as UserIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const BrokerProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "Bruno Pereira",
    apellido: "",
    creci: "12256 - SP",
    telefone: "(11) 5555-5555",
    celular: "(11) 9 9999-9999",
    email: "eduardosilva@gmail.com",
    aptidaoPrincipal: "Casa",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <div className="bg-white border-b border-border">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Voltar</span>
          </button>
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-foreground" />
            <span className="text-sm text-foreground">Yuri Santana</span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-md mx-auto w-full p-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <UserIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-foreground">Bruno Pereira</h2>
            <p className="text-sm text-muted-foreground">CRECI: 12256 - SP</p>
            <button className="text-sm text-primary underline">1 imóveis em comum com você</button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="text-foreground">Nome: Bruno Pereira</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div>
            <Label className="text-foreground">Apellido</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div>
            <Label className="text-foreground">Nº CRECI: 1234568 - SP</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div>
            <Label className="text-foreground">Telefone: (11) 5555-5555</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div>
            <Label className="text-foreground">Celular: (11) 9 9999-9999</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div>
            <Label className="text-foreground">E-mail: eduardosilva@gmail.com</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div>
            <Label className="text-foreground">Aptidão principal: Casa</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div className="flex items-center gap-3 mt-6 mb-4">
            <UserIcon className="w-6 h-6 text-foreground" />
            <h3 className="font-bold text-foreground">Endereço</h3>
          </div>

          <div>
            <Label className="text-foreground">Cep</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div>
            <Label className="text-foreground">Endereço</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-foreground">Número</Label>
              <div className="h-px bg-border mt-1" />
            </div>
            <div>
              <Label className="text-foreground">Complemento</Label>
              <div className="h-px bg-border mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-foreground">Bairro</Label>
              <div className="h-px bg-border mt-1" />
            </div>
            <div>
              <Label className="text-foreground">Cidade</Label>
              <div className="h-px bg-border mt-1" />
            </div>
          </div>

          <div>
            <Label className="text-foreground">Estado</Label>
            <div className="h-px bg-border mt-1" />
          </div>

          <Button className="w-full mt-6 bg-primary text-primary-foreground">
            Voltar
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default BrokerProfile;
