import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20">
          <Leaf className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute top-20 right-20 w-16 h-16">
          <Sparkles className="w-full h-full text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24">
          <Leaf className="w-full h-full text-primary-foreground rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Join our growing community of eco-warriors and help create cleaner, healthier neighborhoods for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report">
              <Button variant="secondary" size="xl" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start Reporting
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
