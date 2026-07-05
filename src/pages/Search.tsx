import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Filter, Camera, Calendar, Clock } from "lucide-react";

export function Search() {
  const [results, setResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      setResults([
        { id: 1, plate: "AP39AB1234", type: "Car", color: "White", camera: "Cam 1 - Toll", time: "10:42 AM", date: "Today", conf: 98, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=200" },
        { id: 2, plate: "MH12CD5678", type: "SUV", color: "Black", camera: "City Center N", time: "09:15 AM", date: "Today", conf: 94, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=200" },
        { id: 3, plate: "KA01EF9012", type: "Bike", color: "Red", camera: "Highway Ex 4", time: "08:30 AM", date: "Today", conf: 89, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=200" },
      ]);
      setSearching(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">Vehicle Search</h2>
        <p className="text-sm text-slate-500 mt-1">Search through extracted frames by plate number, type, or location.</p>
      </div>

      <Card className="border-none shadow-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input placeholder="Enter Number Plate (e.g., AP39...)" className="pl-9 h-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="h-10">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button onClick={handleSearch} className="h-10 bg-blue-600 hover:bg-blue-700 px-8">
                {searching ? "Searching..." : "Search"}
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full">
              <Camera className="w-3 h-3" /> All Cameras
            </div>
            <div className="flex items-center gap-2 bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full">
              <Calendar className="w-3 h-3" /> Last 7 Days
            </div>
            <div className="flex items-center gap-2 bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full">
              <Clock className="w-3 h-3" /> Any Time
            </div>
          </div>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-700">Showing {results.length} results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {results.map((res) => (
              <Card key={res.id} className="overflow-hidden border-none shadow-sm group">
                <div className="relative h-40 bg-slate-200">
                  <img src={res.img} alt="Vehicle snapshot" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded font-mono font-medium">
                    {res.conf}% OCR
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold font-mono text-slate-800 tracking-wider">{res.plate}</h4>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">{res.type}</span>
                  </div>
                  <div className="space-y-1.5 mt-3">
                    <div className="flex items-center text-xs text-slate-500">
                      <Camera className="w-3.5 h-3.5 mr-2 shrink-0" />
                      <span className="truncate">{res.camera}</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 mr-2 shrink-0" />
                      {res.date}, {res.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
