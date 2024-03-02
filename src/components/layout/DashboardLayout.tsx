import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardMobileMenu from "./DashboardMobileMenu";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

export default function DashboardLayout() {
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div>
      <div>
        <DashboardMobileMenu />
      </div>
      <div className="grid grid-cols-12 p-8">
        <Sidebar />
        <div
          className={` sm:col-span-12 md:col-span-12 lg:col-span-10 mx-5 ${ mode ? "bg-[#191F2D]" : "bg-gradient-to-r from-[#EDECDA] to-[#cdebea]"} rounded-lg p-4`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
