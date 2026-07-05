import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, FileText, Calendar, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Investigations() {
  const investigations = [
    { id: "INV-2023-001", title: "Hit & Run - Highway 9", officer: "Insp. Raj", status: "Active", date: "Oct 24, 2023" },
    { id: "INV-2023-002", title: "Stolen Vehicle Ring", officer: "Det. Smith", status: "Active", date: "Oct 22, 2023" },
    { id: "INV-2023-003", title: "Missing Person - Blue Sedan", officer: "Insp. Raj", status: "Closed", date: "Sep 15, 2023" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Investigations</h2>
          <p className="text-sm text-slate-500 mt-1">Manage cases, attach evidence, and generate reports.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Investigation
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input placeholder="Search cases..." className="pl-9" />
        </div>
        <Button variant="outline">Active Only</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {investigations.map((inv) => (
          <Card key={inv.id} className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{inv.id}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  inv.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {inv.status}
                </span>
              </div>
              <h3 className="font-bold text-slate-800 mb-4">{inv.title}</h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-slate-500">
                  <User className="w-4 h-4 mr-2 text-slate-400" />
                  {inv.officer}
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                  {inv.date}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 -ml-2">
                  View Case
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700 -mr-2">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Report
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
