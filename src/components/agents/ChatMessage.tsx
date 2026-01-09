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
        "flex gap-3 py-4",
        isAssistant ? "bg-muted/30" : "bg-transparent"
      )}
    >
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback
          className={cn(
            isAssistant
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          )}
        >
          {isAssistant ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {isAssistant ? "Marketer" : "You"}
          </span>
          {timestamp && (
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-foreground/90">{content}</p>
      </div>
    </div>
  );
}
