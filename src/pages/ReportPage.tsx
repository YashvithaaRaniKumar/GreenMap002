import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReportForm } from "@/components/report/ReportForm";
import { FileText, Shield, Zap } from "lucide-react";
import { toast } from "sonner";

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Make a Report
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Report a Waste Issue
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help keep your community clean by reporting overflowing bins, illegal dumping, or other waste problems.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-xl glass-panel animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Quick & Easy</p>
                <p className="text-xs text-muted-foreground">Takes less than 2 mins</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl glass-panel animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Anonymous</p>
                <p className="text-xs text-muted-foreground">Your privacy is protected</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl glass-panel animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Trackable</p>
                <p className="text-xs text-muted-foreground">Get status updates</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel rounded-3xl p-6 md:p-10 shadow-eco-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ReportForm onSubmit={() => toast.success("Report submitted successfully!", { description: "Thank you for helping keep our community clean." })} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
