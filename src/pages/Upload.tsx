import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, Video, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "uploading" | "processing" | "completed" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus("idle");
      setProgress(0);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    setStatus("uploading");

    // Simulate upload progress
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setStatus("processing");
        // Simulate AI Processing delay
        setTimeout(() => {
          setStatus("completed");
          setUploading(false);
        }, 3000);
      }
    }, 100);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">CCTV Video Upload</h2>
          <p className="text-sm text-slate-500 mt-1">Upload CCTV footage for AI analysis and vehicle detection.</p>
        </div>
      </div>

      <Card className="border-none shadow-sm">
        <CardContent className="pt-6">
          <div 
            className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors
              ${file ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'}`}
          >
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept="video/mp4,video/avi,video/quicktime"
              onChange={handleFileChange}
            />
            
            {!file ? (
              <>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <UploadCloud className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Drag and drop video</h3>
                <p className="text-sm text-slate-500 mb-4">MP4, AVI, or MOV up to 500MB</p>
                <Button onClick={() => fileInputRef.current?.click()} variant="outline">
                  Browse Files
                </Button>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <Video className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{file.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                
                {status === "idle" && (
                  <div className="flex gap-3">
                    <Button onClick={() => setFile(null)} variant="outline" className="text-rose-500 hover:text-rose-600">
                      Cancel
                    </Button>
                    <Button onClick={handleUpload} className="bg-blue-600 hover:bg-blue-700">
                      Start Processing
                    </Button>
                  </div>
                )}
              </>
            )}

            {status !== "idle" && (
              <div className="w-full max-w-md mt-6 space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-700">
                    {status === "uploading" && "Uploading video..."}
                    {status === "processing" && "AI running YOLOv11 & OCR..."}
                    {status === "completed" && "Processing Complete"}
                  </span>
                  <span className="text-slate-500">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                
                {status === "completed" && (
                  <div className="flex items-center gap-2 text-emerald-600 justify-center mt-4 bg-emerald-50 py-2 px-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium text-sm">Video processed. 14 vehicles detected.</span>
                  </div>
                )}
                
                {(status === "uploading" || status === "processing") && (
                  <div className="flex items-center gap-2 text-blue-600 justify-center mt-4">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Please do not close this window</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Queue UI */}
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Processing Queue</CardTitle>
          <CardDescription>Recent video uploads and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "cam_south_12_04.mp4", status: "completed", time: "2 hrs ago", detections: 45 },
              { name: "toll_plaza_A.avi", status: "completed", time: "5 hrs ago", detections: 112 },
              { name: "corrupted_file.mov", status: "error", time: "1 day ago", detections: 0 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${item.status === 'completed' ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                    {item.status === 'completed' ? <Video className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-rose-600" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  {item.status === 'completed' ? (
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.detections} detections
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700">
                      Failed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
