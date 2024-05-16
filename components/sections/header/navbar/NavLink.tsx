import Link from "next/link";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    label: string;
    pathname: string;
}

const NavLink = ({ href, label, pathname, ...rest }: NavLinkProps) => {
    return (
        <li className="group">
            <Link
                href={href}
                className={`md:text-base w-max m-auto font-medium dark:font-normal group-hover:text-foreground transition-all flex flex-col items-center ${
                    pathname === href
                        ? "text-foreground"
                        : "text-muted-foreground"
                }`}
                {...rest}>
                {label}
                <div
                    className={`bg-primary group-hover:w-full h-[1px] transition-all duration-300 ${
                        pathname === href ? "w-full" : "w-0"
                    }`}></div>
            </Link>
        </li>
    );
};

export default NavLink;
