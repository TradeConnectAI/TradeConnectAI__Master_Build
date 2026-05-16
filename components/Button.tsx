"use client";

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 
        bg-brand-blue 
        text-white 
        rounded-lg 
        shadow-brand 
        hover:bg-brand-blueDark 
        hover:shadow-brandHover 
        transition 
        font-medium
        ${className}
      `}
    >
      {children}
    </button>
  );
}
