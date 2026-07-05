import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Video, ShieldAlert, FileSearch, Activity, Bell } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

const stats = [
  { title: "Vehicles Detected", value: "14,523", icon: Car, trend: "+12.5%", color: "text-blue-600" },
  { title: "Today's Uploads", value: "42", icon: Video, trend: "+4.1%", color: "text-emerald-600" },
  { title: "Watchlist Hits", value: "7", icon: ShieldAlert, trend: "-2.3%", color: "text-rose-600" },
  { title: "Investigations", value: "12", icon: FileSearch, trend: "+2", color: "text-indigo-600" },
];

const weeklyData = [
  { name: "Mon", vehicles: 1200, alerts: 2 },
  { name: "Tue", vehicles: 1900, alerts: 1 },
  { name: "Wed", vehicles: 1500, alerts: 4 },
  { name: "Thu", vehicles: 2200, alerts: 0 },
  { name: "Fri", vehicles: 2800, alerts: 5 },
  { name: "Sat", vehicles: 3100, alerts: 8 },
  { name: "Sun", vehicles: 2400, alerts: 3 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Vehicles Detected</p>
          <div className="flex items-end justify-between mt-1">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">14,523</span>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded font-medium">+12.5%</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Uploads</p>
          <div className="flex items-end justify-between mt-1">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">42 <span className="text-sm text-slate-400 font-normal">Videos</span></span>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded font-medium">+4.1%</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-red-500">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Watchlist Hits</p>
          <div className="flex items-end justify-between mt-1">
            <span className="text-2xl font-bold text-red-600 tracking-tight">7</span>
            <span className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded font-medium font-mono">URGENT</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Investigations</p>
          <div className="flex items-end justify-between mt-1">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">12</span>
            <span className="text-xs text-slate-500">Active Cases</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[460px]">
        
        {/* Main Chart */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-slate-700">Vehicle Detections (7 Days)</h3>
            <button className="text-xs font-semibold text-blue-600 hover:underline">VIEW ALL LOGS</button>
          </div>
          <div className="flex-1 p-4">
            <div className="h-full w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dx={-10} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  />
                  <Bar dataKey="vehicles" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-4 space-y-6 flex flex-col">
          <div className="bg-slate-900 rounded-xl p-5 shadow-lg shadow-blue-900/10 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold">Recent Alerts</h3>
              <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded animate-pulse">LIVE</span>
            </div>
            <div className="space-y-4 overflow-y-auto pr-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className={`p-3 border rounded-lg ${i === 0 ? 'bg-red-500/10 border-red-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
                  <div className="flex justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${i === 0 ? 'text-red-400' : 'text-blue-400'}`}>
                      {i === 0 ? 'Stolen Vehicle Hit' : 'Watchlist Match'}
                    </span>
                    <span className="text-[10px] text-slate-500">{i * 15 || 'Just Now'} mins ago</span>
                  </div>
                  <p className="text-white font-bold mt-1 text-sm">AP39 AB 1234</p>
                  <p className="text-slate-400 text-xs mt-1">Detected at <span className="text-white">City Square South</span></p>
                  {i === 0 && (
                    <button className="mt-3 w-full py-1.5 bg-red-600 text-white text-xs font-bold rounded hover:bg-red-700">
                      INTERCEPT NOW
                    </button>
                  )}
                  {i !== 0 && (
                    <button className="mt-3 w-full py-1.5 border border-slate-600 text-slate-300 text-xs font-bold rounded">
                      VIEW RECORD
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Footer Section */}
      <div className="flex flex-col md:flex-row gap-6 shrink-0 pt-4">
        <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-6 shadow-sm">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
             <Activity className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Model Accuracy</p>
            <div className="mt-1 flex items-center gap-4">
              <span className="text-xl font-bold">97.8%</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[97.8%] h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-6 shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
             <Activity className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Latency</p>
            <div className="mt-1 flex items-center gap-4">
              <span className="text-xl font-bold">42ms</span>
              <div className="flex-1 flex gap-0.5 items-end">
                <div className="h-4 w-2 bg-green-200 rounded-sm"></div>
                <div className="h-6 w-2 bg-green-300 rounded-sm"></div>
                <div className="h-5 w-2 bg-green-400 rounded-sm"></div>
                <div className="h-8 w-2 bg-green-500 rounded-sm"></div>
                <div className="h-3 w-2 bg-green-200 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-slate-800 text-white rounded-xl p-4 flex items-center justify-between shadow-lg">
           <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ready for Intercept</p>
              <h4 className="text-lg font-bold">Highway Patrol Alpha</h4>
           </div>
           <div className="flex -space-x-2 shrink-0">
              <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-600"></div>
              <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-500"></div>
              <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-blue-500 flex items-center justify-center text-[10px] font-medium">+3</div>
           </div>
        </div>
      </div>

    </div>
  );
}
