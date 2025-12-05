import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, FileText, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-leaf-light via-background to-sky-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Community-Driven Waste Management
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Map Waste.{" "}
              <span className="text-primary">Clean Cities.</span>{" "}
              Build Community.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Join thousands of citizens making their neighborhoods cleaner. Report waste hotspots, 
              discover recycling centers, and participate in local clean-up drives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/report">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <FileText className="w-5 h-5" />
                  Report Waste
                </Button>
              </Link>
              <Link to="/map">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  <MapPin className="w-5 h-5" />
                  Explore Map
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-primary">2,847</p>
                <p className="text-sm text-muted-foreground">Hotspots Mapped</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-accent">1,234</p>
                <p className="text-sm text-muted-foreground">Active Volunteers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-earth">89%</p>
                <p className="text-sm text-muted-foreground">Issues Resolved</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-eco-lg">
              <img
                src={heroImage}
                alt="Community members recycling and cleaning up the city"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 glass-panel rounded-2xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">New Report</p>
                  <p className="text-xs text-muted-foreground">Overflowing bin at Main St</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
