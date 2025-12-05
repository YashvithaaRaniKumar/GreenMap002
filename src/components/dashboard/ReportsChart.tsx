import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", reports: 45, resolved: 38 },
  { name: "Tue", reports: 52, resolved: 45 },
  { name: "Wed", reports: 38, resolved: 32 },
  { name: "Thu", reports: 65, resolved: 58 },
  { name: "Fri", reports: 48, resolved: 42 },
  { name: "Sat", reports: 72, resolved: 65 },
  { name: "Sun", reports: 35, resolved: 30 },
];

export function ReportsChart() {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">Weekly Report Trends</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(145 65% 35%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(145 65% 35%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(195 70% 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(195 70% 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                padding: "12px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
            />
            <Area
              type="monotone"
              dataKey="reports"
              stroke="hsl(145 65% 35%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorReports)"
              name="Reports"
            />
            <Area
              type="monotone"
              dataKey="resolved"
              stroke="hsl(195 70% 45%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorResolved)"
              name="Resolved"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Reports</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm text-muted-foreground">Resolved</span>
        </div>
      </div>
    </div>
  );
}
