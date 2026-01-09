import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export function AppLayout() {
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Gradient glow background effect */}
      <div className="fixed inset-0 bg-gradient-glow pointer-events-none" />
      <div className="fixed top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      
      <AppSidebar />
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-y-auto bg-gradient-surface">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
