import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Printer, Search, Shield, MapPin, Map } from "lucide-react";

export function Reports() {
  const reports = [
    { id: "REP-2023-001", case: "Hit & Run - Highway 9", officer: "Insp. Raj", date: "Oct 24, 2023", status: "Generated" },
    { id: "REP-2023-002", case: "Stolen Vehicle Ring", officer: "Det. Smith", date: "Oct 22, 2023", status: "Pending Signature" },
    { id: "REP-2023-003", case: "Missing Person - Blue Sedan", officer: "Insp. Raj", date: "Sep 15, 2023", status: "Archived" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Investigation Reports</h2>
          <p className="text-sm text-slate-500 mt-1">Generate, view, and export official AI investigation reports.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="w-4 h-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input placeholder="Search reports by ID or Case Name..." className="pl-9 h-10" />
        </div>
        <select className="flex h-10 w-[200px] items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-950">
          <option>All Officers</option>
          <option>Insp. Raj</option>
          <option>Det. Smith</option>
        </select>
        <select className="flex h-10 w-[200px] items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-950">
          <option>Status: All</option>
          <option>Generated</option>
          <option>Pending Signature</option>
        </select>
      </div>

      {/* Preview of a Report */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Reports List */}
        <div className="lg:col-span-4 space-y-4">
          {reports.map((rep) => (
            <div key={rep.id} className={`p-4 rounded-xl border ${rep.id === 'REP-2023-001' ? 'border-blue-500 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-white hover:bg-slate-50'} cursor-pointer transition-colors`}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono font-bold text-slate-500">{rep.id}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  rep.status === 'Generated' ? 'bg-green-100 text-green-700' :
                  rep.status === 'Pending Signature' ? 'bg-orange-100 text-orange-700' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {rep.status}
                </span>
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-2">{rep.case}</h4>
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>{rep.officer}</span>
                <span>{rep.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Report Preview */}
        <div className="lg:col-span-8">
          <Card className="border-none shadow-sm h-[600px] flex flex-col">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-xl">
               <div className="flex items-center gap-3">
                 <FileText className="w-5 h-5 text-slate-400" />
                 <span className="font-semibold text-slate-700">Report Preview: REP-2023-001</span>
               </div>
               <div className="flex gap-2">
                 <Button size="sm" variant="outline" className="text-slate-600 bg-white"><Printer className="w-4 h-4 mr-2"/> Print</Button>
                 <Button size="sm" variant="outline" className="text-slate-600 bg-white border-slate-200"><Download className="w-4 h-4 mr-2"/> PDF</Button>
               </div>
            </div>
            <CardContent className="flex-1 overflow-y-auto p-8 bg-slate-100/50">
              
              {/* Fake A4 Page */}
              <div className="max-w-[21cm] mx-auto bg-white min-h-[29.7cm] shadow-md border border-slate-200 p-12">
                 
                 {/* Report Header */}
                 <div className="flex items-center justify-between border-b-2 border-slate-800 pb-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-slate-900 rounded flex items-center justify-center text-white">
                        <Shield className="w-8 h-8" />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold tracking-tight uppercase text-slate-900">Official Investigation Report</h1>
                        <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase mt-1">TRINETRA AI VEHICLE INTELLIGENCE</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-bold text-slate-800">REP-2023-001</p>
                       <p className="text-xs text-slate-500 mt-1 font-mono">24 OCT 2023 15:45:00 UTC</p>
                    </div>
                 </div>

                 {/* Case Info */}
                 <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b pb-1 mb-3">Case Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">Case Name</span> <span className="font-semibold text-slate-800">Hit & Run - Highway 9</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Location</span> <span className="font-semibold text-slate-800">Highway 9 Toll, North</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Incident Date</span> <span className="font-semibold text-slate-800">Oct 24, 2023</span></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b pb-1 mb-3">Investigating Officer</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">Name</span> <span className="font-semibold text-slate-800">Insp. Raj Kumar</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">ID Number</span> <span className="font-semibold text-slate-800">ID-7492-AX</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Station</span> <span className="font-semibold text-slate-800">Station 42, Central</span></div>
                      </div>
                    </div>
                 </div>

                 {/* AI Findings Summary */}
                 <div className="mb-8">
                   <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b pb-1 mb-4">AI Intelligence Summary</h3>
                   <p className="text-sm text-slate-700 leading-relaxed text-justify mb-4">
                     Trinetra AI processed 4 video feeds (CAM-N-01 to CAM-N-03, CAM-BORDER). 1,248 vehicles were detected. A High Confidence Match (98.4%) was established for suspect vehicle <span className="font-mono font-bold">AP39 AB 1234</span> at 14:24:12 on CAM-N-03.
                   </p>
                   <div className="flex gap-4">
                     <div className="flex-1 bg-slate-50 border p-3">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary POI</p>
                       <p className="font-mono font-bold text-slate-800 text-sm mt-1">AP39 AB 1234</p>
                     </div>
                     <div className="flex-1 bg-slate-50 border p-3">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vehicle Specs</p>
                       <p className="font-semibold text-slate-800 text-sm mt-1">Toyota Fortuner (Black)</p>
                     </div>
                     <div className="flex-1 bg-red-50 border border-red-100 p-3">
                       <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Flags</p>
                       <p className="font-semibold text-red-700 text-sm mt-1">Watchlist Hit</p>
                     </div>
                   </div>
                 </div>

                 {/* Signatures */}
                 <div className="mt-24 flex justify-between px-12">
                   <div className="text-center">
                     <div className="w-48 border-b border-slate-400 mb-2"></div>
                     <p className="text-xs font-bold text-slate-600">Investigating Officer</p>
                   </div>
                   <div className="text-center">
                     <div className="w-48 border-b border-slate-400 mb-2"></div>
                     <p className="text-xs font-bold text-slate-600">System Administrator</p>
                   </div>
                 </div>

              </div>

            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
