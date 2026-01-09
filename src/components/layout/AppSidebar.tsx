import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Palette,
  Calendar,
  Bot,
  BarChart3,
  Settings,
  Link2,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Studio", href: "/studio", icon: Palette },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Agents", href: "/agents", icon: Bot },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Integrations", href: "/integrations", icon: Link2 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex flex-col border-r border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-border/50 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-primary shadow-lg glow-primary">
            <img
              src="/images/magicbox.png"
              alt="MagicBoxAI Logo"
              className="h-5 w-5 object-contain brightness-200"
            />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold tracking-tight text-gradient-primary">
              MagicBoxAI
            </span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-3">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-primary text-primary-foreground shadow-md glow-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 shrink-0 transition-transform duration-200",
                !isActive && "group-hover:scale-110"
              )} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Usage */}
      {!collapsed && (
        <div className="border-t border-border/50 p-4">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Credits</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">142 / 500 used</span>
                <span className="font-medium text-primary">28%</span>
              </div>
              <Progress value={28} className="h-2 bg-secondary" />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
