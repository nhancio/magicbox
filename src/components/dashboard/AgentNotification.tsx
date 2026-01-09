import { Bot, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface AgentNotificationProps {
  userName: string;
  draftsCount: number;
}

export function AgentNotification({
  userName,
  draftsCount,
}: AgentNotificationProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-accent opacity-20 blur-3xl" />
      
      <div className="relative flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-lg glow-primary">
            <Bot className="h-7 w-7 text-primary-foreground" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              {draftsCount}
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold">
                Good morning, {userName}! <span className="inline-block animate-bounce">👋</span>
              </p>
            </div>
            <p className="text-muted-foreground">
              The <span className="font-semibold text-gradient-primary">"Marketer"</span>{" "}
              agent has prepared{" "}
              <span className="font-bold text-foreground">{draftsCount} draft posts</span>{" "}
              for your review.
            </p>
          </div>
        </div>
        <Link to="/agents">
          <Button className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg glow-primary">
            <Sparkles className="h-4 w-4" />
            Review Drafts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
