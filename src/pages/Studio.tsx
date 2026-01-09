import { useState } from "react";
import { PostCanvas } from "@/components/studio/PostCanvas";
import { EditorPanel } from "@/components/studio/EditorPanel";

export default function Studio() {
  const [platform, setPlatform] = useState<"instagram" | "facebook">("instagram");
  const [format, setFormat] = useState<"square" | "story">("square");
  const [imagePrompt, setImagePrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateImage = async () => {
    setIsGenerating(true);
    // Simulate image generation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Use a placeholder image for now
    setImageUrl(
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
    );
    setIsGenerating(false);
  };

  return (
    <div className="flex h-full">
      {/* Canvas area */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-8">
        <PostCanvas
          platform={platform}
          format={format}
          imageUrl={imageUrl}
          caption={caption}
        />
      </div>

      {/* Editor panel */}
      <div className="w-[380px]">
        <EditorPanel
          imagePrompt={imagePrompt}
          onImagePromptChange={setImagePrompt}
          caption={caption}
          onCaptionChange={setCaption}
          hashtags={hashtags}
          onHashtagsChange={setHashtags}
          platform={platform}
          onPlatformChange={setPlatform}
          onGenerateImage={handleGenerateImage}
          isGenerating={isGenerating}
        />
      </div>
    </div>
  );
}
