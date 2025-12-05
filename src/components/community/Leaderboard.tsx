import { Trophy, Medal, Award, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const leaderboardData = [
  { rank: 1, name: "Sarah Green", points: 2847, reports: 156, events: 23, badge: "Eco Champion" },
  { rank: 2, name: "Mike Rivers", points: 2634, reports: 142, events: 21, badge: "Waste Warrior" },
  { rank: 3, name: "Emily Chen", points: 2451, reports: 128, events: 19, badge: "Clean Hero" },
  { rank: 4, name: "David Park", points: 2198, reports: 115, events: 17, badge: "Spotter Pro" },
  { rank: 5, name: "Lisa Wong", points: 1987, reports: 98, events: 15, badge: "Recycler" },
  { rank: 6, name: "James Smith", points: 1854, reports: 89, events: 14, badge: "Volunteer" },
  { rank: 7, name: "Anna Brown", points: 1723, reports: 82, events: 12, badge: "Contributor" },
  { rank: 8, name: "Tom Wilson", points: 1645, reports: 76, events: 11, badge: "Contributor" },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return <Trophy className="w-5 h-5 text-yellow-500" />;
    case 2: return <Medal className="w-5 h-5 text-gray-400" />;
    case 3: return <Award className="w-5 h-5 text-amber-600" />;
    default: return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
  }
};

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1: return "bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-yellow-500/30";
    case 2: return "bg-gradient-to-r from-gray-300/10 to-gray-400/10 border-gray-400/30";
    case 3: return "bg-gradient-to-r from-amber-600/10 to-orange-500/10 border-amber-600/30";
    default: return "bg-card border-border";
  }
};

export function Leaderboard() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Top Contributors</h3>
        </div>
        <span className="text-sm text-muted-foreground">This Month</span>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {leaderboardData.map((user, index) => (
          <div
            key={user.rank}
            className={cn(
              "flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:shadow-eco-sm animate-fade-in",
              getRankStyle(user.rank)
            )}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Rank */}
            <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
              {getRankIcon(user.rank)}
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-foreground truncate">{user.name}</h4>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {user.badge}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                <span>{user.reports} reports</span>
                <span>{user.events} events</span>
              </div>
            </div>

            {/* Points */}
            <div className="text-right">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-sun fill-sun" />
                <span className="text-lg font-bold text-foreground">{user.points.toLocaleString()}</span>
              </div>
              <span className="text-xs text-muted-foreground">points</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <button className="w-full py-3 text-center text-sm font-medium text-primary hover:bg-primary/5 rounded-xl transition-colors">
        View Full Leaderboard
      </button>
    </div>
  );
}
