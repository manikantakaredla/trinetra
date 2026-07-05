import { Outlet, Link, useLocation } from "react-router";
import { 
  PlusCircle,
  FileText,
  LayoutDashboard, 
  Video, 
  Search, 
  Map, 
  ShieldAlert, 
  BellRing, 
  FileSearch, 
  BarChart, 
  Cctv, 
  Users, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "New Investigation", href: "/investigation/new", icon: PlusCircle },
  { title: "My Investigations", href: "/investigations", icon: FileSearch },
  { title: "Vehicle Search", href: "/search", icon: Search },
  { title: "Watchlist", href: "/watchlist", icon: ShieldAlert },
  { title: "Reports", href: "/reports", icon: FileText },
  { title: "Analytics", href: "/analytics", icon: BarChart },
  { title: "Camera Management", href: "/cameras", icon: Cctv },
  { title: "Users", href: "/users", icon: Users },
  { title: "Settings", href: "/settings", icon: Settings },
];

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">
            T
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            TRINETRA <span className="text-xs block font-normal text-slate-400">AI INVESTIGATION</span>
          </h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-1">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  location.pathname === item.href || (location.pathname.startsWith(item.href) && item.href !== '/')
                    ? "bg-blue-600/10 text-blue-400 font-medium"
                    : "text-slate-400 hover:bg-slate-800"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 mt-auto border-t border-slate-800">
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-slate-700"></div>
            <div className="text-sm">
              <p className="text-white font-medium">Officer Vikram</p>
              <p className="text-xs text-slate-500 font-mono">STATION-ID-042</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Dashboard</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            <span className="text-slate-900 font-medium">{sidebarNavItems.find(i => location.pathname === i.href || (location.pathname.startsWith(i.href) && i.href !== '/'))?.title || "Overview"}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-green-100 text-green-700 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              AI SERVICES ONLINE
            </div>
            <div className="relative">
              <BellRing className="w-6 h-6 text-slate-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-[10px] text-white flex items-center justify-center rounded-full border-2 border-white font-bold">3</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
