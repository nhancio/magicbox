import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

export function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-3 py-4 px-4 rounded-xl mb-2",
        isAssistant ? "bg-card/80 border border-border/50" : "bg-primary/5"
      )}
    >
      <Avatar className="h-9 w-9 shrink-0">
        <AvatarFallback
          className={cn(
            "rounded-xl",
            isAssistant
              ? "bg-gradient-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          )}
        >
          {isAssistant ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">
            {isAssistant ? "Marketer" : "You"}
          </span>
          {timestamp && (
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}
