import { Outlet } from "react-router-dom";
import { SiteNav } from "@/components/SiteNav";

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t py-5 text-center text-xs text-muted-foreground">
        © 2025 AI Smart Diet Planner
      </footer>
    </div>
  );
};
