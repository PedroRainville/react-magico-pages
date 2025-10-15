import { Home, Handshake, Building2, FileText, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Handshake, path: "/", label: "Negociação" },
    { icon: Home, path: "/", label: "Home" },
    { icon: Building2, path: "/property-list", label: "Imóveis" },
    { icon: FileText, path: "/", label: "Documentos" },
    { icon: User, path: "/", label: "Perfil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <div className="flex items-center justify-around max-w-md mx-auto py-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 p-2 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
