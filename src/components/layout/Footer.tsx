import { Link } from "react-router-dom";
import { Leaf, Heart, Twitter, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">GreenMap</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Empowering communities to create cleaner, greener cities through collective action.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/map" className="text-muted-foreground hover:text-primary text-sm transition-colors">Waste Map</Link></li>
              <li><Link to="/report" className="text-muted-foreground hover:text-primary text-sm transition-colors">Report Issue</Link></li>
              <li><Link to="/awareness" className="text-muted-foreground hover:text-primary text-sm transition-colors">Learn Recycling</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary text-sm transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Recycling Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Composting Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">E-Waste Disposal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Partner With Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-primary text-sm transition-colors">Authority Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 GreenMap. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for a cleaner planet
          </p>
        </div>
      </div>
    </footer>
  );
}
