import { Instagram, Facebook, ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostCanvasProps {
  platform: "instagram" | "facebook";
  format: "square" | "story";
  imageUrl?: string;
  caption?: string;
}

export function PostCanvas({
  platform,
  format,
  imageUrl,
  caption,
}: PostCanvasProps) {
  const isStory = format === "story";

  return (
    <div className="flex flex-col items-center">
      {/* Platform indicator */}
      <div className="mb-4 flex items-center gap-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 px-4 py-2 text-sm text-muted-foreground">
        {platform === "instagram" ? (
          <Instagram className="h-4 w-4 text-pink-500" />
        ) : (
          <Facebook className="h-4 w-4 text-blue-500" />
        )}
        <span className="capitalize font-medium">{platform}</span>
        <span className="text-border">•</span>
        <span>{isStory ? "Story (9:16)" : "Post (1:1)"}</span>
      </div>

      {/* Canvas */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-xl transition-all ring-1 ring-border/20",
          isStory ? "aspect-[9/16] w-[280px]" : "aspect-square w-[360px]"
        )}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Post preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary glow-primary">
              <ImagePlus className="h-8 w-8 text-primary-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Generate or upload an image
            </p>
          </div>
        )}
      </div>

      {/* Caption preview */}
      {caption && (
        <div className="mt-4 w-full max-w-[360px]">
          <div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-4">
            <p className="text-sm leading-relaxed">{caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
