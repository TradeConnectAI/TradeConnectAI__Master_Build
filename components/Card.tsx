import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        p-8 
        rounded-2xl 
        bg-slatebg-900 
        border border-slatebg-800 
        shadow-brand
        ${className}
      `}
    >
      {children}
    </div>
  );
}
