import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Handshake, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import BottomNav from "@/components/BottomNav";

const RegisteredPartners = () => {
  const navigate = useNavigate();
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);

  const partners = [
    {
      id: "1",
      name: "Eduardo da Silva",
      creci: "CRECI: 1234568 - SP",
      phone: "(11) 5555-5555",
      mobile: "(11) 9 9999-9999",
      email: "eduardosilva@gmail.com",
    },
    {
      id: "2",
      name: "Paulo Camargo",
      creci: "CRECI: 1234567 - SP",
      phone: "(11) 5555-5555",
      mobile: "(11) 9 9999-9999",
      email: "paulo@gmail.com",
    },
    {
      id: "3",
      name: "Julio de Almeida",
      creci: "CRECI: 1234565 - SP",
      phone: "(11) 5555-5555",
      mobile: "(11) 9 9999-9999",
      email: "julio@gmail.com",
    },
  ];

  const togglePartner = (id: string) => {
    setSelectedPartners((prev) =>
      prev.includes(id)
        ? prev.filter((partnerId) => partnerId !== id)
        : [...prev, id]
    );
  };

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
        <div className="flex items-center gap-3 mb-4">
          <Handshake className="w-6 h-6 text-foreground" />
          <h2 className="text-lg font-bold text-foreground">Parceiros cadastrados</h2>
        </div>

        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
          <p className="text-xs text-red-600">
            <strong>Atenção:</strong> Os parceiros cadastrados só serão visualizados por quem os cadastrou
            e não terá uma senha para acessar ao sistema. Se trata de cadastro de pessoas
            próximas ao usuário que os cadastrou.
          </p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Pesquisar"
            className="pl-10 bg-white border border-border"
          />
        </div>

        <div className="space-y-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="p-4 bg-white border border-border rounded-lg"
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={selectedPartners.includes(partner.id)}
                  onCheckedChange={() => togglePartner(partner.id)}
                  className="mt-1"
                />
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">Nome: {partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.creci}</p>
                  <p className="text-sm text-muted-foreground">
                    Telefone {partner.phone} / Celular: {partner.mobile}
                  </p>
                  <p className="text-sm text-muted-foreground">E-mail: {partner.email}</p>
                </div>
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

export default RegisteredPartners;
