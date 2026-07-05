import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Map, Activity, Download, Printer, Shield, Eye, AlertTriangle, Play } from "lucide-react";
import { Link } from "react-router";

export function InvestigationDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">INV-2023-089</span>
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-2 py-1 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              AI Analysis Complete
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Hit & Run - Highway 9</h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-2">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Insp. Raj</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Map className="w-4 h-4" /> Highway 9 Toll</span>
            <span>•</span>
            <span>Oct 24, 2023</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-slate-600 bg-white">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" className="text-slate-600 bg-white">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/reports/new">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Timeline */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            Investigation Timeline
          </h3>
          <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pb-4">
            {[
              { time: "14:20:15", title: "Vehicle Entered", desc: "Detected entering from North Gate", cam: "CAM-N-01" },
              { time: "14:22:30", title: "Vehicle Changed Lane", desc: "Erratic movement detected", cam: "CAM-N-02" },
              { time: "14:24:12", title: "Incident", desc: "High probability of collision", cam: "CAM-N-03", alert: true },
              { time: "14:25:00", title: "Vehicle Left", desc: "Exited towards East Highway", cam: "CAM-E-01" },
              { time: "14:30:10", title: "Last Seen", desc: "Lost visual at City Border", cam: "CAM-BORDER" },
            ].map((event, i) => (
              <div key={i} className="relative pl-6">
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${event.alert ? 'bg-red-500' : 'bg-slate-300'}`}></div>
                <p className="text-xs font-mono font-bold text-slate-400">{event.time}</p>
                <h4 className={`font-semibold mt-1 ${event.alert ? 'text-red-600' : 'text-slate-800'}`}>{event.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{event.desc}</p>
                <span className="inline-block mt-2 text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                  {event.cam}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Interactive Map / Video */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 relative aspect-video flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">LIVE AI OVERLAY</span>
                <p className="text-white font-mono text-xs mt-2">14:24:12 • CAM-N-03</p>
              </div>
              <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Eye className="w-4 h-4 mr-2" />
                View Full Route
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button asChild variant="outline" className="h-16 justify-start bg-white hover:bg-slate-50 border-slate-200">
              <Link to="/investigations/1/gallery">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">Vehicle Gallery</div>
                  <div className="text-xs text-slate-500">View all detected vehicles</div>
                </div>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-16 justify-start bg-white hover:bg-slate-50 border-slate-200">
              <Link to="/investigations/1/mismatch">
                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">Plate Mismatch</div>
                  <div className="text-xs text-slate-500">Verify suspicious plates</div>
                </div>
              </Link>
            </Button>
          </div>
        </div>

        {/* Right: AI Findings */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            AI Findings
          </h3>
          
          <Card className="border-none shadow-sm">
            <CardContent className="p-5 space-y-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Vehicles</p>
                <p className="text-3xl font-bold text-slate-800">1,248</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Cars</span>
                  <span className="font-bold text-slate-800">842</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Bikes</span>
                  <span className="font-bold text-slate-800">234</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Trucks/Buses</span>
                  <span className="font-bold text-slate-800">172</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-sm bg-red-50/30">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-2 text-red-600 font-bold">
                <AlertTriangle className="w-5 h-5" />
                Critical Alerts
              </div>
              
              <div className="p-3 bg-white border border-red-100 rounded-lg shadow-sm">
                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">Watchlist Match</p>
                <p className="font-bold text-slate-800 text-sm">AP39 AB 1234</p>
                <p className="text-xs text-slate-500 mt-1">Stolen vehicle detected in footage.</p>
                <Button size="sm" variant="ghost" className="w-full mt-2 text-blue-600 bg-blue-50 hover:bg-blue-100">View Details</Button>
              </div>

              <div className="p-3 bg-white border border-orange-100 rounded-lg shadow-sm">
                <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">Plate Mismatch</p>
                <p className="font-bold text-slate-800 text-sm">MH12 RT 4410</p>
                <p className="text-xs text-slate-500 mt-1">Vehicle model does not match registration.</p>
                <Button size="sm" variant="ghost" className="w-full mt-2 text-blue-600 bg-blue-50 hover:bg-blue-100">Verify</Button>
              </div>

            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
