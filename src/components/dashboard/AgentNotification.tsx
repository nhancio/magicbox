import { Bot, ArrowRight } from "lucide-react";
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
    <div className="rounded-xl border border-border bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-medium">
              Good morning, {userName}!
            </p>
            <p className="text-muted-foreground">
              The <span className="font-medium text-primary">"Marketer"</span>{" "}
              agent has prepared{" "}
              <span className="font-semibold">{draftsCount} draft posts</span>{" "}
              for you.
            </p>
          </div>
        </div>
        <Link to="/agents">
          <Button variant="outline" className="gap-2">
            Review Drafts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
