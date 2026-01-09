import { useState } from "react";
import { Upload, Palette, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const voiceOptions = [
  { id: "witty", label: "Witty", description: "Playful, clever, uses humor" },
  { id: "professional", label: "Professional", description: "Formal, polished, business-focused" },
  { id: "friendly", label: "Friendly", description: "Warm, approachable, conversational" },
  { id: "bold", label: "Bold", description: "Confident, direct, attention-grabbing" },
];

export default function Settings() {
  const [selectedVoice, setSelectedVoice] = useState("friendly");
  const [primaryColor, setPrimaryColor] = useState("#6366f1");

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your brand kit and preferences
        </p>
      </div>

      <div className="space-y-6">
          {/* Logo Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Brand Logo</CardTitle>
              <CardDescription>
                Upload your logo to use in generated content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <Button variant="outline">Upload Logo</Button>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG or SVG. Max 2MB.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Colors */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Brand Colors</CardTitle>
              <CardDescription>
                Define your primary brand color
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Label htmlFor="color">Primary Color</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    id="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-10 w-10 cursor-pointer rounded border-0 bg-transparent"
                  />
                  <Input
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-28"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Voice */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Brand Voice
                </div>
              </CardTitle>
              <CardDescription>
                Choose how the AI should write content for your brand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {voiceOptions.map((voice) => (
                  <button
                    key={voice.id}
                    onClick={() => setSelectedVoice(voice.id)}
                    className={cn(
                      "flex flex-col items-start rounded-lg border p-4 text-left transition-colors",
                      selectedVoice === voice.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-medium">{voice.label}</span>
                      {selectedVoice === voice.id && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <span className="mt-1 text-sm text-muted-foreground">
                      {voice.description}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
