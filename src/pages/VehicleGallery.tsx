import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Clock, Info } from "lucide-react";
import { Link } from "react-router";

export function VehicleGallery() {
  const vehicles = [
    { plate: "AP39 AB 1234", type: "SUV", color: "Black", time: "14:24:12", cam: "CAM-N-03", conf: 98, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&auto=format&fit=crop&q=60" },
    { plate: "DL04 C 8829", type: "Sedan", color: "White", time: "14:23:45", cam: "CAM-N-02", conf: 95, img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&auto=format&fit=crop&q=60" },
    { plate: "KA01 ME 5555", type: "Truck", color: "Red", time: "14:22:10", cam: "CAM-N-01", conf: 89, img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=500&auto=format&fit=crop&q=60", alert: true },
    { plate: "MH12 RT 4410", type: "Hatchback", color: "Silver", time: "14:21:05", cam: "CAM-E-01", conf: 92, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&auto=format&fit=crop&q=60" },
    { plate: "HR26 CL 9901", type: "SUV", color: "Grey", time: "14:19:30", cam: "CAM-BORDER", conf: 96, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60" },
    { plate: "UP32 KK 0001", type: "Bike", color: "Blue", time: "14:18:15", cam: "CAM-N-03", conf: 85, img: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=500&auto=format&fit=crop&q=60" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Vehicle Gallery</h2>
          <p className="text-sm text-slate-500 mt-1">All vehicles detected in Investigation INV-2023-089</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input placeholder="Search plate number..." className="pl-9" />
        </div>
        <select className="flex h-10 w-[200px] items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2">
          <option>All Vehicle Types</option>
          <option>Cars</option>
          <option>Bikes</option>
          <option>Trucks</option>
        </select>
        <Button variant="outline" className="shrink-0 text-slate-600">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="relative h-48 bg-slate-900 overflow-hidden">
              <img src={v.img} alt={v.plate} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
              <div className="absolute top-3 left-3">
                <span className="bg-slate-900/80 backdrop-blur text-white font-mono font-bold px-3 py-1 rounded border border-white/20 shadow-lg tracking-wider">
                  {v.plate}
                </span>
              </div>
              {v.alert && (
                <div className="absolute top-3 right-3">
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase animate-pulse shadow-lg">
                    Watchlist Hit
                  </span>
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-slate-800">{v.color} {v.type}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {v.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {v.cam}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">AI Match</span>
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{v.conf}%</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Link to={`/vehicle/${v.plate.replace(/\s+/g, '')}`}>
                    <Info className="w-4 h-4 mr-2" />
                    Details
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1 text-slate-600">
                  Track Route
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
