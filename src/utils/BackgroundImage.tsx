import Styles from "../styles/BackgroundImage.module.css";
import { TContainerProps } from "../types/types";
export default function BackgroundImage({ children }: TContainerProps) {
  return <div className={`${Styles.bgImage} py-12`}>{children}</div>;
}
