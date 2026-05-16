import { ReactNode } from "react";

type HeadingProps = {
    children: ReactNode;
    className?: string;
};

export default function Heading({ children, className = "" }: HeadingProps) {
    return (
        <h2
            className={`
        text-4xl 
        font-bold 
        tracking-tight 
        text-white
        ${className}
      `}
        >
            {children}
        </h2>
    );
}
