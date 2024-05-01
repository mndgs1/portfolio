import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkWithIconProps = {
    href: string;
    children: ReactNode;
    className?: string;
};

const LinkWithIcon = ({ href, children, className }: LinkWithIconProps) => {
    return (
        <Link href={href} target="_blank" className="inline-block">
            <Card
                className={cn(
                    "py-2 px-4 flex gap-2 items-center group transition-all mb-2",
                    className
                )}>
                {children}
            </Card>
        </Link>
    );
};

export default LinkWithIcon;
