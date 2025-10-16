import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User as UserIcon, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BottomNav from "@/components/BottomNav";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "Yuri Santana",
    apellido: "",
    creci: "125689558",
    telefone: "(11) 5555-5555",
    celular: "(11) 9 9999-9999",
    email: "yuri.santana@bhflag.systems",
    aptidaoPrincipal: "Casa",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const propertyTypes = [
    "Todos os Tipos de Imóveis",
    "Apartamento",
    "Área para Loteamento",
    "Casa",
    "Casa de Condomínio",
    "Cobertura",
    "Comercial",
    "Edifício Residencial",
    "Fazenda / Sítios / Chácaras",
    "Flat",
    "Internacional (País)",
    "Kitnet / Conjugado",
    "Lote / Terreno",
    "Praia",
    "Sobrado",
    "Varaneio / Montanha / Estância",
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
            <UserIcon className="w-5 h-5 text-foreground" />
            <span className="text-sm text-foreground">Yuri Santana</span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-md mx-auto w-full p-4">
        <div className="flex items-center gap-3 mb-6">
          <UserIcon className="w-6 h-6 text-foreground" />
          <h2 className="text-lg font-bold text-foreground">Alterar meus dados</h2>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="nome" className="text-foreground">Nome: Yuri Santana</Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="apellido" className="text-foreground">Apellido</Label>
            <Input
              id="apellido"
              value={formData.apellido}
              onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="creci" className="text-foreground">Nº CRECI: 125689558</Label>
            <Input
              id="creci"
              value={formData.creci}
              onChange={(e) => setFormData({ ...formData, creci: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="telefone" className="text-foreground">Telefone: (11) 5555-5555</Label>
            <Input
              id="telefone"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="celular" className="text-foreground">Celular: (11) 9 9999-9999</Label>
            <Input
              id="celular"
              value={formData.celular}
              onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground">E-mail: yuri.santana@bhflag.systems</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Label className="text-foreground">Aptidão principal: Casa</Label>
              <div className="h-px bg-border mt-1" />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="text-primary text-sm">
                  Outras Opções
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm">
                <DialogHeader>
                  <DialogTitle>Aptidão principal</DialogTitle>
                </DialogHeader>
                <RadioGroup value={formData.aptidaoPrincipal} onValueChange={(value) => setFormData({ ...formData, aptidaoPrincipal: value })}>
                  <div className="max-h-96 overflow-y-auto space-y-3">
                    {propertyTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={type} />
                        <Label htmlFor={type} className="cursor-pointer">{type}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center gap-3 mt-6 mb-4">
            <UserIcon className="w-6 h-6 text-foreground" />
            <h3 className="font-bold text-foreground">Meu Endereço</h3>
          </div>

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

          <div className="mt-8">
            <h3 className="font-bold text-center mb-4 text-foreground">Imagem do perfil</h3>
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <UserIcon className="w-12 h-12 text-muted-foreground" />
              </div>
              <Button variant="link" className="text-primary">
                Procurar imagem
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              variant="destructive"
              onClick={() => navigate(-1)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => navigate(-1)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Atualizar
            </Button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default EditProfile;
