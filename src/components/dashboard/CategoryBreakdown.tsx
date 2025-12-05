import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Overflowing Bins", value: 35, color: "hsl(40 90% 50%)" },
  { name: "Illegal Dumping", value: 25, color: "hsl(0 72% 55%)" },
  { name: "Litter Spots", value: 22, color: "hsl(145 65% 35%)" },
  { name: "Hazardous Waste", value: 18, color: "hsl(195 70% 45%)" },
];

export function CategoryBreakdown() {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">Report Categories</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                padding: "12px",
              }}
              formatter={(value: number) => [`${value}%`, "Percentage"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm text-muted-foreground truncate">{item.name}</span>
            <span className="text-sm font-medium text-foreground ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
