import { Award, Shield, Target, Zap, Star, Heart, Globe, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  {
    id: "eco-warrior",
    name: "Eco Warrior",
    description: "Submitted 50+ waste reports",
    icon: Shield,
    color: "bg-primary",
    earned: true,
    progress: 100,
  },
  {
    id: "spotter",
    name: "Spotter",
    description: "First waste report submitted",
    icon: Target,
    color: "bg-accent",
    earned: true,
    progress: 100,
  },
  {
    id: "recycler",
    name: "Recycler Pro",
    description: "Visited 10 recycling centers",
    icon: Award,
    color: "bg-success",
    earned: true,
    progress: 100,
  },
  {
    id: "volunteer",
    name: "Volunteer Star",
    description: "Participated in 5 clean-up events",
    icon: Star,
    color: "bg-sun",
    earned: false,
    progress: 60,
  },
  {
    id: "influencer",
    name: "Community Influencer",
    description: "Referred 10 friends to the platform",
    icon: Heart,
    color: "bg-destructive",
    earned: false,
    progress: 30,
  },
  {
    id: "global",
    name: "Global Impact",
    description: "Helped resolve 100 waste issues",
    icon: Globe,
    color: "bg-earth",
    earned: false,
    progress: 45,
  },
  {
    id: "speed",
    name: "Quick Reporter",
    description: "Submit 5 reports in one day",
    icon: Zap,
    color: "bg-warning",
    earned: false,
    progress: 20,
  },
  {
    id: "nature",
    name: "Nature Guardian",
    description: "Complete all eco-challenges",
    icon: Leaf,
    color: "bg-leaf",
    earned: false,
    progress: 10,
  },
];

export function BadgesShowcase() {
  const earnedBadges = badges.filter((b) => b.earned);
  const inProgressBadges = badges.filter((b) => !b.earned);

  return (
    <div className="space-y-8">
      {/* Earned Badges */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Earned Badges ({earnedBadges.length})
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {earnedBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className="group flex flex-col items-center text-center p-4 rounded-2xl bg-card border border-border hover:shadow-eco-md transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center text-primary-foreground mb-3 shadow-eco-sm group-hover:scale-110 transition-transform",
                  badge.color
                )}>
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="font-medium text-sm text-foreground">{badge.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* In Progress */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-muted-foreground" />
          In Progress ({inProgressBadges.length})
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {inProgressBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/50 border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-3 opacity-50">
                  <Icon className="w-7 h-7 text-muted-foreground" />
                </div>
                <h4 className="font-medium text-sm text-muted-foreground">{badge.name}</h4>
                <div className="w-full mt-2">
                  <div className="h-1.5 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary/50 transition-all duration-500"
                      style={{ width: `${badge.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">{badge.progress}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
