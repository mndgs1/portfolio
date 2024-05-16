"use client";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    // { href: "/resume", label: "Resume" },
    // { href: "/contact", label: "Contact" },
];

export interface NavProps {
    listClasses?: string;
    linkClasses?: string;
}

const Navbar = ({ listClasses }: NavProps) => {
    const pathname = usePathname();

    return (
        <nav>
            <ul className={`flex gap-2 md:gap-10 items-center ${listClasses}`}>
                {Links.map(({ href, label }) => (
                    <NavLink
                        href={href}
                        label={label}
                        pathname={pathname}
                        key={label}
                    />
                ))}
                <Link href={"/contact"}>
                    <Button>Let&apos;s talk</Button>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
