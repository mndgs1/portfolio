import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type TypographyProps = {
    children: ReactNode;
    className?: string;
};

export function H1({ children, className }: TypographyProps) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 lg:mb-8",
                className
            )}>
            {children}
        </h1>
    );
}

export function H2({ children, className }: TypographyProps) {
    return (
        <h2
            className={cn(
                "scroll-m-20 pb-2 text-3xl font-extrabold tracking-tight lg:text-4xl first:mt-0 mb-4 lg:mb-6",
                className
            )}>
            {children}
        </h2>
    );
}

export function H3({ children, className }: TypographyProps) {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight mb-2",
                className
            )}>
            {children}
        </h3>
    );
}

export function H4({ children, className }: TypographyProps) {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl mb-2",
                className
            )}>
            {children}
        </h4>
    );
}
