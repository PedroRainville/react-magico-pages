import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const PartnerAddress = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const handleSubmit = () => {
    navigate("/partners");
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
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-foreground" />
          <h2 className="text-lg font-bold text-foreground">Endereço do Parceiro</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label htmlFor="cep" className="text-foreground">Cep</Label>
              <Input
                id="cep"
                value={formData.cep}
                onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
              />
            </div>
            <Button variant="link" className="text-primary text-sm">
              Esqueça meu cep
            </Button>
          </div>

          <div>
            <Label htmlFor="endereco" className="text-foreground">Endereço</Label>
            <Input
              id="endereco"
              value={formData.endereco}
              onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="numero" className="text-foreground">Número</Label>
              <Input
                id="numero"
                value={formData.numero}
                onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
              />
            </div>
            <div>
              <Label htmlFor="complemento" className="text-foreground">Complemento</Label>
              <Input
                id="complemento"
                value={formData.complemento}
                onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
                className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bairro" className="text-foreground">Bairro</Label>
              <Input
                id="bairro"
                value={formData.bairro}
                onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
              />
            </div>
            <div>
              <Label htmlFor="cidade" className="text-foreground">Cidade</Label>
              <Input
                id="cidade"
                value={formData.cidade}
                onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="estado" className="text-foreground">Estado</Label>
            <Input
              id="estado"
              value={formData.estado}
              onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full mt-8 bg-primary text-primary-foreground"
          >
            Avançar
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default PartnerAddress;
