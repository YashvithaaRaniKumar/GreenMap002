import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventsList } from "@/components/community/EventsList";
import { Leaderboard } from "@/components/community/Leaderboard";
import { BadgesShowcase } from "@/components/community/BadgesShowcase";
import { Users, Calendar, Trophy, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const tabs = [
  { id: "events", label: "Clean-up Events", icon: Calendar },
  { id: "leaderboard", label: "Leaderboard", icon: Trophy },
  { id: "badges", label: "Badges", icon: Award },
];

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Join the Movement
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Community & Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with eco-warriors in your area. Join clean-up events, earn badges, and climb the leaderboard!
            </p>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-xl mx-auto">
            <div className="text-center p-4 rounded-2xl glass-panel animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-2xl font-bold text-primary">24</p>
              <p className="text-xs text-muted-foreground">Events This Month</p>
            </div>
            <div className="text-center p-4 rounded-2xl glass-panel animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <p className="text-2xl font-bold text-accent">1.2K</p>
              <p className="text-xs text-muted-foreground">Active Volunteers</p>
            </div>
            <div className="text-center p-4 rounded-2xl glass-panel animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-2xl font-bold text-success">5.4T</p>
              <p className="text-xs text-muted-foreground">Waste Collected</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-2xl bg-muted overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
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
            {activeTab === "events" && <EventsList onJoin={() => toast.success("You've joined the event!", { description: "We've sent the details to your email." })} />}
            {activeTab === "leaderboard" && (
              <div className="max-w-2xl mx-auto">
                <Leaderboard />
              </div>
            )}
            {activeTab === "badges" && <BadgesShowcase />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
