import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, UploadCloud, Video, CheckCircle2, FileText, MapPin, Camera } from "lucide-react";
import { useNavigate } from "react-router";

export function NewInvestigation() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));
  const handleSubmit = () => {
    // Navigate to AI Processing
    navigate("/processing");
  };

  const steps = [
    { id: 1, title: "Case Details", icon: FileText },
    { id: 2, title: "Camera Details", icon: MapPin },
    { id: 3, title: "Evidence Upload", icon: UploadCloud },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">New Investigation</h2>
        <p className="text-sm text-slate-500 mt-1">Create a new case and upload CCTV evidence for AI analysis.</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s.id ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-slate-100 text-slate-400'
              }`}>
                {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
              </div>
              <span className={`text-xs font-semibold uppercase tracking-wider ${step >= s.id ? 'text-blue-600' : 'text-slate-400'}`}>
                {s.title}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-4 rounded-full ${step > s.id ? 'bg-blue-600' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <Card className="border-slate-200 shadow-sm rounded-xl overflow-hidden">
        <CardContent className="p-8">
          
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Case Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Case Title</Label>
                  <Input placeholder="e.g. Hit and Run - Highway 9" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Case Type</Label>
                  <select className="flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2">
                    <option>Hit & Run</option>
                    <option>Vehicle Theft</option>
                    <option>Crime Investigation</option>
                    <option>Traffic Violation</option>
                    <option>General Investigation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Case Number</Label>
                  <Input placeholder="Auto-generated if left blank" className="h-11 font-mono text-sm" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Priority</Label>
                  <div className="flex gap-4 h-11">
                    <label className="flex items-center gap-2 px-3 py-2 border rounded-md flex-1 cursor-pointer hover:bg-slate-50">
                      <input type="radio" name="priority" value="normal" defaultChecked className="text-blue-600" />
                      <span className="text-sm font-medium">Normal</span>
                    </label>
                    <label className="flex items-center gap-2 px-3 py-2 border rounded-md flex-1 cursor-pointer hover:bg-slate-50 border-orange-200 bg-orange-50/50">
                      <input type="radio" name="priority" value="high" className="text-orange-600" />
                      <span className="text-sm font-medium text-orange-700">High</span>
                    </label>
                    <label className="flex items-center gap-2 px-3 py-2 border rounded-md flex-1 cursor-pointer hover:bg-slate-50 border-red-200 bg-red-50/50">
                      <input type="radio" name="priority" value="critical" className="text-red-600" />
                      <span className="text-sm font-medium text-red-700">Critical</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Incident Date & Time</Label>
                  <div className="flex gap-2">
                    <Input type="date" className="h-11 flex-1" />
                    <Input type="time" className="h-11 flex-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Location (Road/Area)</Label>
                  <Input placeholder="Enter road or area name" className="h-11" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Description / Officer Notes</Label>
                  <Textarea placeholder="Enter case description..." className="min-h-[100px] resize-none" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Camera Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Camera ID / Name</Label>
                  <Input placeholder="e.g. CAM-NH44-01" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Camera Type</Label>
                  <select className="flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2">
                    <option>Traffic Camera (PTZ)</option>
                    <option>CCTV (Fixed)</option>
                    <option>Toll Camera (ANPR)</option>
                    <option>Drone Footage</option>
                    <option>Private Camera</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Road Direction</Label>
                  <select className="flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2">
                    <option>North Bound</option>
                    <option>South Bound</option>
                    <option>East Bound</option>
                    <option>West Bound</option>
                    <option>Intersection / Multi-directional</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Coordinates (Auto Fill Available)</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Lat" className="h-11 flex-1 font-mono text-sm" />
                    <Input placeholder="Lng" className="h-11 flex-1 font-mono text-sm" />
                    <Button variant="outline" className="h-11 px-3" title="Get Current Location">
                      <MapPin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-xs font-semibold uppercase text-slate-500">Select on Map</Label>
                  <div className="w-full h-[200px] bg-slate-100 border rounded-lg flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 opacity-50" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
                    <div className="z-10 flex flex-col items-center text-slate-400">
                       <MapPin className="w-8 h-8 mb-2" />
                       <span className="text-sm font-medium">Interactive Map (Placeholder)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Evidence Upload</h3>
              
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Upload CCTV Evidence</h3>
                <p className="text-sm text-slate-500 text-center max-w-sm mb-6">
                  Drag and drop video files here or click to browse.
                  Supported formats: MP4, AVI, MOV, JPEG, PNG.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="bg-white">Browse Files</Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-700">Selected Files</h4>
                <div className="p-4 border rounded-lg flex items-center gap-4 bg-white shadow-sm">
                  <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-500 shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">NH44_toll_cam_01_oct24.mp4</p>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <span>24.5 MB</span>
                      <span>•</span>
                      <span>Duration: 14:32</span>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Ready
                  </div>
                </div>
              </div>

            </div>
          )}

        </CardContent>
        <div className="p-4 bg-slate-50 border-t flex justify-between">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>
            Back
          </Button>
          {step < 3 ? (
            <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700">
              Continue
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Begin AI Analysis
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
