import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const centers = [
  {
    id: 1,
    name: "Green Recycling Hub",
    address: "456 Eco Street, Downtown",
    hours: "Mon-Sat: 8AM-6PM",
    phone: "(555) 123-4567",
    distance: "0.8 miles",
    accepts: ["Plastics", "Paper", "Glass", "Metal"],
  },
  {
    id: 2,
    name: "City Waste Management Center",
    address: "789 Municipal Drive",
    hours: "Mon-Fri: 7AM-5PM",
    phone: "(555) 987-6543",
    distance: "1.2 miles",
    accepts: ["All recyclables", "E-waste", "Hazardous"],
  },
  {
    id: 3,
    name: "Community Compost Station",
    address: "123 Garden Lane, Westside",
    hours: "Daily: 6AM-8PM",
    phone: "(555) 456-7890",
    distance: "2.1 miles",
    accepts: ["Organic waste", "Garden waste", "Food scraps"],
  },
  {
    id: 4,
    name: "E-Waste Drop-off Point",
    address: "321 Tech Boulevard",
    hours: "Tue-Sun: 9AM-5PM",
    phone: "(555) 321-0987",
    distance: "3.5 miles",
    accepts: ["Electronics", "Batteries", "Cables", "Appliances"],
  },
];

export function RecyclingCenters() {
  return (
    <div className="space-y-4">
      {centers.map((center, index) => (
        <div
          key={center.id}
          className="p-5 rounded-2xl bg-card border border-border hover:shadow-eco-md transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{center.name}</h3>
                  <p className="text-sm text-muted-foreground">{center.address}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {center.hours}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {center.phone}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {center.accepts.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-sm font-medium text-accent">{center.distance}</span>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4" />
                Directions
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
