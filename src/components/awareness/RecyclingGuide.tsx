import { useState } from "react";
import { Search, Leaf, Droplets, Zap, Trash, Package, Wine, Smartphone, Battery } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "wet",
    title: "Wet Waste",
    icon: Droplets,
    color: "bg-success",
    items: ["Food scraps", "Fruit peels", "Vegetable waste", "Coffee grounds", "Tea bags", "Eggshells"],
    tip: "Compost wet waste to create nutrient-rich soil for plants.",
  },
  {
    id: "dry",
    title: "Dry Waste",
    icon: Package,
    color: "bg-earth",
    items: ["Paper", "Cardboard", "Plastic bottles", "Metal cans", "Glass jars", "Newspaper"],
    tip: "Clean and dry items before recycling for best results.",
  },
  {
    id: "plastic",
    title: "Plastics",
    icon: Wine,
    color: "bg-accent",
    items: ["PET bottles (#1)", "HDPE containers (#2)", "Plastic bags", "Food containers", "Packaging"],
    tip: "Check the recycling number on plastics. Not all plastics are recyclable.",
  },
  {
    id: "ewaste",
    title: "E-Waste",
    icon: Smartphone,
    color: "bg-warning",
    items: ["Old phones", "Computers", "Cables", "Batteries", "Chargers", "TVs"],
    tip: "Never throw electronics in regular trash. Find certified e-waste recyclers.",
  },
  {
    id: "hazardous",
    title: "Hazardous",
    icon: Zap,
    color: "bg-destructive",
    items: ["Batteries", "Paint", "Chemicals", "Pesticides", "Light bulbs", "Medical waste"],
    tip: "Handle with care and dispose at designated hazardous waste facilities.",
  },
  {
    id: "compost",
    title: "Compostable",
    icon: Leaf,
    color: "bg-primary",
    items: ["Garden waste", "Leaves", "Grass clippings", "Wood chips", "Paper towels", "Cotton"],
    tip: "Create a compost bin at home to reduce waste and enrich soil.",
  },
];

export function RecyclingGuide() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.items.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search waste types..."
          className="pl-12 h-12 rounded-2xl"
        />
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, index) => {
          const Icon = category.icon;
          const isExpanded = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(isExpanded ? null : category.id)}
              className={cn(
                "p-6 rounded-2xl border border-border text-left transition-all duration-300 bg-card hover:shadow-eco-md animate-fade-in",
                isExpanded && "ring-2 ring-primary shadow-eco-md"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center text-primary-foreground", category.color)}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.items.length} items</p>
                </div>
              </div>

              {/* Items list */}
              <div className={cn(
                "grid grid-cols-2 gap-2 overflow-hidden transition-all duration-300",
                isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
              )}>
                {category.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Tip */}
              {isExpanded && (
                <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-primary font-medium">💡 {category.tip}</p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
