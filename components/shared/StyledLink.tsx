import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface StyledLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    href: string;
}

const StyledLink = ({
    href,
    children,
    className,
    ...rest
}: StyledLinkProps) => {
    const classes = cva("text-primary hover:text-primary-hover");

    return (
        <Link {...rest} href={href} className={cn(classes({ className }))}>
            {children}
        </Link>
    );
};

export default StyledLink;
