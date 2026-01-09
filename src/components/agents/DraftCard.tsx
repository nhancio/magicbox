import { Check, Eye, Pencil } from "lucide-react";
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
      className={`cursor-pointer transition-all hover:shadow-md ${
        isSelected ? "border-primary ring-2 ring-primary/20" : "border-border"
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <Badge variant="secondary" className="mb-2">
              {angle}
            </Badge>
            <h3 className="font-medium">{title}</h3>
          </div>
          {isSelected && (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <Check className="h-4 w-4 text-primary-foreground" />
            </div>
          )}
        </div>

        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 rounded-lg bg-muted/50 p-3 text-xs">
          <div>
            <span className="font-medium">Image:</span>{" "}
            <span className="text-muted-foreground">{imagePrompt}</span>
          </div>
          <div>
            <span className="font-medium">Caption:</span>{" "}
            <span className="text-muted-foreground line-clamp-2">{caption}</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {hashtags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded bg-primary/10 px-1.5 py-0.5 text-xs text-primary"
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
          <Button variant="outline" size="sm" className="flex-1 gap-1.5" onClick={(e) => { e.stopPropagation(); onEdit?.(); }}>
            <Pencil className="h-3.5 w-3.5" />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-1.5">
            <Eye className="h-3.5 w-3.5" />
            Preview
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
