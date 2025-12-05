import { useState } from "react";
import { MapPin, Trash2, Recycle, AlertTriangle, Calendar, Layers, Filter, ZoomIn, ZoomOut, Locate, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MarkerData {
  id: number;
  type: "hotspot" | "bin" | "dumping" | "recycling" | "event";
  lat: number;
  lng: number;
  title: string;
  description: string;
  status?: "active" | "resolved" | "pending";
}

const markers: MarkerData[] = [
  { id: 1, type: "hotspot", lat: 40.7128, lng: -74.0060, title: "Waste Hotspot #1", description: "Large accumulation near park entrance", status: "active" },
  { id: 2, type: "bin", lat: 40.7138, lng: -74.0045, title: "Overflowing Bin", description: "Corner of Main St & 5th Ave", status: "pending" },
  { id: 3, type: "dumping", lat: 40.7118, lng: -74.0080, title: "Illegal Dumping", description: "Construction debris found", status: "active" },
  { id: 4, type: "recycling", lat: 40.7148, lng: -74.0050, title: "Recycling Center", description: "Open Mon-Sat 8AM-6PM" },
  { id: 5, type: "event", lat: 40.7108, lng: -74.0070, title: "Weekend Clean-up Drive", description: "Saturday 9AM - Join us!" },
  { id: 6, type: "hotspot", lat: 40.7158, lng: -74.0040, title: "Waste Hotspot #2", description: "Behind shopping complex", status: "resolved" },
];

const layerTypes = [
  { type: "hotspot", label: "Hotspots", icon: AlertTriangle, color: "bg-destructive" },
  { type: "bin", label: "Bins", icon: Trash2, color: "bg-warning" },
  { type: "dumping", label: "Dumping", icon: AlertTriangle, color: "bg-destructive" },
  { type: "recycling", label: "Recycling", icon: Recycle, color: "bg-success" },
  { type: "event", label: "Events", icon: Calendar, color: "bg-accent" },
];

export function WasteMap() {
  const [activeLayers, setActiveLayers] = useState<string[]>(["hotspot", "bin", "dumping", "recycling", "event"]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<MarkerData | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const toggleLayer = (type: string) => {
    setActiveLayers((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case "hotspot": return <AlertTriangle className="w-4 h-4" />;
      case "bin": return <Trash2 className="w-4 h-4" />;
      case "dumping": return <AlertTriangle className="w-4 h-4" />;
      case "recycling": return <Recycle className="w-4 h-4" />;
      case "event": return <Calendar className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const getMarkerColor = (type: string, status?: string) => {
    if (status === "resolved") return "bg-muted text-muted-foreground";
    switch (type) {
      case "hotspot": return "bg-destructive text-destructive-foreground";
      case "bin": return "bg-warning text-warning-foreground";
      case "dumping": return "bg-destructive text-destructive-foreground";
      case "recycling": return "bg-success text-success-foreground";
      case "event": return "bg-accent text-accent-foreground";
      default: return "bg-primary text-primary-foreground";
    }
  };

  const filteredMarkers = markers.filter((m) => activeLayers.includes(m.type));

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-muted rounded-2xl overflow-hidden">
      {/* Map placeholder with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-light/50 to-sky-light/50">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Simulated map roads */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-muted-foreground/20" />
        <div className="absolute top-0 bottom-0 left-1/3 w-2 bg-muted-foreground/20" />
        <div className="absolute top-0 bottom-0 left-2/3 w-2 bg-muted-foreground/20" />
        <div className="absolute top-1/4 left-0 right-0 h-1 bg-muted-foreground/10" />
        <div className="absolute top-3/4 left-0 right-0 h-1 bg-muted-foreground/10" />
      </div>

      {/* Markers */}
      {filteredMarkers.map((marker, index) => {
        const left = 10 + (index * 15) % 75;
        const top = 15 + ((index * 23) % 65);
        return (
          <button
            key={marker.id}
            onClick={() => setSelectedMarker(marker)}
            onMouseEnter={() => setHoveredMarker(marker)}
            onMouseLeave={() => setHoveredMarker(null)}
            className={cn(
              "absolute w-10 h-10 rounded-full flex items-center justify-center shadow-eco-md transition-all duration-200 hover:scale-110 z-10",
              getMarkerColor(marker.type, marker.status),
              selectedMarker?.id === marker.id && "ring-4 ring-primary/30 scale-110"
            )}
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            {getMarkerIcon(marker.type)}

            {/* Hover Popup */}
            {hoveredMarker?.id === marker.id && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 glass-panel p-2 rounded-xl text-center z-20 pointer-events-none animate-fade-in">
                <p className="text-xs font-semibold text-foreground truncate">{marker.title}</p>
                <p className="text-[10px] text-muted-foreground capitalize">{marker.type}</p>
              </div>
            )}
          </button>
        );
      })}

      {/* Filter Panel */}
      <div className={cn(
        "absolute top-4 left-4 glass-panel rounded-2xl transition-all duration-300",
        showFilters ? "w-64 p-4" : "w-12 h-12"
      )}>
        {showFilters ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Layers</h3>
              </div>
              <button onClick={() => setShowFilters(false)} className="p-1 hover:bg-muted rounded-lg">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {layerTypes.map((layer) => {
                const Icon = layer.icon;
                const isActive = activeLayers.includes(layer.type);
                return (
                  <button
                    key={layer.type}
                    onClick={() => toggleLayer(layer.type)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all",
                      isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center text-primary-foreground", layer.color)}>
                      <Icon className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium">{layer.label}</span>
                    <div className={cn(
                      "ml-auto w-4 h-4 rounded border-2 transition-colors",
                      isActive ? "bg-primary border-primary" : "border-muted-foreground"
                    )} />
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <button onClick={() => setShowFilters(true)} className="w-full h-full flex items-center justify-center">
            <Filter className="w-5 h-5 text-foreground" />
          </button>
        )}
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button variant="secondary" size="icon" className="bg-card shadow-eco-md">
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="icon" className="bg-card shadow-eco-md">
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="icon" className="bg-card shadow-eco-md">
          <Locate className="w-4 h-4" />
        </Button>
      </div>

      {/* Selected Marker Info */}
      {selectedMarker && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 glass-panel rounded-2xl p-4 animate-fade-in">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", getMarkerColor(selectedMarker.type, selectedMarker.status))}>
                {getMarkerIcon(selectedMarker.type)}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{selectedMarker.title}</h4>
                <p className="text-xs text-muted-foreground capitalize">{selectedMarker.type}</p>
              </div>
            </div>
            <button onClick={() => setSelectedMarker(null)} className="p-1 hover:bg-muted rounded-lg">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{selectedMarker.description}</p>
          {selectedMarker.status && (
            <div className={cn(
              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
              selectedMarker.status === "active" && "bg-destructive/10 text-destructive",
              selectedMarker.status === "pending" && "bg-warning/10 text-warning",
              selectedMarker.status === "resolved" && "bg-success/10 text-success"
            )}>
              {selectedMarker.status.charAt(0).toUpperCase() + selectedMarker.status.slice(1)}
            </div>
          )}
          <div className="flex gap-2 mt-4">
            <Button variant="default" size="sm" className="flex-1">View Details</Button>
            <Button variant="outline" size="sm">Directions</Button>
          </div>
        </div>
      )}

      {/* Map attribution placeholder */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-card/80 px-3 py-1 rounded-full">
        Interactive Map • Connect Mapbox for real data
      </div>
    </div>
  );
}
