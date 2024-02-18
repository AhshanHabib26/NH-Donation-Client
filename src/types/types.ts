import { ReactNode } from "react";

export type TContainerProps = {
  children: ReactNode;
};

type TWinter = {
  id: number;
  title: string;
  image: string;
  description: string[];
  category: string;
  size: string[];
};

export type TWinterCardProps = {
  winter: TWinter;
};

export type TSignInInputs = {
  email: string;
  password: string;
};
export type TSignUpInputs = {
  name: string;
  email: string;
  password: string;
};
