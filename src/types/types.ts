import { ReactNode } from "react";

export type TContainerProps = {
  children: ReactNode;
};

type TWinter = {
  _id: number;
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

export type TDataType = {
  _id: string;
  title: string;
  image: string;
  category: string;
  size: string[];
  description: string;
};

export type TVolunteer = {
  id: number;
  name: string;
  title: string;
  avatar: string;
};
