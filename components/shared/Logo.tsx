import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import Link from "next/link";

const logoVariants = cva(
    "relative group p-2 clear-start border flex justify-center group items-center transition-all w-10 h-10 text-xl",
    {
        variants: {
            size: {
                default: "",
                sm: "",
                lg: "w-16 h-16 text-3xl",
                xl: "w-20 h-20 text-4xl",
                "2xl": "w-32 h-32 text-6xl",
            },
            defaultVariants: {
                size: "default",
            },
        },
    }
);

interface LogoProps extends VariantProps<typeof logoVariants> {
    className?: string;
}

const Logo = ({ className, size }: LogoProps) => {
    return (
        <Link href={"/"}>
            <button className={cn(logoVariants({ size, className }))}>
                <div className="absolute h-[1px] top-0 left-0 bg-primary w-0 z-10  group-hover:w-full transition-all duration-300"></div>
                <div className="absolute h-[1px] w-0 bottom-0 right-0 bg-primary z-10 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute w-[1px] h-0 left-0 bottom-0 bg-primary z-10 group-hover:h-full transition-all duration-300"></div>
                <div className="absolute w-[1px] h-0 right-0 top-0 bg-primary z-10 group-hover:h-full transition-all duration-300 "></div>
                <p className="group-hover:text-primary-hover text-primary transition-all duration-300">
                    Mb
                </p>
            </button>
        </Link>
    );
};

export default Logo;
