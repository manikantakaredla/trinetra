import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, ShieldAlert, AlertCircle, Edit, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Watchlist() {
  const watchlist = [
    { id: 1, plate: "AP39AB1234", owner: "Unknown", case: "FIR-2023-0142", station: "Central Point", type: "Car", status: "Active" },
    { id: 2, plate: "TS09EK9999", owner: "Ramesh K.", case: "FIR-2023-0211", station: "West Side", type: "SUV", status: "Active" },
    { id: 3, plate: "MH12CD5678", owner: "Stolen", case: "FIR-2023-0888", station: "Highway Patrol", type: "Bike", status: "Resolved" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Stolen Vehicle Watchlist</h2>
          <p className="text-sm text-slate-500 mt-1">Manage wanted vehicles. The AI automatically matches uploads against this list.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="py-4 border-b border-slate-100 flex flex-row items-center justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Search watchlist..." className="pl-9 h-9" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Plate Number</TableHead>
                <TableHead>Case / Station</TableHead>
                <TableHead>Vehicle Details</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {watchlist.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-mono font-bold text-slate-700">
                    {item.plate}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium text-slate-800">{item.case}</div>
                    <div className="text-xs text-slate-500">{item.station}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-slate-800">{item.type}</div>
                    <div className="text-xs text-slate-500">Owner: {item.owner}</div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium ${
                      item.status === 'Active' ? 'bg-rose-50 text-rose-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.status === 'Active' ? <AlertCircle className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                      {item.status}
                    </span>
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
