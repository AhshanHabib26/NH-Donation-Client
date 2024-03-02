import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

export default function MainLayout() {

  const mode = useAppSelector(useCureentThemeMode)

  return (
    <div className={`${mode ? "bg-[#191F2D] text-white" : ""}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}
