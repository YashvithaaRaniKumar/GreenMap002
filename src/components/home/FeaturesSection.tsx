import { MapPin, Camera, Recycle, Users, Trophy, Bell } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Interactive Waste Map",
    description: "Explore hotspots, recycling centers, and clean-up locations on an interactive GIS-style map.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Camera,
    title: "Easy Reporting",
    description: "Report overflowing bins, illegal dumping, or litter spots with just a photo and location.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Recycle,
    title: "Recycling Guide",
    description: "Learn proper waste segregation, composting techniques, and find nearby recycling centers.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Join local clean-up drives, connect with eco-volunteers, and make a real impact.",
    color: "bg-earth/10 text-earth",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Earn badges like Eco-Warrior and Spotter. Climb the leaderboard and showcase your impact.",
    color: "bg-sun/10 text-sun",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get alerts for nearby events, resolved issues, and community achievements.",
    color: "bg-destructive/10 text-destructive",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for a{" "}
            <span className="text-primary">Cleaner Community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            GreenMap provides all the tools citizens need to report, track, and solve waste management issues together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl glass-panel hover:shadow-eco-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
