import { useState } from "react";
import { Sparkles, Wand2, Hash, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EditorPanelProps {
  imagePrompt: string;
  onImagePromptChange: (prompt: string) => void;
  caption: string;
  onCaptionChange: (caption: string) => void;
  hashtags: string;
  onHashtagsChange: (hashtags: string) => void;
  platform: "instagram" | "facebook";
  onPlatformChange: (platform: "instagram" | "facebook") => void;
  onGenerateImage: () => void;
  isGenerating: boolean;
}

export function EditorPanel({
  imagePrompt,
  onImagePromptChange,
  caption,
  onCaptionChange,
  hashtags,
  onHashtagsChange,
  platform,
  onPlatformChange,
  onGenerateImage,
  isGenerating,
}: EditorPanelProps) {
  return (
    <div className="flex h-full flex-col border-l border-border/50 bg-card/80 backdrop-blur-sm">
      {/* Platform tabs */}
      <div className="border-b border-border/50 p-4">
        <Tabs value={platform} onValueChange={(v) => onPlatformChange(v as "instagram" | "facebook")}>
          <TabsList className="w-full bg-secondary/50">
            <TabsTrigger value="instagram" className="flex-1 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Instagram
            </TabsTrigger>
            <TabsTrigger value="facebook" className="flex-1 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Facebook
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Editor content */}
      <div className="flex-1 space-y-6 overflow-y-auto p-4">
        {/* Image Generation */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-primary">
                <ImageIcon className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              Image Prompt
            </div>
          </Label>
          <Textarea
            placeholder="Describe the image you want to generate..."
            value={imagePrompt}
            onChange={(e) => onImagePromptChange(e.target.value)}
            className="min-h-[100px] resize-none bg-background/50 border-border/50 focus:border-primary/50"
          />
          <Button
            onClick={onGenerateImage}
            disabled={isGenerating || !imagePrompt}
            className="w-full gap-2 bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <Sparkles className="h-4 w-4" />
            {isGenerating ? "Generating..." : "Generate Image"}
          </Button>
        </div>

        {/* Caption */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-semibold">Caption</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs hover:bg-primary/10 hover:text-primary">
                  <Wand2 className="h-3.5 w-3.5" />
                  AI Rewrite
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass">
                <DropdownMenuItem>Make it funnier</DropdownMenuItem>
                <DropdownMenuItem>Make it professional</DropdownMenuItem>
                <DropdownMenuItem>Make it shorter</DropdownMenuItem>
                <DropdownMenuItem>Add emojis</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Textarea
            placeholder="Write your caption..."
            value={caption}
            onChange={(e) => onCaptionChange(e.target.value)}
            className="min-h-[120px] resize-none bg-background/50 border-border/50 focus:border-primary/50"
          />
        </div>

        {/* Hashtags */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-accent">
                <Hash className="h-3.5 w-3.5 text-accent-foreground" />
              </div>
              Hashtags
            </div>
          </Label>
          <Input
            placeholder="#coffee #morning #lifestyle"
            value={hashtags}
            onChange={(e) => onHashtagsChange(e.target.value)}
            className="bg-background/50 border-border/50 focus:border-primary/50"
          />
        </div>
      </div>

      {/* Footer actions */}
      <div className="border-t border-border/50 p-4">
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 hover:bg-secondary/80">
            Save Draft
          </Button>
          <Button variant="outline" className="flex-1 hover:bg-accent/10 hover:text-accent hover:border-accent/30">
            Schedule
          </Button>
          <Button className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity">
            Post Now
          </Button>
        </div>
      </div>
    </div>
  );
}
