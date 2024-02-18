import { NavLink } from "react-router-dom";
import { Database, Home, LayoutDashboard, SquarePen } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-gradient-to-r from-[#EDECDA] to-[#cdebea] text-white col-span-2 h-screen top-0 left-0 sticky p-3 rounded-lg">
      <nav>
        <div className="flex items-center border p-1 border-slate-500 rounded-lg">
          <LayoutDashboard size={18} />
          <NavLink className="text-md ml-1" to="/dashboard">
            Dashboard
          </NavLink>
        </div>
        <div className="flex items-center border p-1 border-slate-500 rounded-lg mt-3">
          <Database size={18} />
          <NavLink className="text-md ml-1" to="/dashboard/winter-clothes">
            Winter Clothes
          </NavLink>
        </div>
        <div className="flex items-center border p-1 border-slate-500 rounded-lg mt-3">
          <SquarePen size={18} />
          <NavLink
            className="text-md ml-1"
            to="/dashboard/create-winter-clothes"
          >
            Create Winter Clothes
          </NavLink>
        </div>

        <div className="flex items-center border p-1 border-slate-500 rounded-lg mt-3">
          <Home size={18} />
          <NavLink className="text-md ml-1" to="/">
            Back To Home
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
