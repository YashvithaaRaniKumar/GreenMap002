import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    title: "Downtown Beach Cleanup",
    date: "Dec 7, 2024",
    time: "9:00 AM - 12:00 PM",
    location: "Sunset Beach, Main Entrance",
    participants: 45,
    maxParticipants: 100,
    image: "🏖️",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Park Restoration Drive",
    date: "Dec 10, 2024",
    time: "8:00 AM - 11:00 AM",
    location: "Central Park, North Gate",
    participants: 32,
    maxParticipants: 50,
    image: "🌳",
    status: "upcoming",
  },
  {
    id: 3,
    title: "River Bank Cleaning",
    date: "Dec 14, 2024",
    time: "7:00 AM - 10:00 AM",
    location: "Riverside Walk, Bridge Point",
    participants: 28,
    maxParticipants: 60,
    image: "🌊",
    status: "upcoming",
  },
  {
    id: 4,
    title: "School Recycling Workshop",
    date: "Dec 16, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Lincoln High School",
    participants: 120,
    maxParticipants: 150,
    image: "🎓",
    status: "upcoming",
  },
];

interface EventsListProps {
  onJoin?: () => void;
}

export function EventsList({ onJoin }: EventsListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {events.map((event, index) => {
        const spotsLeft = event.maxParticipants - event.participants;
        const isFilling = spotsLeft < 20;

        return (
          <div
            key={event.id}
            className="group p-6 rounded-2xl bg-card border border-border hover:shadow-eco-md transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                {event.image}
              </div>
              <div className={cn(
                "px-3 py-1 rounded-full text-xs font-medium",
                isFilling ? "bg-warning/10 text-warning" : "bg-success/10 text-success"
              )}>
                {spotsLeft} spots left
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {event.title}
            </h3>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                {event.time}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                {event.location}
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {event.participants} joined
                </div>
                <span className="text-muted-foreground">{event.maxParticipants} max</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                />
              </div>
            </div>

            {/* Action */}
            <Button variant="default" className="w-full" onClick={onJoin}>
              Join Event
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      })}
    </div>
  );
}
