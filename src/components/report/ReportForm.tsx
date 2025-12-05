import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { MapPin, Camera, Upload, Trash2, AlertTriangle, Package, Zap, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const wasteCategories = [
  { id: "overflowing", label: "Overflowing Bin", icon: Trash2, description: "Bin needs emptying" },
  { id: "litter", label: "Litter Spot", icon: Package, description: "Scattered waste area" },
  { id: "illegal", label: "Illegal Dumping", icon: AlertTriangle, description: "Unauthorized waste" },
  { id: "hazardous", label: "Hazardous Waste", icon: Zap, description: "Dangerous materials" },
];

interface ReportFormProps {
  onSubmit?: () => void;
}

export function ReportForm({ onSubmit }: ReportFormProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  const handleAutoDetect = () => {
    setIsLocating(true);
    // Simulate geolocation
    setTimeout(() => {
      setLocation("123 Main Street, Downtown");
      setIsLocating(false);
      toast({ title: "Location detected!", description: "We've found your current location." });
    }, 1500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCategory || !location || !description) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Report submitted! 🎉",
      description: "Thank you for helping keep our community clean!",
    });

    if (onSubmit) {
      onSubmit();
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto text-center py-12 animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Report Submitted!</h2>
        <p className="text-muted-foreground mb-8">
          Your report has been received. Our team will review it and take action.
          You'll receive updates on the progress.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="default"
            onClick={() => {
              setIsSuccess(false);
              setSelectedCategory("");
              setLocation("");
              setDescription("");
              setImage(null);
            }}
          >
            Submit Another Report
          </Button>
          <Button variant="outline" asChild>
            <a href="/map">View on Map</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      {/* Category Selection */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold">What type of waste issue is this?</Label>
        <div className="grid grid-cols-2 gap-4">
          {wasteCategories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "p-4 rounded-2xl border-2 text-left transition-all duration-200",
                  isSelected
                    ? "border-primary bg-primary/5 shadow-eco-md"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors",
                  isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{category.label}</h4>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Location */}
      <div className="space-y-4">
        <Label htmlFor="location" className="text-lg font-semibold">Location</Label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location or use auto-detect"
              className="pl-12 h-12 rounded-xl"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={handleAutoDetect}
            disabled={isLocating}
            className="h-12"
          >
            {isLocating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <MapPin className="w-4 h-4" />
                Auto-detect
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Image Upload */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold">Upload Photo (Optional)</Label>
        <div className="relative">
          {image ? (
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img src={image} alt="Uploaded waste" className="w-full h-48 object-cover" />
              <button
                type="button"
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 p-2 bg-background/80 rounded-full hover:bg-background"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-48 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 cursor-pointer transition-colors bg-muted/30">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <Camera className="w-7 h-7 text-muted-foreground" />
                </div>
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <Label htmlFor="description" className="text-lg font-semibold">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide additional details about the waste issue..."
          className="min-h-32 rounded-xl resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Upload className="w-5 h-5" />
            Submit Report
          </>
        )}
      </Button>
    </form>
  );
}
