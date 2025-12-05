import { Navbar } from "@/components/layout/Navbar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ReportsChart } from "@/components/dashboard/ReportsChart";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { LayoutDashboard, Download, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fade-in">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <LayoutDashboard className="w-6 h-6 text-primary" />
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Authority Dashboard
                </h1>
              </div>
              <p className="text-muted-foreground">
                Monitor waste reports, track trends, and plan resources effectively.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="default" onClick={() => toast.success("Dashboard refreshed")}>
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
              <Button variant="default" size="default" onClick={() => toast.success("Report exported", { description: "Your download will start shortly." })}>
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-8">
            <StatsCards />
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <ReportsChart />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CategoryBreakdown />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 rounded-2xl glass-panel animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Reports</h3>
            <div className="space-y-4">
              {[
                { id: 1, title: "Overflowing bin at Market St", status: "pending", time: "10 mins ago", type: "bin" },
                { id: 2, title: "Illegal dumping near River Park", status: "active", time: "25 mins ago", type: "dumping" },
                { id: 3, title: "Litter accumulation at Bus Stop #12", status: "resolved", time: "1 hour ago", type: "litter" },
                { id: 4, title: "Hazardous waste found at Industrial Zone", status: "active", time: "2 hours ago", type: "hazardous" },
                { id: 5, title: "Bin needs replacement at Central Park", status: "pending", time: "3 hours ago", type: "bin" },
              ].map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border hover:shadow-eco-sm transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${report.status === "active" ? "bg-destructive" :
                      report.status === "pending" ? "bg-warning" : "bg-success"
                      }`} />
                    <div>
                      <p className="font-medium text-foreground">{report.title}</p>
                      <p className="text-sm text-muted-foreground">{report.time}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${report.status === "active" ? "bg-destructive/10 text-destructive" :
                    report.status === "pending" ? "bg-warning/10 text-warning" : "bg-success/10 text-success"
                    }`}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
