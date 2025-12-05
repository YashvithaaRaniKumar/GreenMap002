import { TrendingUp, Users, Trash2, Award } from "lucide-react";

const stats = [
  {
    icon: Trash2,
    value: "15,000+",
    label: "Waste Reports",
    description: "Issues reported by citizens",
    color: "bg-primary",
  },
  {
    icon: Users,
    value: "8,500+",
    label: "Active Users",
    description: "Community members participating",
    color: "bg-accent",
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "Resolution Rate",
    description: "Reports successfully resolved",
    color: "bg-success",
  },
  {
    icon: Award,
    value: "340+",
    label: "Clean-up Events",
    description: "Community drives organized",
    color: "bg-sun",
  },
];

export function ImpactSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-32 h-32 bg-leaf-light rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-sky-light rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Community Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Together, we're making a measurable difference in keeping our cities clean and sustainable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative p-6 rounded-2xl bg-card border border-border text-center group hover:shadow-eco-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-eco-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-lg font-medium text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
