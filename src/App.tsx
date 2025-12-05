import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MapPage from "./pages/MapPage";
import ReportPage from "./pages/ReportPage";
import AwarenessPage from "./pages/AwarenessPage";
import CommunityPage from "./pages/CommunityPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import { PageTransition } from "./components/layout/PageTransition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/green-map-hub-main">
        <Routes>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/map" element={<PageTransition><MapPage /></PageTransition>} />
          <Route path="/report" element={<PageTransition><ReportPage /></PageTransition>} />
          <Route path="/awareness" element={<PageTransition><AwarenessPage /></PageTransition>} />
          <Route path="/community" element={<PageTransition><CommunityPage /></PageTransition>} />
          <Route path="/dashboard" element={<PageTransition><DashboardPage /></PageTransition>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
