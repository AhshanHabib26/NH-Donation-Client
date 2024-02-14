import { TContainerProps } from "../types/types";

export default function Container({ children }: TContainerProps) {
  return <div className="w-full max-w-[1280px] px-4 mx-auto">{children}</div>;
}
