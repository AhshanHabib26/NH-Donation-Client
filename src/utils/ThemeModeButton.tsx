import { Moon, SunMedium } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  toggleThemeMode,
  useCureentThemeMode,
} from "../redux/features/theme/themeSlice";

export default function ThemeModeButton() {
  const mode = useAppSelector(useCureentThemeMode);

  const dispatch = useAppDispatch();

  return (
    <div>
      <button  onClick={() => dispatch(toggleThemeMode())}>
        {mode ? (
          <SunMedium size={18} color="yellow"  />
        ) : (
          <Moon size={18} color="white"  />
        )}
      </button>
    </div>
  );
}
