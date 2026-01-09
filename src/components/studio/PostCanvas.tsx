import { Instagram, Facebook } from "lucide-react";
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
      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        {platform === "instagram" ? (
          <Instagram className="h-4 w-4" />
        ) : (
          <Facebook className="h-4 w-4" />
        )}
        <span className="capitalize">{platform}</span>
        <span>•</span>
        <span>{isStory ? "Story (9:16)" : "Post (1:1)"}</span>
      </div>

      {/* Canvas */}
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-border bg-muted shadow-lg transition-all",
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
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Generate or upload an image
            </p>
          </div>
        )}
      </div>

      {/* Caption preview */}
      {caption && (
        <div className="mt-4 w-full max-w-[360px]">
          <div className="rounded-lg border border-border bg-card p-3">
            <p className="text-sm leading-relaxed">{caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
