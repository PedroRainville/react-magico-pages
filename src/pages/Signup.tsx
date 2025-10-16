import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    apellido: "",
    creci: "",
    telefone: "",
    celular: "",
    email: "",
    senha: "",
    confirmeSenha: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = () => {
    if (acceptedTerms) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-white border-b border-border">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Voltar</span>
          </button>
        </div>
      </div>

      <main className="flex-1 max-w-md mx-auto w-full p-6">
        <h1 className="text-2xl font-bold text-center mb-8 text-foreground">Cadastre-se</h1>

        <div className="space-y-4">
          <div>
            <Label htmlFor="nome" className="text-foreground">Nome</Label>
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
            <Label htmlFor="creci" className="text-foreground">Nº CRECI (campo opcional)</Label>
            <Input
              id="creci"
              value={formData.creci}
              onChange={(e) => setFormData({ ...formData, creci: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="telefone" className="text-foreground">Telefone</Label>
            <Input
              id="telefone"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="celular" className="text-foreground">Celular</Label>
            <Input
              id="celular"
              value={formData.celular}
              onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="senha" className="text-foreground">Senha</Label>
            <Input
              id="senha"
              type="password"
              value={formData.senha}
              onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div>
            <Label htmlFor="confirmeSenha" className="text-foreground">Confirme sua senha</Label>
            <Input
              id="confirmeSenha"
              type="password"
              value={formData.confirmeSenha}
              onChange={(e) => setFormData({ ...formData, confirmeSenha: e.target.value })}
              className="border-t-0 border-x-0 rounded-none border-b-primary focus-visible:ring-0 px-0"
            />
          </div>

          <div className="flex items-start gap-2 mt-6">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm text-foreground cursor-pointer">
              Li e concordo com os Termos de Uso e Política de Privacidade
            </Label>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!acceptedTerms}
            className="w-full mt-6 bg-primary text-primary-foreground"
          >
            Avançar
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Signup;
