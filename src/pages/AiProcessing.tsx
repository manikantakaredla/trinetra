import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, ChevronRight, Activity, Cpu } from "lucide-react";
import { useNavigate } from "react-router";

export function AiProcessing() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);

  const tasks = [
    "Initializing Trinetra AI Core...",
    "Extracting Video Frames (60fps)...",
    "Running Vehicle Detection Model (YOLOv8)...",
    "Applying DeepSORT Tracking...",
    "Running ANPR / OCR Pipelines...",
    "Cross-referencing RTO Database...",
    "Checking Watchlist Hits...",
    "Generating Route Timelines...",
    "Finalizing Investigation Data..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        const newProgress = Math.min(old + Math.random() * 2, 100);
        setCurrentTask(Math.min(Math.floor((newProgress / 100) * tasks.length), tasks.length - 1));
        
        if (newProgress === 100) {
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [tasks.length]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4 fixed inset-0 z-50">
      
      <div className="w-full max-w-3xl space-y-12">
        <div className="text-center space-y-4">
           <div className="w-20 h-20 bg-blue-600/20 border border-blue-500 rounded-2xl mx-auto flex items-center justify-center relative">
             <div className="absolute inset-0 bg-blue-500/20 animate-ping rounded-2xl"></div>
             <Cpu className="w-10 h-10 text-blue-500 relative z-10" />
           </div>
           <div>
             <h1 className="text-3xl font-bold tracking-tight text-white uppercase">Trinetra AI Engine</h1>
             <p className="text-slate-400 mt-2 font-mono uppercase tracking-widest text-sm">Processing Evidence • INV-2023-089</p>
           </div>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 shadow-2xl backdrop-blur">
           <CardContent className="p-8">
             <div className="space-y-8">
                
                <div>
                   <div className="flex justify-between items-end mb-2 text-white">
                      <span className="font-mono font-bold text-sm">{tasks[currentTask]}</span>
                      <span className="font-mono font-bold">{Math.round(progress)}%</span>
                   </div>
                   <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-300 relative"
                        style={{ width: `${progress}%` }}
                      >
                         <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                   </div>
                   <p className="text-xs text-slate-500 font-mono mt-2 text-right">ETA: {Math.max(0, Math.ceil((100 - progress) / 5))}s</p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-xs text-slate-400 h-48 overflow-y-auto border border-slate-800/50">
                  {tasks.slice(0, currentTask + 1).map((task, i) => (
                    <div key={i} className="flex gap-3 mb-2">
                       <span className="text-blue-500 font-bold">{`[${String(i+1).padStart(2, '0')}]`}</span>
                       <span className={i === currentTask ? "text-white animate-pulse" : "text-green-500"}>
                          {i === currentTask ? task : `${task} DONE`}
                       </span>
                    </div>
                  ))}
                  {progress === 100 && (
                     <div className="text-green-500 font-bold mt-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        PROCESSING COMPLETE. ALL MODULES GREEN.
                     </div>
                  )}
                </div>

                {progress === 100 && (
                  <Button 
                    onClick={() => navigate("/investigations/INV-2023-089")}
                    className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold text-lg uppercase tracking-widest"
                  >
                    View Results
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                )}

             </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
