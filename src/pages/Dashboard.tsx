import { useNavigate } from "react-router-dom";
import { LogOut, User, Home, Building2, Search, FileText, UserPen, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Handshake, label: "Parceiros", path: "/partners", badge: null },
    { icon: Home, label: "Cadastrar Imóvel", path: "/accept-property-payment", badge: null },
    { icon: Building2, label: "Imóveis à venda", path: "/property-list", badge: 2 },
    { icon: Search, label: "Procurar Imóvel", path: "/property-list", badge: 1 },
    { icon: FileText, label: "Relatórios", path: "/", badge: null },
    { icon: UserPen, label: "Alterar meus dados", path: "/edit-profile", badge: null },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <div className="bg-white border-b border-border">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-foreground">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Sair</span>
          </button>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-foreground" />
            <span className="text-sm text-foreground">Yuri Santana</span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-md mx-auto w-full p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Home className="w-8 h-8" />
              <Building2 className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-bold text-foreground">CLICK BUSINESS</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="relative flex flex-col items-center justify-center gap-3 p-6 bg-white border-2 border-border rounded-lg hover:bg-accent transition-colors"
              >
                {item.badge && (
                  <Badge className="absolute top-2 right-2 bg-destructive text-white">
                    {item.badge}
                  </Badge>
                )}
                <Icon className="w-12 h-12 text-foreground" />
                <span className="text-sm font-medium text-foreground text-center">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
