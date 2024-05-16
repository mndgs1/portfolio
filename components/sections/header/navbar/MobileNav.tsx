import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Navbar, { Links } from "./Navbar";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <SheetTrigger asChild>
                <Button
                    variant={"icon"}
                    size={"icon"}
                    className="md:hidden h-10 w-10">
                    <Menu size={"1.4rem"} />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex items-center justify-center">
                <nav>
                    <ul className={`flex flex-col gap-10 items-center`}>
                        {Links.map(({ href, label }) => (
                            <NavLink
                                href={href}
                                label={label}
                                pathname={pathname}
                                key={label}
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        ))}
                        <li>
                            <SheetClose asChild>
                                <Link href={"/contact"}>
                                    <Button>Let&apos;s talk</Button>
                                </Link>
                            </SheetClose>
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
