import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyRegistrationHeader from "@/components/PropertyRegistrationHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { ImagePlus, Video, Play } from "lucide-react";

const MediaUpload = () => {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedVideo, setUploadedVideo] = useState<boolean>(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedVideo(true);
    }
  };

  const handleContinue = () => {
    navigate("/owner-confirmation");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PropertyRegistrationHeader />
      
      <main className="flex-1 max-w-md mx-auto w-full p-6 pb-24">
        <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
          Imagem / Vídeo do Imóvel
        </h2>

        <div className="space-y-6">
          <div>
            <div className="bg-success p-3 rounded mb-4">
              <h3 className="text-success-foreground font-semibold text-center">
                Faça upload da imagem do imóvel
              </h3>
            </div>

            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:bg-muted/30 transition-colors mb-4"
            >
              <ImagePlus className="w-16 h-16 text-foreground mb-2" />
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {uploadedImage && (
              <div className="rounded-lg overflow-hidden">
                <img src={uploadedImage} alt="Imóvel" className="w-full h-48 object-cover" />
              </div>
            )}
          </div>

          <div>
            <div className="bg-success p-3 rounded mb-4">
              <h3 className="text-success-foreground font-semibold text-center flex items-center justify-center gap-2">
                Faça upload do vídeo do imóvel
                <span className="text-xs">* Opcional</span>
              </h3>
            </div>

            <label
              htmlFor="video-upload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:bg-muted/30 transition-colors mb-4"
            >
              <div className="relative">
                <Video className="w-16 h-16 text-foreground mb-2" />
                <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                  <Play className="w-4 h-4 text-success-foreground fill-current" />
                </div>
              </div>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
              />
            </label>

            {uploadedVideo && (
              <div className="rounded-lg overflow-hidden bg-muted p-8 flex items-center justify-center">
                <Play className="w-16 h-16 text-foreground" />
              </div>
            )}
          </div>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Confirmar alteração
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default MediaUpload;
