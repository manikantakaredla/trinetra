import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, MapPin, Activity, VideoOff, Edit, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Cameras() {
  const cameras = [
    { id: 1, name: "City Center North", location: "17.4050, 78.4967", status: "Active", lastPing: "2 mins ago" },
    { id: 2, name: "Toll Gate 4", location: "17.3850, 78.4867", status: "Active", lastPing: "1 min ago" },
    { id: 3, name: "Highway Junction C", location: "17.4250, 78.4767", status: "Offline", lastPing: "2 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Camera Management</h2>
          <p className="text-sm text-slate-500 mt-1">Manage CCTV camera configurations and view status.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Camera
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="py-4 border-b border-slate-100 flex flex-row items-center justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Search cameras..." className="pl-9 h-9" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Camera Name</TableHead>
                <TableHead>Coordinates</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Ping</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cameras.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-slate-700">
                    {item.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm text-slate-500">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      {item.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium ${
                      item.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                    }`}>
                      {item.status === 'Active' ? <Activity className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-slate-500">
                    {item.lastPing}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-rose-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
