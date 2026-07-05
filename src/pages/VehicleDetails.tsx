import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map, Clock, Shield, Download, Camera, AlertTriangle, FileText, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router";

export function VehicleDetails() {
  const { id } = useParams();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold font-mono bg-slate-800 text-white px-2 py-1 rounded">AP39 AB 1234</span>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
              High Confidence Match (98.4%)
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Black SUV - Metallic Grey</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-slate-600 bg-white">
            <Download className="w-4 h-4 mr-2" />
            Download Evidence
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/routes">
              <Map className="w-4 h-4 mr-2" />
              View Route Recon
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Image */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 relative aspect-video flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&auto=format&fit=crop&q=80" alt="Vehicle" className="w-full h-full object-cover opacity-90" />
            <div className="absolute top-4 left-4">
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">LIVE AI BOUNDING BOX</span>
            </div>
            {/* Fake bounding box */}
            <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border-2 border-green-500 bg-green-500/10">
               <div className="absolute -top-6 left-0 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5">
                 AP39 AB 1234 (98%)
               </div>
            </div>
          </div>

          {/* Vehicle Intelligence / Specs */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
               <h3 className="text-lg font-bold text-slate-800 border-b pb-3 mb-4 flex items-center gap-2">
                 <Shield className="w-5 h-5 text-blue-600" />
                 Official RTO Specifications (Vehicle Intelligence)
               </h3>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Manufacturer</p>
                    <p className="font-semibold text-slate-800 text-sm">Toyota</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Model</p>
                    <p className="font-semibold text-slate-800 text-sm">Fortuner</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Variant</p>
                    <p className="font-semibold text-slate-800 text-sm">2.8 4x4 AT</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Color (Reg)</p>
                    <p className="font-semibold text-slate-800 text-sm">Attitude Black</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Fuel Type</p>
                    <p className="font-semibold text-slate-800 text-sm">Diesel</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Engine Cap</p>
                    <p className="font-semibold text-slate-800 text-sm">2755 cc</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Reg Date</p>
                    <p className="font-semibold text-slate-800 text-sm">12 Oct 2021</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                    <p className="font-semibold text-green-600 text-sm flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5"/> Active</p>
                  </div>
               </div>

               <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Officer Notes</p>
                     <p className="text-sm text-slate-700 italic">Vehicle matches registered physical characteristics. No visible illegal modifications like aftermarket exhaust or bullbars detected in this frame.</p>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          
          <Card className="border-none shadow-sm">
            <CardContent className="p-5">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                Plate Verification
              </h3>
              <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg">
                 <div className="flex justify-between items-center border-b border-orange-200 pb-2 mb-2">
                    <span className="text-xs font-semibold text-orange-700">Detected Reg.</span>
                    <span className="font-mono font-bold text-slate-800">AP39 AB 1234</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-green-700">Database Reg.</span>
                    <span className="font-mono font-bold text-slate-800">AP39 AB 1234</span>
                 </div>
                 <div className="mt-3 pt-2 border-t border-orange-200">
                   <p className="text-xs text-orange-800 font-medium">Confidence: 98% Match.</p>
                   <p className="text-[10px] text-orange-600 mt-1 uppercase">No Cloning Detected</p>
                 </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-5">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                Detection Timeline
              </h3>
              
              <div className="relative border-l-2 border-slate-200 ml-2 space-y-6">
                {[
                  { time: "14:24:12", cam: "CAM-N-03", conf: "98%" },
                  { time: "14:22:30", cam: "CAM-N-02", conf: "95%" },
                  { time: "14:20:15", cam: "CAM-N-01", conf: "89%" },
                ].map((log, i) => (
                  <div key={i} className="relative pl-5">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white bg-blue-500"></div>
                    <p className="text-xs font-mono font-bold text-slate-400">{log.time}</p>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">{log.cam}</p>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                      <Camera className="w-3 h-3" /> Snapshot Conf: {log.conf}
                    </p>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-6 text-slate-600">
                View Full History
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
