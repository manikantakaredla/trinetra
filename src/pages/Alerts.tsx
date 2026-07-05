import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BellRing, Camera, Clock, CheckCircle2, ShieldAlert } from "lucide-react";

export function Alerts() {
  const alerts = [
    { id: 1, plate: "AP39AB1234", type: "Watchlist Match", status: "unread", camera: "Toll Gate 4", time: "10 mins ago", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=200" },
    { id: 2, plate: "TS09EK9999", type: "Watchlist Match", status: "read", camera: "City Center", time: "2 hours ago", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Alerts</h2>
          <p className="text-sm text-slate-500 mt-1">Instant notifications for watchlist matches.</p>
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={`border-none shadow-sm overflow-hidden ${alert.status === 'unread' ? 'ring-1 ring-rose-200 bg-rose-50/10' : 'bg-white'}`}>
            <CardContent className="p-0 sm:flex">
              <div className="sm:w-48 h-48 sm:h-auto shrink-0 bg-slate-200 relative">
                <img src={alert.img} alt="Vehicle Snapshot" className="w-full h-full object-cover" />
                {alert.status === 'unread' && (
                  <div className="absolute top-3 left-3 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldAlert className={`w-4 h-4 ${alert.status === 'unread' ? 'text-rose-500' : 'text-slate-400'}`} />
                      <span className={`text-sm font-semibold ${alert.status === 'unread' ? 'text-rose-600' : 'text-slate-500'}`}>{alert.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-mono text-slate-800 tracking-wider">{alert.plate}</h3>
                  </div>
                  <Button variant={alert.status === 'unread' ? "default" : "outline"} className={alert.status === 'unread' ? "bg-rose-600 hover:bg-rose-700" : ""}>
                    {alert.status === 'unread' ? 'Acknowledge' : 'View Details'}
                  </Button>
                </div>
                
                <div className="mt-auto grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-600">
                    <Camera className="w-4 h-4 mr-2 text-slate-400" />
                    {alert.camera}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-2 text-slate-400" />
                    {alert.time}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
