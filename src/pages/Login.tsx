import React from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";

export function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8 text-white">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-center">TRINETRA AI</h1>
          <p className="text-slate-400 mt-2 text-center text-sm uppercase tracking-widest font-semibold">Vehicle Intelligence Platform</p>
        </div>

        <Card className="border-none shadow-2xl bg-white/5 backdrop-blur-xl rounded-2xl">
          <CardContent className="pt-8 px-8 pb-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="officerId" className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Officer ID</Label>
                <Input 
                  id="officerId" 
                  placeholder="Enter your assigned ID" 
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-blue-500 h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Password</Label>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-blue-500 h-11"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900" />
                  Remember Me
                </label>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Forgot Password?</a>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 text-base font-semibold">
                Secure Login
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-slate-500 mt-8">
          UNAUTHORIZED ACCESS TO THIS SYSTEM IS STRICTLY PROHIBITED. <br/>
          ALL ACTIVITY IS LOGGED AND MONITORED.
        </p>
      </div>
    </div>
  );
}
