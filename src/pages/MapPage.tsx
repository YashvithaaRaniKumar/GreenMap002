import { Navbar } from "@/components/layout/Navbar";
import { WasteMap } from "@/components/map/WasteMap";

const MapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <WasteMap />
      </main>
    </div>
  );
};

export default MapPage;
