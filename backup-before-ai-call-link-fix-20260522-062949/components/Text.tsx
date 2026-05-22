import { ReactNode } from "react";

type TextProps = {
    children: ReactNode;
    className?: string;
};

export default function Text({ children, className = "" }: TextProps) {
    return (
        <p
            className={`
        text-slate-400 
        leading-relaxed
        ${className}
      `}
        >
            {children}
        </p>
    );
}
