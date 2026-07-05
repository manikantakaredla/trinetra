import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, CheckCircle2, XCircle, Search, Copy, Scale } from "lucide-react";

export function PlateMismatch() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Plate Mismatch Verification</h2>
          <p className="text-sm text-slate-500 mt-1">Identify and verify cloned or fake license plates.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Discrepancy List */}
        <div className="lg:col-span-4 space-y-4">
           <div className="relative">
             <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
             <Input placeholder="Search pending verifications..." className="pl-9 h-10 bg-white" />
           </div>

           <div className="space-y-3 mt-4">
             {/* Selected Item */}
             <div className="bg-orange-50 border-2 border-orange-400 p-4 rounded-xl shadow-sm cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-400 opacity-10 rounded-bl-full"></div>
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">High Risk</span>
                   <span className="text-xs font-mono font-medium text-slate-500">12m ago</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="bg-slate-900 text-white font-mono font-bold px-2 py-1 rounded text-sm tracking-wider">MH12 RT 4410</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 font-medium">Model mismatch: Detected Hatchback vs Registered SUV</p>
             </div>

             {/* Other Items */}
             <div className="bg-white border border-slate-200 hover:border-slate-300 p-4 rounded-xl shadow-sm cursor-pointer transition-colors">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Medium Risk</span>
                   <span className="text-xs font-mono font-medium text-slate-500">1h ago</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="bg-slate-100 text-slate-700 border border-slate-300 font-mono font-bold px-2 py-1 rounded text-sm tracking-wider">DL04 C 8829</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">Color mismatch: Detected White vs Registered Black</p>
             </div>
           </div>
        </div>

        {/* Right Side: Verification Panel */}
        <div className="lg:col-span-8">
           <Card className="border-none shadow-sm h-full border-t-4 border-t-orange-400">
             <CardContent className="p-6 md:p-8">
               
               <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                   <AlertTriangle className="w-6 h-6 text-orange-500" />
                   Mismatch Analysis: MH12 RT 4410
                 </h3>
                 <span className="text-xs font-bold px-3 py-1 bg-orange-100 text-orange-700 rounded-full">ACTION REQUIRED</span>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* AI Detection */}
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">AI Detection (Live)</h4>
                       <span className="text-xs text-slate-400 font-mono">CAM-E-01</span>
                     </div>
                     <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden relative">
                       <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80" alt="Detected" className="w-full h-full object-cover opacity-80" />
                       <div className="absolute top-2 left-2 bg-slate-900/90 text-white font-mono font-bold px-2 py-1 text-sm border border-white/20">
                         MH12 RT 4410
                       </div>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                        <div className="flex justify-between"><span className="text-xs text-slate-500 uppercase font-bold">Type</span> <span className="text-sm font-bold text-slate-800">Hatchback</span></div>
                        <div className="flex justify-between"><span className="text-xs text-slate-500 uppercase font-bold">Color</span> <span className="text-sm font-bold text-slate-800">Silver</span></div>
                        <div className="flex justify-between"><span className="text-xs text-slate-500 uppercase font-bold">Make</span> <span className="text-sm font-bold text-slate-800">Maruti Suzuki</span></div>
                     </div>
                  </div>

                  {/* Database Record */}
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">RTO Database</h4>
                       <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded font-bold">VERIFIED</span>
                     </div>
                     <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-300">
                       <div className="text-center text-slate-400">
                         <Scale className="w-8 h-8 mx-auto mb-2 opacity-50" />
                         <span className="text-sm font-medium">Official Record Data</span>
                       </div>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2 relative overflow-hidden">
                        <div className="absolute inset-y-0 right-0 w-1 bg-orange-400"></div>
                        <div className="flex justify-between"><span className="text-xs text-slate-500 uppercase font-bold">Type</span> <span className="text-sm font-bold text-red-600 flex items-center gap-1"><XCircle className="w-3 h-3"/> SUV</span></div>
                        <div className="flex justify-between"><span className="text-xs text-slate-500 uppercase font-bold">Color</span> <span className="text-sm font-bold text-slate-800 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/> Silver</span></div>
                        <div className="flex justify-between"><span className="text-xs text-slate-500 uppercase font-bold">Make</span> <span className="text-sm font-bold text-red-600 flex items-center gap-1"><XCircle className="w-3 h-3"/> Mahindra</span></div>
                     </div>
                  </div>
               </div>

               {/* Officer Action */}
               <div className="border-t border-slate-200 pt-6">
                 <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Officer Verdict</h4>
                 <div className="flex gap-4">
                    <Button className="bg-red-600 hover:bg-red-700 flex-1 h-12">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Mark as Cloned / Fake Plate
                    </Button>
                    <Button variant="outline" className="flex-1 h-12 border-slate-300 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                      Dismiss (False Positive)
                    </Button>
                 </div>
               </div>

             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
