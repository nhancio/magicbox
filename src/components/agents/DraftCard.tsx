import { Check, Eye, Pencil, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DraftCardProps {
  title: string;
  angle: string;
  description: string;
  imagePrompt: string;
  caption: string;
  hashtags: string[];
  isSelected?: boolean;
  onSelect?: () => void;
  onEdit?: () => void;
}

export function DraftCard({
  title,
  angle,
  description,
  imagePrompt,
  caption,
  hashtags,
  isSelected,
  onSelect,
  onEdit,
}: DraftCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg group ${
        isSelected 
          ? "border-primary ring-2 ring-primary/30 bg-gradient-to-br from-primary/5 to-accent/5" 
          : "border-border/50 hover:border-primary/30 bg-card/80"
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <Badge className="mb-2 bg-gradient-primary text-primary-foreground border-0">
              <Sparkles className="h-3 w-3 mr-1" />
              {angle}
            </Badge>
            <h3 className="font-semibold">{title}</h3>
          </div>
          {isSelected && (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary glow-primary">
              <Check className="h-4 w-4 text-primary-foreground" />
            </div>
          )}
        </div>

        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 rounded-xl bg-secondary/50 p-3 text-xs">
          <div>
            <span className="font-semibold text-foreground">Image:</span>{" "}
            <span className="text-muted-foreground">{imagePrompt}</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Caption:</span>{" "}
            <span className="text-muted-foreground line-clamp-2">{caption}</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {hashtags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
          {hashtags.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{hashtags.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 gap-1.5 hover:bg-primary/10 hover:text-primary hover:border-primary/30" onClick={(e) => { e.stopPropagation(); onEdit?.(); }}>
            <Pencil className="h-3.5 w-3.5" />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-1.5 hover:bg-accent/10 hover:text-accent hover:border-accent/30">
            <Eye className="h-3.5 w-3.5" />
            Preview
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
