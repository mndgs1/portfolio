import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type TypographyProps = {
    children: ReactNode;
    className?: string;
};

export function H1({ children, className }: TypographyProps) {
    const classes = cva(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 lg:mb-8"
    );

    return <h1 className={cn(classes({ className }))}>{children}</h1>;
}

export function H2({ children, className }: TypographyProps) {
    const classes = cva(
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl first:mt-0 mb-4 lg:mb-6"
    );

    return <h2 className={cn(classes({ className }))}>{children}</h2>;
}

export function H3({ children, className }: TypographyProps) {
    const classes = cva(
        "scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight mb-2"
    );

    return <h3 className={cn(classes({ className }))}>{children}</h3>;
}

export function H4({ children, className }: TypographyProps) {
    const classes = cva(
        "scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl"
    );

    return <h4 className={cn(classes({ className }))}>{children}</h4>;
}
