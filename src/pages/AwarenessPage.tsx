import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RecyclingGuide } from "@/components/awareness/RecyclingGuide";
import { RecyclingCenters } from "@/components/awareness/RecyclingCenters";
import { Recycle, MapPin, Lightbulb, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "guide", label: "Recycling Guide", icon: Recycle },
  { id: "centers", label: "Drop-off Centers", icon: MapPin },
];

const tips = [
  { icon: "🌱", title: "Reduce First", text: "The best waste is no waste. Buy less, choose reusable items." },
  { icon: "♻️", title: "Clean Before Recycling", text: "Rinse containers to remove food residue for better recycling." },
  { icon: "🍂", title: "Compost at Home", text: "Start a compost bin for food scraps and garden waste." },
  { icon: "📦", title: "Flatten Cardboard", text: "Flatten boxes to save space in recycling bins." },
];

const AwarenessPage = () => {
  const [activeTab, setActiveTab] = useState("guide");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Learn & Grow
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recycling & Segregation Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to properly sort your waste, find recycling centers, and discover tips for sustainable living.
            </p>
          </div>

          {/* Tips Bar */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className="p-4 rounded-2xl glass-panel hover:shadow-eco-sm transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl mb-2 block">{tip.icon}</span>
                <h4 className="font-semibold text-foreground text-sm mb-1">{tip.title}</h4>
                <p className="text-xs text-muted-foreground">{tip.text}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-2xl bg-muted">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all",
                      activeTab === tab.id
                        ? "bg-background text-foreground shadow-eco-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            {activeTab === "guide" && <RecyclingGuide />}
            {activeTab === "centers" && <RecyclingCenters />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AwarenessPage;
