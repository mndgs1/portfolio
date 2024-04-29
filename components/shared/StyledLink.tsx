import Link from "next/link";

type StyledLinkProps = {
    href: string;
    children: React.ReactNode;
};

const StyledLink = ({ href, children }: StyledLinkProps) => {
    return (
        <Link href={href} className="text-primary hover:text-primary-hover">
            {children}
        </Link>
    );
};

export default StyledLink;
