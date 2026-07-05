import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, MapPin, Clock, ArrowRight } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet icon issue in react
import L from 'leaflet';

// Fix leaflet icon issue in react
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


export function RouteReconstruction() {
  const [searching, setSearching] = useState(false);
  const [route, setRoute] = useState<any[]>([]);

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      setRoute([
        { id: 1, lat: 17.3850, lng: 78.4867, camera: "Toll A", time: "10:15 AM", conf: 98 },
        { id: 2, lat: 17.4050, lng: 78.4967, camera: "Junction B", time: "10:22 AM", conf: 95 },
        { id: 3, lat: 17.4250, lng: 78.4767, camera: "Highway C", time: "10:35 AM", conf: 89 },
      ]);
      setSearching(false);
    }, 1000);
  };

  const pathPositions = route.map(p => [p.lat, p.lng] as [number, number]);

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">Route Reconstruction</h2>
        <p className="text-sm text-slate-500 mt-1">Trace a vehicle's path across multiple cameras.</p>
      </div>

      <Card className="border-none shadow-sm shrink-0">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input placeholder="Enter Number Plate (e.g., AP39AB1234)" className="pl-9 h-10" />
            </div>
            <Button onClick={handleSearch} className="h-10 bg-blue-600 hover:bg-blue-700 px-8">
              {searching ? "Tracing..." : "Reconstruct Path"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {route.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-[500px]">
          {/* Timeline */}
          <Card className="lg:w-1/3 border-none shadow-sm overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Travel Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {route.map((point, index) => (
                  <div key={point.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-800 text-sm">{point.camera}</h4>
                        <span className="text-xs font-medium text-slate-500 flex items-center"><Clock className="w-3 h-3 mr-1" />{point.time}</span>
                      </div>
                      <p className="text-xs text-slate-500">Confidence: {point.conf}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="flex-1 border-none shadow-sm overflow-hidden min-h-[400px]">
            <MapContainer center={[17.4050, 78.4867]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              {route.map((point, idx) => (
                <Marker key={point.id} position={[point.lat, point.lng]}>
                  <Popup>
                    <div className="font-semibold">{point.camera}</div>
                    <div className="text-xs text-slate-500">{point.time}</div>
                  </Popup>
                </Marker>
              ))}
              {pathPositions.length > 1 && (
                <Polyline positions={pathPositions} color="#2563eb" weight={4} opacity={0.7} />
              )}
            </MapContainer>
          </Card>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-xl border border-slate-200/60 border-dashed text-slate-400 p-8 min-h-[400px]">
          <MapPin className="w-12 h-12 mb-4 text-slate-300" />
          <p>Enter a vehicle plate number to reconstruct its route.</p>
        </div>
      )}
    </div>
  );
}
