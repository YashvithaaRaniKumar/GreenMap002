import { TrendingUp, TrendingDown, FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Total Reports",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: FileText,
    color: "bg-primary",
  },
  {
    title: "Resolved",
    value: "1,089",
    change: "+8%",
    trend: "up",
    icon: CheckCircle,
    color: "bg-success",
  },
  {
    title: "Pending",
    value: "124",
    change: "-5%",
    trend: "down",
    icon: Clock,
    color: "bg-warning",
  },
  {
    title: "Critical",
    value: "34",
    change: "+2%",
    trend: "up",
    icon: AlertTriangle,
    color: "bg-destructive",
  },
];

export function StatsCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
        const isPositive = (stat.trend === "up" && stat.title !== "Critical") || (stat.trend === "down" && stat.title === "Critical");
        
        return (
          <div
            key={stat.title}
            className="p-5 rounded-2xl bg-card border border-border hover:shadow-eco-md transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-primary-foreground", stat.color)}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium",
                isPositive ? "text-success" : "text-destructive"
              )}>
                <TrendIcon className="w-4 h-4" />
                {stat.change}
              </div>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}
