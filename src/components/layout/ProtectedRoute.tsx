import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCureentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector(useCureentToken);

  if (!token) {
    return <Navigate to="/sign-in" replace={true} />;
  }

  return children;
}
