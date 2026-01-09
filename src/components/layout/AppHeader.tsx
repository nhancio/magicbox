import { Bell, ChevronRight, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const routeNames: Record<string, string> = {
  "/": "Dashboard",
  "/studio": "Studio",
  "/schedule": "Schedule",
  "/agents": "Agents",
  "/analytics": "Analytics",
  "/integrations": "Integrations",
  "/settings": "Settings",
};

export function AppHeader() {
  const location = useLocation();
  const currentRoute = routeNames[location.pathname] || "Page";

  return (
    <header className="flex h-16 items-center justify-between border-b border-border/50 bg-card/80 backdrop-blur-xl px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Home</span>
        <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
        <span className="font-medium text-foreground">{currentRoute}</span>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Upgrade Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <Sparkles className="h-4 w-4" />
          Upgrade
        </Button>

        {/* Dark Mode Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-primary animate-pulse" />
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 w-9 rounded-full p-0 ring-2 ring-border/50 ring-offset-2 ring-offset-background hover:ring-primary/50 transition-all">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 glass">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
