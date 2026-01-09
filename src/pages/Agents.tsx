import { useState, useRef, useEffect } from "react";
import { Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/components/agents/ChatMessage";
import { DraftCard } from "@/components/agents/DraftCard";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hi! I'm Marketer, your AI social media strategist. 👋 Tell me about your campaign goal, and I'll help you create engaging content. What would you like to promote today?",
    timestamp: "10:00 AM",
  },
];

const mockDrafts = [
  {
    id: "1",
    title: "Cozy Morning Vibes",
    angle: "Lifestyle",
    description:
      "Capture the essence of a perfect morning with your new coffee blend. Warm, inviting, and relatable.",
    imagePrompt:
      "Cozy morning scene with steaming coffee cup, soft morning light through window, minimal aesthetic",
    caption:
      "Start your morning right. ☀️ Our new signature blend is like a warm hug in a cup.",
    hashtags: ["#morningcoffee", "#coffeelover", "#newblend", "#cozymoring"],
  },
  {
    id: "2",
    title: "Product Spotlight",
    angle: "Product Focus",
    description:
      "Clean, professional product photography that highlights the premium quality of your blend.",
    imagePrompt:
      "Professional coffee bag product photo, clean white background, premium packaging, studio lighting",
    caption:
      "Introducing our newest creation: Ethiopian Single Origin. Bold. Smooth. Unforgettable.",
    hashtags: ["#newproduct", "#premiumcoffee", "#singleorigin", "#coffeetime"],
  },
  {
    id: "3",
    title: "Behind the Scenes",
    angle: "Behind the Scenes",
    description:
      "Show the craft and care that goes into every batch. Build authenticity and trust.",
    imagePrompt:
      "Coffee roasting process, artisan roaster, hands sorting beans, warm industrial lighting",
    caption:
      "Every batch is roasted with love. Here's a peek at how we craft your perfect cup. 🫘",
    hashtags: ["#behindthescenes", "#coffeeroasting", "#artisancoffee", "#smallbatch"],
  },
];

export default function Agents() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [selectedDraft, setSelectedDraft] = useState<string | null>(null);
  const [showDrafts, setShowDrafts] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Great choice! I've analyzed your request and identified 3 content angles that would resonate with your audience. Each approach offers a unique perspective:\n\n1. **Lifestyle** - Connect emotionally with cozy, relatable moments\n2. **Product Focus** - Highlight quality and premium features\n3. **Behind the Scenes** - Build trust through authenticity\n\nI've prepared draft posts for each angle. Check them out in the Draft Board! 👉",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setShowDrafts(true);
    }, 1500);
  };

  return (
    <div className="flex h-full">
      {/* Draft Board */}
      <div className="w-[400px] border-r border-border/50 bg-card/50 backdrop-blur-sm p-4">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-lg font-semibold">Draft Board</h2>
          {showDrafts && (
            <span className="rounded-full bg-gradient-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
              {mockDrafts.length} drafts
            </span>
          )}
        </div>

        {showDrafts ? (
          <ScrollArea className="h-[calc(100vh-180px)]">
            <div className="space-y-3 pr-4">
              {mockDrafts.map((draft) => (
                <DraftCard
                  key={draft.id}
                  {...draft}
                  isSelected={selectedDraft === draft.id}
                  onSelect={() => setSelectedDraft(draft.id)}
                />
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex h-[300px] flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary glow-primary">
              <Bot className="h-8 w-8 text-primary-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Start a conversation with Marketer to generate draft posts
            </p>
          </div>
        )}
      </div>

      {/* Chat Interface */}
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        <div className="flex items-center gap-3 border-b border-border/50 px-6 py-4 bg-card/50 backdrop-blur-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-lg glow-primary">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold">Marketer</h2>
            <p className="text-xs text-muted-foreground">
              AI Social Media Strategist • <span className="text-emerald-500">Online</span>
            </p>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 px-6" ref={scrollRef}>
          <div className="py-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
                timestamp={message.timestamp}
              />
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="border-t border-border/50 p-4 bg-card/50 backdrop-blur-sm">
          <div className="flex gap-2">
            <Input
              placeholder="Tell Marketer about your campaign goal..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-background/50"
            />
            <Button onClick={handleSend} disabled={!input.trim()} className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Try: "Promote our new coffee blend" or "Create a product launch
            campaign"
          </p>
        </div>
      </div>
    </div>
  );
}
