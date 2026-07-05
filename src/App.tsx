/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { Upload } from "./pages/Upload";
import { Search } from "./pages/Search";
import { Watchlist } from "./pages/Watchlist";
import { Alerts } from "./pages/Alerts";
import { RouteReconstruction } from "./pages/Routes";
import { Investigations } from "./pages/Investigations";
import { Cameras } from "./pages/Cameras";
import { Analytics } from "./pages/Analytics";
import { Login } from "./pages/Login";
import { NewInvestigation } from "./pages/NewInvestigation";

import { InvestigationDashboard } from "./pages/InvestigationDashboard";
import { VehicleGallery } from "./pages/VehicleGallery";
import { VehicleDetails } from "./pages/VehicleDetails";
import { PlateMismatch } from "./pages/PlateMismatch";
import { Reports } from "./pages/Reports";
import { AiProcessing } from "./pages/AiProcessing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/processing" element={<AiProcessing />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="investigation/new" element={<NewInvestigation />} />
          <Route path="investigations" element={<Investigations />} />
          <Route path="investigations/:id" element={<InvestigationDashboard />} />
          <Route path="investigations/:id/gallery" element={<VehicleGallery />} />
          <Route path="investigations/:id/mismatch" element={<PlateMismatch />} />
          <Route path="vehicle/:id" element={<VehicleDetails />} />
          <Route path="upload" element={<Upload />} />
          <Route path="search" element={<Search />} />
          <Route path="routes" element={<RouteReconstruction />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="reports" element={<Reports />} />
          <Route path="cameras" element={<Cameras />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<div className="p-8 text-slate-500">Users Module Pending</div>} />
          <Route path="settings" element={<div className="p-8 text-slate-500">Settings Module Pending</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
