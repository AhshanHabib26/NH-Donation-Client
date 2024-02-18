import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-12 p-8">
      <Sidebar />
      <div className="col-span-10 mx-5 bg-gradient-to-r from-[#EDECDA] to-[#cdebea] rounded-lg p-4">
        <Outlet />
      </div>
    </div>
  );
}
